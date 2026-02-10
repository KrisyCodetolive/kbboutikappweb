import {
  Card,
  CardContent,
} from "@/components/ui/card";

type ProductMediaProps = {
  type: "image" | "video";
  src?: string;
  alt?: string;
};

export default function ProductMedia({ type, src, alt }: ProductMediaProps) {
  return (
    <Card className="w-full flex-none max-w-md mx-auto overflow-hidden p-0">
      <CardContent className="p-0">
        {type === "image" ? (
          <img
            src={src}
            alt={alt ?? "Image du produit"}
            className="w-full h-64 object-cover"
          />
        ) : (
          <video
            src={src}
            controls
            className="w-full h-64 object-cover bg-black"
          />
        )}
      </CardContent>
    </Card>
  );
}
