import { Calendar, Clock } from 'lucide-react';

export function Schedule() {
  const schedules = [
    {
      day: 'Domingo',
      time: '10:00',
      description: 'Culto matinal com toda a família'
    },
    {
      day: 'Domingo',
      time: '19:00',
      description: 'Momento especial de adoração'
    },
    {
      day: 'Quarta-feira',
      time: '20:00',
      description: 'Momento de adoração na Quarta-fire 🔥'
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Horários dos Cultos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Venha nos visitar! Temos cultos durante a semana para você e sua família
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-2 text-black mb-3">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">{schedule.day}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 mb-4">
                <Clock className="w-5 h-5" />
                <span>{schedule.time}</span>
              </div>
              <p className="text-gray-600 text-sm">{schedule.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
