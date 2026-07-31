import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoWhite from '../../imports/white_version__3_.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoWhite} alt="Ministério Apostólico New Life" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-white transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('schedule')} className="text-white/80 hover:text-white transition-colors">
              Cultos
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('live')} className="text-white/80 hover:text-white transition-colors">
              Ao Vivo
            </button>
            <button onClick={() => scrollToSection('location')} className="text-white/80 hover:text-white transition-colors">
              Localização
            </button>
            <button
              onClick={() => scrollToSection('contribution')}
              className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              Contribuir
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            <button onClick={() => scrollToSection('home')} className="text-left text-white/80 hover:text-white transition-colors py-2">
              Início
            </button>
            <button onClick={() => scrollToSection('schedule')} className="text-left text-white/80 hover:text-white transition-colors py-2">
              Cultos
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left text-white/80 hover:text-white transition-colors py-2">
              Sobre
            </button>
            <button onClick={() => scrollToSection('live')} className="text-left text-white/80 hover:text-white transition-colors py-2">
              Ao Vivo
            </button>
            <button onClick={() => scrollToSection('location')} className="text-left text-white/80 hover:text-white transition-colors py-2">
              Localização
            </button>
            <button
              onClick={() => scrollToSection('contribution')}
              className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-left font-semibold"
            >
              Contribuir
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
