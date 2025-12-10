import { Apple, Microscope, Droplets, Mountain, Earth, BookOpen, Award, Heart, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

export default function Page() {
  const projects = [
    {
      title: 'Horta Escolar',
      description: 'Projeto que promove o cultivo de alimentos orgânicos na escola, ensinando aos alunos sobre alimentação saudável, sustentabilidade e o ciclo de vida das plantas.',
      icon: Apple,
      color: 'bg-green-500'
    },
    {
      title: 'Projeto de Ciências',
      description: 'Atividades práticas e experimentos que estimulam a curiosidade científica, desenvolvendo o pensamento crítico e a metodologia de investigação nos estudantes.',
      icon: Microscope,
      color: 'bg-purple-500'
    },
    {
      title: 'Dia da Água',
      description: 'Conscientização sobre a importância da preservação dos recursos hídricos através de atividades educativas, debates e práticas sustentáveis de uso da água.',
      icon: Droplets,
      color: 'bg-blue-500'
    },
    {
      title: 'Atividades Geografia',
      description: 'Exploração do mundo através de mapas, estudos de relevo, clima e cultura, conectando os alunos com diferentes realidades geográficas e sociais.',
      icon: Mountain,
      color: 'bg-amber-500'
    },
    {
      title: 'Atividades Meio Ambiente',
      description: 'Projetos focados em educação ambiental, reciclagem, preservação da natureza e desenvolvimento de uma consciência ecológica nas novas gerações.',
      icon: Earth,
      color: 'bg-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-green-600" />
            <h1 className="text-green-800">Projetos Educacionais</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="text-green-700 mb-4">
            Transformando Educação em Prática
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Descubra projetos educacionais inovadores que conectam teoria e prática, 
            promovendo uma aprendizagem significativa e sustentável para todos os alunos.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className={`${project.color} h-2 w-full`}></div>
                <div className="p-6">
                  <div className={`${project.color} w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Author Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Side */}
            <div className="relative h-64 md:h-full min-h-[400px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Inaja Maringues"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-green-600/20 to-transparent"></div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12">
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
                Sobre a Autora
              </div>
              <h2 className="text-green-800 mb-4">Inaja Maringues</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Educadora apaixonada por transformar a sala de aula em um espaço de descobertas 
                e aprendizado significativo. Com anos de experiência em educação ambiental e 
                ciências, Inaja desenvolve projetos inovadores que conectam os estudantes com 
                o mundo ao seu redor, promovendo consciência ambiental e pensamento crítico.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Acredita que a educação é a ferramenta mais poderosa para criar um futuro 
                sustentável e inspira seus alunos a serem agentes de mudança em suas comunidades.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-800">Experiência</p>
                    <p className="text-gray-500">Educação</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800">Inovação</p>
                    <p className="text-gray-500">Pedagógica</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-800">Paixão</p>
                    <p className="text-gray-500">Sustentabilidade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}