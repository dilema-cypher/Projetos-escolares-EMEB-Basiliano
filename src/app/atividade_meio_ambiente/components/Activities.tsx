import { BookOpen, Pencil, Users } from 'lucide-react';

export function Activities() {
  const activities = [
    {
      icon: BookOpen,
      title: 'Leitura e Interpretação',
      description: 'Textos sobre temas ambientais para desenvolver consciência crítica',
      topics: [
        'Aquecimento global e mudanças climáticas',
        'Biodiversidade e ecossistemas',
        'Poluição e seus impactos'
      ]
    },
    {
      icon: Pencil,
      title: 'Produção Textual',
      description: 'Exercícios de escrita criativa e argumentativa sobre meio ambiente',
      topics: [
        'Redações sobre problemas ambientais',
        'Cartas de conscientização ecológica',
        'Relatórios de observação da natureza'
      ]
    },
    {
      icon: Users,
      title: 'Debates e Discussões',
      description: 'Rodas de conversa e debates sobre questões ambientais',
      topics: [
        'Desmatamento e suas consequências',
        'Consumo consciente',
        'Uso racional da água'
      ]
    }
  ];

  return (
    <section id="atividades" className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl text-center mb-4 text-green-800">Atividades Desenvolvidas</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Metodologias variadas para promover o aprendizado sobre meio ambiente
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                  <activity.icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-xl text-green-800 mb-2">{activity.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
                
                <div className="border-l-4 border-green-200 pl-4">
                  <p className="text-sm text-green-700 mb-2">Temas:</p>
                  <ul className="space-y-1">
                    {activity.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}