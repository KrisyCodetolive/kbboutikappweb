import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface DescriptionCardProps {
  title: string;
  description: string;
}

export const DescriptionCard: React.FC<DescriptionCardProps> = ({ title, description }) => {
  return (
    <Card className="max-w-md mx-auto my-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex-none gap-1 py-3">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-700 text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
