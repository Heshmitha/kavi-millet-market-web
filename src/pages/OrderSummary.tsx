import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Truck, Home } from "lucide-react";

const OrderSummary = () => {
  const orderDetails = {
    orderId: "KV" + Date.now().toString().slice(-6),
    products: [
      { name: "Ragi Batter", quantity: 2, price: 80 },
      { name: "Jowar Batter", quantity: 1, price: 75 }
    ],
    total: 235,
    estimatedDelivery: "3-5 business days",
    address: "123 Main Street, Chennai, Tamil Nadu 600001"
  };

  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Order Placed Successfully!</h1>
        <p className="text-muted-foreground">Thank you for choosing Kavi Food Products</p>
      </div>

      {/* Order Details */}
      <Card className="p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Order Details</h3>
          <Badge variant="secondary">#{orderDetails.orderId}</Badge>
        </div>
        
        <div className="space-y-3">
          {orderDetails.products.map((product, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-muted-foreground">Qty: {product.quantity}</p>
              </div>
              <span className="font-semibold">₹{product.price * product.quantity}</span>
            </div>
          ))}
          
          <div className="border-t pt-3 mt-3">
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-primary">₹{orderDetails.total}</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Delivery Information */}
      <Card className="p-4 mb-6">
        <h3 className="font-semibold mb-3 flex items-center">
          <Truck className="h-5 w-5 mr-2" />
          Delivery Information
        </h3>
        
        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <Home className="h-4 w-4 mt-1 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Delivery Address</p>
              <p className="text-sm text-muted-foreground">{orderDetails.address}</p>
            </div>
          </div>
          
          <div className="pt-2">
            <p className="text-sm">
              <span className="font-medium">Estimated Delivery:</span> {orderDetails.estimatedDelivery}
            </p>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button className="w-full" variant="outline" asChild>
          <Link to="/orders">Track Your Order</Link>
        </Button>
        
        <Button className="w-full" asChild>
          <Link to="/">Continue Shopping</Link>
        </Button>
      </div>

      {/* Support Info */}
      <div className="text-center mt-8 p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          Need help? Contact us at{" "}
          <a href="tel:+918888888888" className="text-primary font-medium">
            +91 88888 88888
          </a>
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;