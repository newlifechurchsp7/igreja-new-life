import { MapPin, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import churchPhoto from '../../imports/657542134_984324720834511_7951594785840736432_n-1.jpg';

export function Location() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Nossa Localização</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Venha nos visitar! Estamos de portas abertas para recebê-lo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-black">Endereço</h3>
                  <p className="text-gray-600">
                    R. Coutinho Melo, 7100A<br />
                    Vila Yolanda - São Paulo, SP<br />
                    CEP: 08411-090
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-black">Horários dos Cultos</h3>
                  <p className="text-gray-600">
                    Domingos: 10h e 19h<br />
                    Quartas-feiras: 20h
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.!2d-46.4339!3d-23.5635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66a6b73d3b3d%3A0x0!2sR.%20Coutinho%20Melo%2C%207100A%20-%20Vila%20Yolanda%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008411-090!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da localização da igreja"
            ></iframe>
          </div>
        </div>

        <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
          <ImageWithFallback
            src={churchPhoto}
            alt="Comunidade New Life"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h3 className="text-xl font-semibold">Ministério Apostólico New Life</h3>
            <p className="text-sm opacity-90">Um lugar de encontro com Deus</p>
          </div>
        </div>
      </div>
    </section>
  );
}
