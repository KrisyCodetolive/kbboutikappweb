import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-6 text-center">
      
      {/* Logo / Nom */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        KBboutik
      </h1>

      {/* Texte principal */}
      <p className="text-lg md:text-xl max-w-2xl mb-4">
        Tu veux un corps en forme sans perdre du temps ? ⏱️
      </p>

      <p className="text-lg md:text-xl max-w-2xl mb-4">
        💪 Nos produits de sport t’aident à atteindre tes objectifs plus vite
      </p>

      <p className="text-lg md:text-xl max-w-2xl mb-8">
        🚚 Livraison partout en Côte d’Ivoire
      </p>

      {/* Bouton CTA */}
      <Link
        href="https://kbboutikappweb-d1zq.vercel.app/products/QIcOZ2SPlUAkf4J7llDZ"
        className="bg-purple-600 text-white hover:bg-purple-700  transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
      >
        🛒 Passer commande
      </Link>

    </main>
  );
}
