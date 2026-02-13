// components/Loader.jsx
export default function Loader({ text = "Chargement..." }:{text?:string}) {
  return (
    <div className="h-full flex flex-col justify-center items-center p-5">
      <div className="w-12 h-12 border-4 border-purple-500  border-t-transparent border-solid rounded-full animate-spin"></div>
      <p className="mt-3 text-gray-700">{text}</p>
    </div>
  );
}
