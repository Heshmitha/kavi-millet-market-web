import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const Checkout = () => {
  const navigate = useNavigate();
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  
  const orderSummary = {
    subtotal: 235,
    deliveryCharges: 0,
    total: 235
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the order
    navigate("/order-summary");
  };

  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-foreground mb-6">Checkout</h1>
      
      <form onSubmit={handlePlaceOrder} className="space-y-6">
        {/* Delivery Address */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Delivery Address</h3>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" required />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="Enter your phone number" required />
            </div>
            
            <div>
              <Label htmlFor="address">Complete Address</Label>
              <Textarea 
                id="address" 
                placeholder="House/Flat No, Street, Area"
                className="resize-none"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="City" required />
              </div>
              <div>
                <Label htmlFor="pincode">Pincode</Label>
                <Input id="pincode" placeholder="Pincode" required />
              </div>
            </div>
          </div>
        </Card>

        {/* Delivery Options */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Delivery Options</h3>
          
          <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption}>
            <div className="flex items-center space-x-2 p-3 border rounded-lg">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard" className="flex-1">
                <div>
                  <p className="font-medium">Standard Delivery</p>
                  <p className="text-sm text-muted-foreground">3-5 business days • FREE</p>
                </div>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2 p-3 border rounded-lg">
              <RadioGroupItem value="express" id="express" />
              <Label htmlFor="express" className="flex-1">
                <div>
                  <p className="font-medium">Express Delivery</p>
                  <p className="text-sm text-muted-foreground">1-2 business days • ₹50</p>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </Card>

        {/* Payment Method */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Payment Method</h3>
          
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center space-x-2 p-3 border rounded-lg">
              <RadioGroupItem value="cod" id="cod" />
              <Label htmlFor="cod" className="flex-1">
                <div>
                  <p className="font-medium">Cash on Delivery</p>
                  <p className="text-sm text-muted-foreground">Pay when you receive</p>
                </div>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2 p-3 border rounded-lg opacity-50">
              <RadioGroupItem value="online" id="online" disabled />
              <Label htmlFor="online" className="flex-1">
                <div>
                  <p className="font-medium">Online Payment</p>
                  <p className="text-sm text-muted-foreground">Coming soon</p>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </Card>

        {/* Order Summary */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">Order Summary</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{orderSummary.subtotal}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-primary">
                {orderSummary.deliveryCharges === 0 ? "FREE" : `₹${orderSummary.deliveryCharges}`}
              </span>
            </div>
            
            <Separator />
            
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">₹{orderSummary.total}</span>
            </div>
          </div>
        </Card>

        <Button type="submit" className="w-full" size="lg">
          Place Order
        </Button>
      </form>
    </div>
  );
};

export default Checkout;