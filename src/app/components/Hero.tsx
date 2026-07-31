import { ImageWithFallback } from './figma/ImageWithFallback';
import logoWhite from '../../imports/white_version__3_.png';
import churchImg from '../../imports/WhatsApp_Image_2026-06-13_at_12.36.05.jpeg';

export function Hero() {
  return (
    <section id="home" className="relative pt-16 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={churchImg}
          alt="Culto New Life"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative text-white text-center">
        <img src={logoWhite} alt="Ministério Apostólico New Life" className="h-24 md:h-32 w-auto mx-auto mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bem-vindo ao Ministério Apostólico New Life
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Um lugar onde você encontra amor, paz e esperança. Venha fazer parte da nossa família!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-lg transition-colors font-semibold"
          >
            Ver Horários dos Cultos
          </button>
          <button
            onClick={() => document.getElementById('live')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg transition-colors font-semibold"
          >
            Assistir Ao Vivo
          </button>
        </div>
      </div>
    </section>
  );
}
