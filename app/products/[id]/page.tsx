"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { OrderSheet } from "@/components/OrderSheet";
import Ordercta from "@/components/btnPasserCommande";
import Cardre from "@/components/Cardre";
import { DescriptionCard } from "@/components/DescCart";
import ProductMedia from "@/components/ProductMedia";
import { Product } from "@/lib/type";
import { getProductById } from "@/services/products";
import Navbar from "@/app/components/NavBar";

export default function ProductPage() {
  const params = useParams();
  const Id = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(Id);
        setProduct(data);
      } catch (error) {
        console.error("Erreur chargement produit :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [Id]);

  if (loading) {
    return <p className="p-5">Chargement du produit...</p>;
  }

  if (!product) {
    return <p className="p-5">Produit introuvable</p>;
  }

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Navbar en haut */}
      <Navbar />

      {/* Contenu principal */}
      <main className="flex-grow p-5 max-h-[500px]  overflow-auto flex flex-col gap-5">
        {/* cover */}
        <ProductMedia
          type="image"
          src={product.mediaUrl}
          alt={product.nomProduit}
        />

        {/* metaData */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-lg">{product.nomProduit}</h1>

              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold">Lieu de vente</span>
                <p className="text-gray-500 text-sm">Yopougon - permis</p>
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="font-bold mt-2">Prix</h2>
                <p className="text-gray-500 text-sm">{product.prix} FCFA</p>
              </div>
              
            </div>

            <Cardre quantité={product.quantité} />
          </div>

          <DescriptionCard
            title="Description"
            description={product.description}
          />
        </div>
      </main>

      {/* OrderSheet en bas */}
      <OrderSheet priceUnit={product.prix} nomProduit={product.nomProduit}>
        <Ordercta />
      </OrderSheet>
    </div>
  );
}
