import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-tech-blue to-tech-blue-dark rounded"></div>
          <span className="text-2xl font-bold text-foreground">BQR</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#solutions" className="text-foreground hover:text-primary transition-colors">Solutions</a>
          <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#support" className="text-foreground hover:text-primary transition-colors">Support</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">Login</Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;