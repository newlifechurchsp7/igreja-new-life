import { Facebook, Instagram, Youtube } from 'lucide-react';
import logoWhite from '../../imports/white_version__3_.png';

export function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoWhite} alt="Ministério Apostólico New Life" className="h-10 w-auto" />
            </div>
            <p className="text-sm">
              Um lugar de encontro com Deus, onde vidas são transformadas pelo amor de Cristo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Horários dos Cultos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('live')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Transmissão Ao Vivo
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contribution')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Contribuir
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Endereço</h3>
            <ul className="space-y-2 text-sm">
              <li>R. Coutinho Melo, 7100A</li>
              <li>Vila Yolanda - São Paulo, SP</li>
              <li>CEP: 08411-090</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/NLVilayolanda?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/newlifechurchsp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@CHURCHDAVILA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm mt-4">
              Siga-nos nas redes sociais e fique por dentro de tudo!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 Ministério Apostólico New Life. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-600">
            Desenvolvido com ❤️ para a glória de Deus
          </p>
        </div>
      </div>
    </footer>
  );
}
