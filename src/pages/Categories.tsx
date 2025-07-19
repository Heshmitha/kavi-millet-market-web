import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { 
  Wheat, 
  Cookie, 
  Nut, 
  Soup, 
  UtensilsCrossed,
  Droplets 
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: "millet-batters",
      name: "Millet Batters",
      icon: Soup,
      description: "Fresh & healthy millet batters",
      color: "text-orange-600"
    },
    {
      id: "sevai",
      name: "Sevai",
      icon: UtensilsCrossed,
      description: "Traditional millet vermicelli",
      color: "text-green-600"
    },
    {
      id: "millet-basket",
      name: "Millet Basket",
      icon: Wheat,
      description: "Variety of millet grains",
      color: "text-yellow-600"
    },
    {
      id: "nuts",
      name: "Nuts",
      icon: Nut,
      description: "Premium quality nuts",
      color: "text-amber-600"
    },
    {
      id: "noodles",
      name: "Noodles",
      icon: Cookie,
      description: "Healthy millet noodles",
      color: "text-red-600"
    },
    {
      id: "cooking-oil",
      name: "Cooking Oil",
      icon: Droplets,
      description: "Pure & natural oils",
      color: "text-blue-600"
    }
  ];

  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-foreground mb-6">Product Categories</h1>
      
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="block"
            >
              <Card className="p-4 h-32 flex flex-col items-center justify-center text-center hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <Icon className={`h-8 w-8 mb-2 ${category.color}`} />
                <h3 className="font-semibold text-sm text-foreground mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {category.description}
                </p>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;