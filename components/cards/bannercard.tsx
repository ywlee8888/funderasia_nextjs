// components/Card.tsx
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import { Button } from "@/components/ui/button"

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const BannerCard: React.FC<CardProps> = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <Button className="mt-4" onClick={onButtonClick}>
        {buttonText}
      </Button>
    </div>
  );
};

export default BannerCard;
