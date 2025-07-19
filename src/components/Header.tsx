import { Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import kaviLogo from "@/assets/kavi-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-soft">
      <div className="container max-w-md mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={kaviLogo} alt="Kavi" className="h-8 w-8 rounded-full" />
            <span className="font-bold text-lg text-primary">Kavi</span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-8 w-40 h-8 text-sm"
              />
            </div>
            
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;