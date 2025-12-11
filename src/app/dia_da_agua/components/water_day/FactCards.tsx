import { Droplet } from "lucide-react";

const facts = [
  {
    id: 1,
    title: "70% do corpo é água",
    text: "Grande parte do corpo é composto por água.",
    color: "blue-300",
  },
  {
    id: 2,
    title: "A água cobre cerca de 70% da superfície da Terra",
    text: "Mas apenas 3% é potável.",
    color: "cyan-300",
  },
  {
    id: 3,
    title: "Consumo conciente",
    text: "Feche a torneira ao escovar os dentes.",
    color: "teal-300",
  },
];

export default function FactCards() {
  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-center mb-5 text-blue-500">
          Curiosidades
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {facts.map((f) => (
            <div
              key={f.id}
              className={`bg-white rounded-lg shadow p-6 border-t-4 border-${f.color} hover:scale-105 transition`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-full bg-${f.color} bg-opacity-30`}>
                  <Droplet className="w-6 h-6" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="text-gray-700">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
