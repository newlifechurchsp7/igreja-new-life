import { Heart, Users, BookOpen, Handshake } from 'lucide-react';
import pastorRogerio from '../../imports/707617842_18401650978156988_5227879548903080612_n.jpg';
import pastorGabriela from '../../imports/707656327_18401651032156988_363796147539219129_n.jpg';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Amor',
      description: 'Amar a Deus acima de tudo e ao próximo como a si mesmo'
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Uma família acolhedora e unida em Cristo'
    },
    {
      icon: BookOpen,
      title: 'Palavra',
      description: 'Ensinamentos fundamentados na Bíblia Sagrada'
    },
    {
      icon: Handshake,
      title: 'Serviço',
      description: 'Servir ao próximo e fazer a diferença na sociedade'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Sobre Nossa Igreja</h2>
            <p className="text-gray-700 mb-4">
              O Ministério Apostólico New Life foi fundado com o propósito de levar a mensagem do Evangelho
              a todas as pessoas, criando um ambiente de amor, acolhimento e transformação.
            </p>
            <p className="text-gray-700 mb-4">
              Nossa missão é proporcionar um encontro genuíno com Deus através da adoração,
              do ensino da Palavra e do companheirismo cristão. Acreditamos que cada pessoa
              tem um propósito divino e estamos aqui para ajudá-lo a descobrir e viver esse chamado.
            </p>
            <p className="text-gray-700 mb-8">
              Somos uma igreja que valoriza a família, os relacionamentos autênticos e o
              crescimento espiritual. Seja você um visitante ou membro, terá um lugar especial
              em nossa comunidade.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="text-gray-900 font-semibold text-lg mb-4 border-l-4 border-black pl-3">Liderança Pastoral</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="h-48 rounded-lg overflow-hidden mb-3 shadow-md">
                    <img
                      src={pastorRogerio}
                      alt="Pastor Rogério"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="font-semibold text-gray-900">Pastor Rogério</p>
                </div>
                <div className="text-center">
                  <div className="h-48 rounded-lg overflow-hidden mb-3 shadow-md">
                    <img
                      src={pastorGabriela}
                      alt="Pastora Gabriela"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="font-semibold text-gray-900">Pastora Gabriela</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-black">Nossos Valores</h3>
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full mb-3">
                        <Icon className="w-7 h-7 text-black" />
                      </div>
                      <h4 className="font-semibold text-base mb-1 text-black">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
