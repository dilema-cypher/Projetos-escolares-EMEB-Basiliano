export default function Timeline() {
  const steps = ["Pesquisa", "Coleta", "Criação", "Compartilhar"];
  return (
    <section className="py-12 bg-linear-to-br from-blue-100 to-cyan-50">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
        {steps.map((s, i) => (
          <div key={i}>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow mx-auto">
              {i + 1}
            </div>
            <h4 className="mt-2 font-semibold">{s}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
