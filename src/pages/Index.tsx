import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  ChevronRight, 
  ShoppingCart,
  Wheat,
  Cookie,
  Nut,
  Soup,
  UtensilsCrossed,
  Droplets,
  Heart,
  Shield,
  Leaf,
  Users,
  Truck,
  MapPin,
  Star
} from "lucide-react";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero carousel data
  const heroSlides = [
    {
      image: heroBanner1,
      title: "Fresh Millet Products",
      subtitle: "100% Natural • Farmer Sourced",
      cta: "Shop Now"
    },
    {
      image: heroBanner2,
      title: "Healthy Living Starts Here",
      subtitle: "Premium Quality • Chemical Free",
      cta: "Explore Millets"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Product categories
  const categories = [
    { id: "millet-batters", name: "Millet Batters", icon: Soup, color: "text-orange-600" },
    { id: "sevai", name: "Sevai", icon: UtensilsCrossed, color: "text-green-600" },
    { id: "millet-basket", name: "Millet Basket", icon: Wheat, color: "text-yellow-600" },
    { id: "nuts", name: "Nuts", icon: Nut, color: "text-amber-600" },
    { id: "noodles", name: "Noodles", icon: Cookie, color: "text-red-600" },
    { id: "cooking-oil", name: "Cooking Oil", icon: Droplets, color: "text-blue-600" }
  ];

  // Featured products
  const featuredProducts = [
    {
      id: "1",
      name: "Ragi Batter",
      price: "₹80",
      originalPrice: "₹90",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop",
      badge: "Popular"
    },
    {
      id: "2",
      name: "Jowar Sevai", 
      price: "₹65",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop",
      badge: "New"
    },
    {
      id: "3",
      name: "Mixed Nuts",
      price: "₹120",
      originalPrice: "₹140",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop",
      badge: "Sale"
    }
  ];

  // Health benefits
  const healthBenefits = [
    {
      icon: Leaf,
      title: "Gluten-Free",
      description: "Perfect for gluten-sensitive diets"
    },
    {
      icon: Heart,
      title: "High Fiber",
      description: "Promotes digestive health"
    },
    {
      icon: Shield,
      title: "Diabetic-Friendly",
      description: "Low glycemic index foods"
    }
  ];

  // Why choose Kavi
  const whyChooseKavi = [
    { icon: Leaf, title: "100% Natural", subtitle: "No preservatives" },
    { icon: Users, title: "Farmer Sourced", subtitle: "Direct from farms" },
    { icon: Shield, title: "No Chemicals", subtitle: "Pure & safe" }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Priya R.",
      location: "Chennai",
      text: "Best millet products! My family loves the fresh batters.",
      rating: 5
    },
    {
      name: "Rajesh K.",
      location: "Hyderabad", 
      text: "Excellent quality and quick delivery. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Carousel */}
      <section className="relative h-64 overflow-hidden rounded-lg mx-4">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative w-full h-full flex-shrink-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-sm mb-4 opacity-90">{slide.subtitle}</p>
                  <Button variant="hero" size="lg">
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 text-white" />
        </button>
        
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <ChevronRight className="h-4 w-4 text-white" />
        </button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="px-4">
        <h2 className="text-xl font-bold text-foreground mb-4">Shop by Category</h2>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={`/products/${category.id}`}
                className="block"
              >
                <Card className="p-3 text-center hover:shadow-soft transition-all duration-300 hover:scale-105">
                  <Icon className={`h-6 w-6 mx-auto mb-2 ${category.color}`} />
                  <p className="text-xs font-medium text-foreground">{category.name}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4">
        <h2 className="text-xl font-bold text-foreground mb-4">Featured Products</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="flex-shrink-0 w-40 p-3 hover:shadow-soft transition-shadow">
              <div className="relative mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-24 rounded object-cover"
                />
                {product.badge && (
                  <Badge className="absolute top-1 left-1 text-xs bg-primary">{product.badge}</Badge>
                )}
              </div>
              
              <h3 className="font-medium text-sm text-foreground mb-1">{product.name}</h3>
              
              <div className="flex items-center space-x-1 mb-2">
                <span className="font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
              
              <Button size="sm" className="w-full text-xs" asChild>
                <Link to={`/product/${product.id}`}>
                  <ShoppingCart className="h-3 w-3 mr-1" />
                  Add
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Health Benefits */}
      <section className="px-4">
        <h2 className="text-xl font-bold text-foreground mb-4">Health Benefits of Millets</h2>
        <div className="grid gap-3">
          {healthBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-4 flex items-center space-x-3">
                <Icon className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Top Picks */}
      <section className="px-4">
        <h2 className="text-xl font-bold text-foreground mb-4">Top Picks for You</h2>
        <div className="space-y-3">
          {featuredProducts.slice(0, 2).map((product) => (
            <Card key={product.id} className="p-3 flex items-center space-x-3 hover:shadow-soft transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 rounded object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link to={`/product/${product.id}`}>View</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Kavi */}
      <section className="px-4">
        <h2 className="text-xl font-bold text-foreground mb-4">Why Choose Kavi</h2>
        <div className="grid grid-cols-3 gap-3">
          {whyChooseKavi.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-3 text-center">
                <Icon className="h-6 w-6 mx-auto text-primary mb-2" />
                <h3 className="text-xs font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Delivery Info */}
      <section className="px-4">
        <Card className="p-4 bg-gradient-warm text-center">
          <MapPin className="h-8 w-8 mx-auto text-primary mb-2" />
          <h3 className="font-semibold text-foreground mb-1">We Deliver Across</h3>
          <p className="text-sm text-muted-foreground mb-2">Tamil Nadu, Andhra Pradesh, Telangana</p>
          <p className="text-xs text-muted-foreground">Free delivery on orders above ₹500</p>
        </Card>
      </section>

      {/* Testimonials */}
      <section className="px-4">
        <h2 className="text-xl font-bold text-foreground mb-4">What Our Customers Say</h2>
        <div className="space-y-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-1 mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">"{testimonial.text}"</p>
                  <p className="text-xs font-medium text-foreground">
                    {testimonial.name} • {testimonial.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 bg-muted/50 mt-8">
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="font-bold text-lg text-foreground mb-2">Kavi Food Products</h3>
            <p className="text-sm text-muted-foreground">Bringing healthy millets to your table</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Quick Links</h4>
              <div className="space-y-1">
                <Link to="/categories" className="block text-muted-foreground hover:text-primary">Categories</Link>
                <Link to="/orders" className="block text-muted-foreground hover:text-primary">My Orders</Link>
                <Link to="/about" className="block text-muted-foreground hover:text-primary">About Us</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">Contact</h4>
              <div className="space-y-1 text-muted-foreground">
                <p>+91 88888 88888</p>
                <p>support@kavifood.com</p>
                <p>Chennai, Tamil Nadu</p>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © 2024 Kavi Food Products. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
