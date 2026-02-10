import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Product } from "@/lib/type"



export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const ref = doc(db, "Produits", id);
    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) {
      return null;
    }

    return {
      id: snapshot.id,
      ...(snapshot.data() as Omit<Product, "id">),
    };
  } catch (error) {
    console.error("Erreur récupération produit :", error);
    return null;
  }
};

