export default function ProjectFooter() {
  return (
    <footer className="bg-gray-800 text-white mt-16 p-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-xl font-bold">
            Escola Municipal Professor José da Silva
          </h3>
          <p className="text-gray-300">Educação de qualidade para todos</p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-xl">
          Veja mais projetos
        </button>
      </div>
    </footer>
  );
}
