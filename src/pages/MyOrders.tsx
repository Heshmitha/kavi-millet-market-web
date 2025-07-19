import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Package, Truck } from "lucide-react";

const MyOrders = () => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  
  const orders = [
    {
      id: "KV123456",
      date: "2024-01-15",
      status: "Delivered",
      statusColor: "bg-green-500",
      total: 235,
      items: [
        { name: "Ragi Batter", quantity: 2, price: 80 },
        { name: "Jowar Batter", quantity: 1, price: 75 }
      ],
      deliveryDate: "2024-01-18"
    },
    {
      id: "KV123457", 
      date: "2024-01-10",
      status: "In Transit",
      statusColor: "bg-blue-500",
      total: 160,
      items: [
        { name: "Mixed Millet Batter", quantity: 2, price: 80 }
      ],
      deliveryDate: "2024-01-20"
    },
    {
      id: "KV123458",
      date: "2024-01-05",
      status: "Processing",
      statusColor: "bg-yellow-500", 
      total: 340,
      items: [
        { name: "Ragi Batter", quantity: 1, price: 80 },
        { name: "Jowar Batter", quantity: 2, price: 75 },
        { name: "Bajra Batter", quantity: 1, price: 85 }
      ],
      deliveryDate: "2024-01-22"
    }
  ];

  const toggleOrderExpansion = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  if (orders.length === 0) {
    return (
      <div className="container max-w-md mx-auto px-4 py-20 text-center">
        <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold text-foreground mb-2">No Orders Yet</h1>
        <p className="text-muted-foreground mb-6">Start shopping to see your orders here!</p>
        <Button asChild>
          <a href="/categories">Start Shopping</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-foreground mb-6">My Orders</h1>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="font-semibold">#{order.id}</p>
                <p className="text-sm text-muted-foreground">{order.date}</p>
              </div>
              
              <Badge className={`${order.statusColor} text-white`}>
                {order.status}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg font-bold text-primary">₹{order.total}</span>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleOrderExpansion(order.id)}
              >
                {expandedOrder === order.id ? (
                  <>Hide Details <ChevronUp className="h-4 w-4 ml-1" /></>
                ) : (
                  <>View Details <ChevronDown className="h-4 w-4 ml-1" /></>
                )}
              </Button>
            </div>
            
            {expandedOrder === order.id && (
              <div className="border-t pt-3 space-y-3">
                <div>
                  <h4 className="font-medium mb-2">Items Ordered</h4>
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{item.name} (x{item.quantity})</span>
                        <span>₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-sm">
                  <Truck className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {order.status === "Delivered" 
                      ? `Delivered on ${order.deliveryDate}`
                      : `Expected delivery: ${order.deliveryDate}`
                    }
                  </span>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  {order.status !== "Delivered" && (
                    <Button variant="outline" size="sm" className="flex-1">
                      Track Order
                    </Button>
                  )}
                  
                  <Button variant="outline" size="sm" className="flex-1">
                    Reorder
                  </Button>
                  
                  {order.status === "Delivered" && (
                    <Button variant="outline" size="sm" className="flex-1">
                      Rate & Review
                    </Button>
                  )}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;