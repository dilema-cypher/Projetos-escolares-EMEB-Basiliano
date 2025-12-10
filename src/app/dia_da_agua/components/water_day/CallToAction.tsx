export default function CallToAction() {
  const tips = [
    { emoji: "💧", title: "Feche a torneira", text: "Escovando os dentes" },
    { emoji: "🚿", title: "Banhos rápidos", text: "5 minutos" },
    { emoji: "🌱", title: "Regar cedo", text: "Economiza água" },
    { emoji: "♻️", title: "Reutilize água", text: "Onde possível" },
  ];

  return (
    <section className="py-12 bg-linear-to-br from-teal-400 to-blue-500 text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-4">
        {tips.map((t, i) => (
          <div key={i} className="p-4 bg-white/10 backdrop-blur rounded shadow">
            <div className="text-3xl">{t.emoji}</div>
            <h4 className="font-semibold mt-2">{t.title}</h4>
            <p className="text-sm mt-1">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
