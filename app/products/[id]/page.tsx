'use client'


import Navbar from "@/app/components/NavBar";
import Ordercta from "@/components/btnPasserCommande";
import Cardre from "@/components/Cardre";
import { DescriptionCard } from "@/components/DescCart";
import { OrderSheet } from "@/components/OrderSheet";
import ProductMedia from "@/components/ProductMedia";
import { Product } from "@/lib/type";
import { getProductById } from "@/services/products";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ProductPage() {
  const params = useParams();
  const Id = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //requête getProductById
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
    <div className="h-screen flex flex-col">
      <Navbar />

      <main className="p-5 w-full max-w-7xl mx-auto  h-[calc(100vh-150px)] overflow-auto transition-shadow duration-300 "
      style={{boxShadow: 'inset 0 -6px 6px -6px rgba(0,0,0,0.1)' }}
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          
          {/* Image */}
          <div className="w-full md:border">
            <ProductMedia
              type="image"
              src={product.mediaUrl}
              alt={product.nomProduit}
            />
          </div>

          {/* Infos */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            
            <div className="flex justify-between items-start md:px-20">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-2xl lg:text-3xl">
                  {product.nomProduit}
                </h1>

                <div>
                  <span className="text-lg font-semibold">
                    Lieu de vente
                  </span>
                  <p className="text-gray-500 text-sm">
                    Yopougon - permis
                  </p>
                </div>

                <div>
                  <h2 className="font-semibold">Prix</h2>
                  <p className="text-xl font-bold text-gray-700">
                    {product.prix} FCFA
                  </p>
                </div>
              </div>

              <Cardre quantité={product.quantité} />
            </div>

            <DescriptionCard
              title="Description"
              description={product.description}
            />
          </div>
        </div>
      </main>

      <OrderSheet
        priceUnit={product.prix}
        nomProduit={product.nomProduit}
      >
        <Ordercta />
      </OrderSheet>
    </div>
  );
}
