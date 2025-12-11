import { Lightbulb, Beaker, Users, BookOpen } from "lucide-react";

const data = [
  {
    icon: Lightbulb,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
    title: "Objetivo do Projeto",
    text: "Desenvolver a curiosidade científica dos alunos através de atividades práticas e experimentos guiados.",
  },
  {
    icon: Beaker,
    color: "text-blue-500",
    bg: "bg-blue-100",
    title: "Metodologia",
    text: "Experimentos semanais, registros em diários de bordo e apresentações coletivas.",
  },
  {
    icon: Users,
    color: "text-green-500",
    bg: "bg-green-100",
    title: "Equipe Participante",
    text: "Alunos do 5º ano C e D, orientados pelo professor responsável pelos projetos cientíﬁcos.",
  },
  {
    icon: BookOpen,
    color: "text-purple-500",
    bg: "bg-purple-100",
    title: "Resultados Alcançados",
    text: "Melhora no engajamento, aumento da autonomia e compreensão de conceitos científicos básicos.",
  },
];

export default function ProjectInfo() {
  return (
    <section className="mt-12 px-4 md:px-10">
      <h1 className="text-3xl md:text-4xl text-blue-600 font-bold text-center">
        Projeto de Ciências – Explorando o Mundo ao Nosso Redor
      </h1>

      <p className="text-center text-lg text-gray-600 mt-2 mb-10">
        Turmas: 5º Ano C - 5º Ano D
      </p>

      {/* GRID CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 flex gap-4"
          >
            <div
              className={`p-4 rounded-full ${item.bg} flex items-center justify-center`}
            >
              <item.icon className={`w-8 h-8 ${item.color}`} />
            </div>

            <div>
              <h2 className={`text-xl font-bold ${item.color}`}>
                {item.title}
              </h2>
              <p className="text-gray-600 mt-1">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SEÇÃO FINAL */}
      <div className="mt-12 p-8 rounded-2xl bg-linear-to-r from-blue-500 to-green-500 text-white text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-2">Impacto na Comunidade</h3>
        <p className="text-lg">
          O projeto despertou o interesse dos alunos pela ciência, tornando-os
          mais críticos, curiosos e participativos em seu ambiente social.
        </p>
      </div>
    </section>
  );
}
