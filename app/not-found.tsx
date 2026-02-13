import Link from "next/link";

export default function NotFound() {
  const phoneNumber = "2250702019230";
  const message = encodeURIComponent(
    `👋 Salut !

Je suis intéressé par tes produits, mais je n’ai pas pu accéder à ton site de vente.  
💻 Peux-tu me dire plus sur tes articles ?  

Merci beaucoup ! 🙏`
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black text-center px-6">
      
      <h1 className="text-4xl font-bold mb-4">
        Oups 😕
      </h1>

      <p className="mb-6 text-lg max-w-md">
        Il semble qu&apos;il un problème dans l&apos;url ou le produit ne soit plus disponible,
        mais nous pouvons vous aider immédiatement.
      </p>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-600 text-white  hover:bg-purple-700  px-6 py-3 rounded-xl font-semibold shadow-lg transition"
      >
        💬 Contacter le vendeur sur WhatsApp
      </a>

    </main>
  );
}
