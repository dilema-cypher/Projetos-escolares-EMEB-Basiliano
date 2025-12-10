import { MapPin, Trees, Building2, Palette } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ConceptCard } from "./components/ConceptCard";
import { StudentWork } from "./components/StudentWork";

function App() {
  const studentWorks = [
    {
      id: 1,
      studentName: "Ana Silva",
      title: "Floresta Amazônica",
      type: "natural",
      imageUrl:
        "https://images.unsplash.com/photo-1620872619814-4fa5a3edd549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYXJ0JTIwbmF0dXJlfGVufDF8fHx8MTc2NTMxOTQ4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Desenhei árvores grandes e muitos animais da floresta",
    },
    {
      id: 2,
      studentName: "Pedro Costa",
      title: "Minha Cidade",
      type: "modified",
      imageUrl:
        "https://images.unsplash.com/photo-1588349664638-21ea5e25fdff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXJ0d29yayUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NTMxOTQ4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Desenhei prédios, carros e as ruas onde eu moro",
    },
    {
      id: 3,
      studentName: "Maria Santos",
      title: "Praia e Mar",
      type: "natural",
      imageUrl:
        "https://images.unsplash.com/photo-1761604478724-13fe879468cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGRyYXdpbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY1MzE5NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Fiz um desenho da praia com areia e o mar azul",
    },
    {
      id: 4,
      studentName: "João Oliveira",
      title: "Parque da Escola",
      type: "modified",
      imageUrl:
        "https://images.unsplash.com/photo-1763491905801-8257e00e5c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBhaW50aW5nJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NTMxOTQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Desenhei o parque com bancos, brinquedos e árvores plantadas",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-sky-50 to-green-50">
      {/* Header */}
      <header className="bg-linear-to-r from-green-600 to-blue-600 text-white py-8 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="w-10 h-10" />
            <h1 className="text-4xl">Geografia - Turma 2024</h1>
          </div>
          <p className="text-xl opacity-90">
            Paisagem Natural e Paisagem Modificada
          </p>
        </div>
      </header>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl text-green-700 mb-4 flex items-center gap-3">
            <Palette className="w-8 h-8" />
            Nosso Projeto
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Neste projeto, os alunos aprenderam sobre as diferenças entre
            paisagens naturais e paisagens modificadas pelo ser humano. Através
            de desenhos e textos, as crianças expressaram sua compreensão sobre
            como a natureza se apresenta em seu estado original e como as ações
            humanas transformam o ambiente ao nosso redor.
          </p>
        </div>

        {/* Concepts */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ConceptCard
            icon={<Trees className="w-12 h-12" />}
            title="Paisagem Natural"
            description="São paisagens formadas apenas pela natureza, sem interferência humana. Incluem florestas, rios, montanhas, praias, e toda vegetação e fauna em seu estado original."
            imageUrl="https://images.unsplash.com/photo-1674916251976-b64824a5f3de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZHNjYXBlJTIwZm9yZXN0fGVufDF8fHx8MTc2NTMxOTQ3OXww&ixlib=rb-4.1.0&q=80&w=1080"
            color="green"
          />
          <ConceptCard
            icon={<Building2 className="w-12 h-12" />}
            title="Paisagem Modificada"
            description="São paisagens transformadas pela ação humana. Incluem cidades, estradas, plantações, parques urbanos, pontes e todas as construções feitas pelo ser humano."
            imageUrl="https://images.unsplash.com/photo-1726689265081-3934d85d0367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwdXJiYW4lMjBtb2RpZmllZHxlbnwxfHx8fDE3NjUzMTk0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            color="blue"
          />
        </div>
      </section>

      {/* Student Works */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl text-blue-700 mb-6">Trabalhos dos Alunos</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Confira os desenhos maravilhosos criados pelos nossos alunos
            explorando os dois tipos de paisagens!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {studentWorks.map((work) => (
              <StudentWork key={work.id} work={work} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
