import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  MapPin, 
  Package, 
  Heart, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Phone,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = {
    name: "Priya Sharma",
    email: "priya.sharma@example.com", 
    phone: "+91 98765 43210",
    avatar: ""
  };

  const menuItems = [
    {
      icon: Package,
      label: "My Orders",
      href: "/orders",
      description: "View your order history"
    },
    {
      icon: MapPin,
      label: "Delivery Addresses",
      href: "/addresses",
      description: "Manage your addresses"
    },
    {
      icon: Heart,
      label: "Wishlist",
      href: "/wishlist", 
      description: "Your favorite products"
    },
    {
      icon: HelpCircle,
      label: "Help & Support",
      href: "/about",
      description: "Get help and contact us"
    }
  ];

  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-foreground mb-6">Profile</h1>
      
      {/* User Info Card */}
      <Card className="p-6 mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-lg">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-foreground">{user.name}</h2>
            <p className="text-sm text-muted-foreground">Kavi member since Jan 2024</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{user.email}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{user.phone}</span>
          </div>
        </div>
        
        <Button variant="outline" className="w-full mt-4">
          <User className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
      </Card>

      {/* Menu Items */}
      <div className="space-y-2 mb-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className="hover:shadow-soft transition-shadow">
              <Link to={item.href} className="block p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Link>
            </Card>
          );
        })}
      </div>

      {/* Quick Stats */}
      <Card className="p-4 mb-6">
        <h3 className="font-semibold mb-3">Quick Stats</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-xs text-muted-foreground">Total Orders</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">₹2,840</p>
            <p className="text-xs text-muted-foreground">Total Spent</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">₹320</p>
            <p className="text-xs text-muted-foreground">Saved</p>
          </div>
        </div>
      </Card>

      {/* App Info */}
      <Card className="p-4 mb-6">
        <h3 className="font-semibold mb-3">App Information</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Version</span>
            <span>1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Terms & Conditions</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Privacy Policy</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </Card>

      {/* Logout Button */}
      <Button variant="outline" className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
        <LogOut className="h-4 w-4 mr-2" />
        Logout
      </Button>
    </div>
  );
};

export default Profile;