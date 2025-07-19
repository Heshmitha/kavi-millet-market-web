import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  // Mock product data
  const product = {
    id: "1",
    name: "Ragi Batter",
    price: 80,
    weight: "1kg",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
    description: "Fresh finger millet batter made from premium quality ragi. Rich in calcium and iron, perfect for healthy idlis and dosas.",
    ingredients: "Ragi (Finger Millet), Water, Salt",
    benefits: ["High in Calcium", "Rich in Iron", "Gluten-Free", "Diabetic Friendly"],
    inStock: true
  };

  const relatedProducts = [
    { id: "2", name: "Jowar Batter", price: "₹75", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=150&h=150&fit=crop" },
    { id: "3", name: "Bajra Batter", price: "₹85", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=150&h=150&fit=crop" }
  ];

  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <div className="space-y-6">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 rounded-lg object-cover shadow-soft"
          />
          {product.inStock && (
            <Badge className="absolute top-2 right-2 bg-primary">In Stock</Badge>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{product.name}</h1>
            <p className="text-lg text-muted-foreground">{product.weight}</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-primary">₹{product.price}</span>
            
            {/* Quantity Selector */}
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-semibold">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Description */}
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-sm text-muted-foreground">{product.description}</p>
          </Card>

          {/* Ingredients */}
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Ingredients</h3>
            <p className="text-sm text-muted-foreground">{product.ingredients}</p>
          </Card>

          {/* Benefits */}
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Health Benefits</h3>
            <div className="flex flex-wrap gap-2">
              {product.benefits.map((benefit) => (
                <Badge key={benefit} variant="secondary">{benefit}</Badge>
              ))}
            </div>
          </Card>

          {/* Add to Cart Button */}
          <Button className="w-full" size="lg">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart - ₹{product.price * quantity}
          </Button>

          {/* Related Products */}
          <div className="space-y-3">
            <h3 className="font-semibold">You might also like</h3>
            <div className="flex space-x-3 overflow-x-auto">
              {relatedProducts.map((item) => (
                <Card key={item.id} className="flex-shrink-0 p-3 w-36">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-20 rounded object-cover mb-2"
                  />
                  <h4 className="text-sm font-medium">{item.name}</h4>
                  <p className="text-sm text-primary">{item.price}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;