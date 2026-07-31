import { Play, Youtube, Clock } from 'lucide-react';

export function LiveStream() {
  return (
    <section id="live" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Assista Nossos Cultos Ao Vivo</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Não pode estar presente? Acompanhe nossas transmissões ao vivo pelo YouTube
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            {/* Video placeholder */}
            <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-20 h-20 text-white mx-auto mb-4 opacity-80" />
                <p className="text-white text-lg">Transmissão ao vivo aparecerá aqui</p>
                <p className="text-gray-400 mt-2">Durante os horários dos cultos</p>
              </div>
            </div>

            <div className="p-6 bg-white text-gray-900">
              <h3 className="font-semibold text-xl mb-4">Como Assistir</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Youtube className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">YouTube</h4>
                    <p className="text-gray-600 text-sm">
                      Acesse nosso canal no YouTube e ative as notificações para não perder nenhuma transmissão
                    </p>
                    <a
                      href="https://youtube.com/@CHURCHDAVILA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-700 text-sm inline-block mt-2 font-medium underline"
                    >
                      Acessar Canal @CHURCHDAVILA →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Horários das Transmissões</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Domingos: 10:00 e 19:00</li>
                      <li>• Quartas-feiras: 20:00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400">
            💡 Durante a transmissão ao vivo, você pode participar pelo chat e enviar suas orações
          </p>
        </div>
      </div>
    </section>
  );
}
