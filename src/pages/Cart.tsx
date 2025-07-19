import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2 } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Ragi Batter",
      price: 80,
      quantity: 2,
      weight: "1kg",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&h=100&fit=crop"
    },
    {
      id: "2",
      name: "Jowar Batter", 
      price: 75,
      quantity: 1,
      weight: "1kg",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&h=100&fit=crop"
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCharges = subtotal > 500 ? 0 : 50;
  const total = subtotal + deliveryCharges;

  if (cartItems.length === 0) {
    return (
      <div className="container max-w-md mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-6">Add some healthy products to get started!</p>
        <Button asChild>
          <Link to="/categories">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-foreground mb-6">Shopping Cart</h1>
      
      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.weight}</p>
                <p className="text-lg font-bold text-primary">₹{item.price}</p>
                
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    className="h-8 w-8 text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Cart Summary */}
      <Card className="p-4 mb-6">
        <h3 className="font-semibold mb-3">Order Summary</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span className={deliveryCharges === 0 ? "text-primary" : ""}>
              {deliveryCharges === 0 ? "FREE" : `₹${deliveryCharges}`}
            </span>
          </div>
          
          {subtotal < 500 && (
            <p className="text-xs text-muted-foreground">
              Add ₹{500 - subtotal} more for free delivery
            </p>
          )}
          
          <Separator />
          
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-primary">₹{total}</span>
          </div>
        </div>
      </Card>

      <Button className="w-full" size="lg" asChild>
        <Link to="/checkout">Proceed to Checkout</Link>
      </Button>
    </div>
  );
};

export default Cart;