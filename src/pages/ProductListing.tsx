import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const ProductListing = () => {
  const { category } = useParams();
  
  // Mock product data
  const products = [
    {
      id: "1",
      name: "Ragi Batter",
      price: "₹80",
      weight: "1kg",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      description: "Fresh finger millet batter"
    },
    {
      id: "2", 
      name: "Jowar Batter",
      price: "₹75",
      weight: "1kg", 
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      description: "Pure sorghum batter"
    },
    {
      id: "3",
      name: "Bajra Batter", 
      price: "₹85",
      weight: "1kg",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      description: "Nutritious pearl millet batter"
    },
    {
      id: "4",
      name: "Mixed Millet Batter",
      price: "₹90", 
      weight: "1kg",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      description: "Blend of healthy millets"
    }
  ];

  const categoryName = category?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Products';

  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-foreground mb-6">{categoryName}</h1>
      
      <div className="space-y-4">
        {products.map((product) => (
          <Card key={product.id} className="p-4 hover:shadow-soft transition-shadow">
            <div className="flex space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{product.description}</p>
                <p className="text-sm text-muted-foreground mb-2">{product.weight}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/product/${product.id}`}>View</Link>
                    </Button>
                    <Button variant="default" size="sm">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;