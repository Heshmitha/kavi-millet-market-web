import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Heart, 
  Leaf, 
  Users, 
  Truck,
  Phone,
  Mail,
  MessageCircle 
} from "lucide-react";

const About = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-foreground mb-6">About Kavi Food</h1>
      
      {/* Brand Story */}
      <Card className="p-6 mb-6">
        <div className="text-center mb-4">
          <Heart className="h-12 w-12 mx-auto text-primary mb-3" />
          <h2 className="text-xl font-semibold mb-2">Our Story</h2>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Kavi Food Products was born from a simple belief - everyone deserves access to healthy, 
          natural food. Founded in 2020, we started our journey to bring traditional millet-based 
          foods to modern kitchens.
        </p>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          Our mission is to promote healthy eating through authentic, chemical-free products 
          sourced directly from farmers across Tamil Nadu, Andhra Pradesh, and Telangana.
        </p>
      </Card>

      {/* Why Choose Us */}
      <Card className="p-6 mb-6">
        <h3 className="font-semibold mb-4">Why Choose Kavi?</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Leaf className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium text-sm">100% Natural</h4>
              <p className="text-xs text-muted-foreground">No preservatives, chemicals, or artificial additives</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Users className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium text-sm">Farmer Sourced</h4>
              <p className="text-xs text-muted-foreground">Direct partnership with local farmers</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Heart className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium text-sm">Health First</h4>
              <p className="text-xs text-muted-foreground">Rich in nutrients, perfect for diabetic-friendly diets</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Truck className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium text-sm">Fresh Delivery</h4>
              <p className="text-xs text-muted-foreground">Quick delivery across TN, AP, and Telangana</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Delivery Policy */}
      <Card className="p-6 mb-6">
        <h3 className="font-semibold mb-4">Delivery Information</h3>
        
        <div className="space-y-3 text-sm">
          <div>
            <h4 className="font-medium">Delivery Areas</h4>
            <p className="text-muted-foreground">Tamil Nadu, Andhra Pradesh, Telangana</p>
          </div>
          
          <div>
            <h4 className="font-medium">Delivery Time</h4>
            <p className="text-muted-foreground">3-5 business days for standard delivery</p>
          </div>
          
          <div>
            <h4 className="font-medium">Free Delivery</h4>
            <p className="text-muted-foreground">On orders above ₹500</p>
          </div>
          
          <div>
            <h4 className="font-medium">Packaging</h4>
            <p className="text-muted-foreground">Eco-friendly packaging to maintain freshness</p>
          </div>
        </div>
      </Card>

      {/* Contact Information */}
      <Card className="p-6 mb-6">
        <h3 className="font-semibold mb-4">Contact Us</h3>
        
        <div className="space-y-3">
          <a href="tel:+918888888888" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-muted-foreground">+91 88888 88888</p>
            </div>
          </a>
          
          <a href="mailto:support@kavifood.com" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">support@kavifood.com</p>
            </div>
          </a>
          
          <a href="https://wa.me/918888888888" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors">
            <MessageCircle className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">WhatsApp</p>
              <p className="text-sm text-muted-foreground">Quick support & orders</p>
            </div>
          </a>
        </div>
      </Card>

      {/* Contact Form */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Send us a Message</h3>
        
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <div>
            <Label htmlFor="contact-name">Name</Label>
            <Input id="contact-name" placeholder="Your full name" required />
          </div>
          
          <div>
            <Label htmlFor="contact-email">Email</Label>
            <Input id="contact-email" type="email" placeholder="Your email address" required />
          </div>
          
          <div>
            <Label htmlFor="contact-message">Message</Label>
            <Textarea 
              id="contact-message" 
              placeholder="How can we help you?"
              className="resize-none h-24"
              required
            />
          </div>
          
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default About;