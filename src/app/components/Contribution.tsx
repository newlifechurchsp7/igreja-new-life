import { Heart, Smartphone, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function Contribution() {
  const [copiedPix, setCopiedPix] = useState(false);

  const pixKey = 'minapnewlife@gmail.com';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  return (
    <section id="contribution" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <Heart className="w-8 h-8 text-black" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Contribua com Nossa Obra</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sua contribuição ajuda a manter nossa igreja e a desenvolver projetos que transformam vidas.
            Toda doação é uma semente plantada no Reino de Deus.
          </p>
        </div>

        <div className="max-w-sm mx-auto mb-12">
          <div className="bg-gray-50 p-8 rounded-xl text-center shadow-md border border-gray-200">
            <Smartphone className="w-14 h-14 text-black mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2 text-black">PIX</h3>
            <p className="text-gray-600 text-sm mb-4">Forma rápida e prática de contribuir</p>
            {/* QR Code placeholder — substituir pela imagem quando disponível */}
            <div className="bg-white p-4 rounded-lg mb-4 border border-gray-200 flex items-center justify-center">
              <div className="w-36 h-36 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 text-xs gap-1">
                <span className="text-2xl">📷</span>
                <span>QR Code em breve</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg mb-4 border border-gray-200">
              <p className="text-sm text-gray-500 mb-1">Chave PIX</p>
              <p className="text-gray-900 font-medium break-all">{pixKey}</p>
            </div>
            <button
              onClick={handleCopyPix}
              className="w-full bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
            >
              {copiedPix ? (
                <>
                  <Check className="w-4 h-4" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar Chave PIX
                </>
              )}
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 border-l-4 border-black p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-3 text-black">Como sua contribuição é usada:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-black mt-1">•</span>
              <span>Manutenção e melhorias da estrutura da igreja</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black mt-1">•</span>
              <span>Projetos sociais e assistência a famílias necessitadas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black mt-1">•</span>
              <span>Apoio a missionários e trabalhos de evangelização</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black mt-1">•</span>
              <span>Atividades e ministérios da igreja (crianças, jovens, música, etc.)</span>
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 italic">
            "Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade;
            porque Deus ama ao que dá com alegria." - 2 Coríntios 9:7
          </p>
        </div>
      </div>
    </section>
  );
}
