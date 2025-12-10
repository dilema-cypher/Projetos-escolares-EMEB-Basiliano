import { BookOpen } from "lucide-react";

export default function ProjectInfo() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow rounded border-t-8 border-blue-500">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-semibold">Sobre o Projeto</h3>
          </div>
          <p className="text-gray-700">
            Projeto educativo sobre a importância da água.
          </p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h4 className="font-semibold">Como usar</h4>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Leia os fatos</li>
            <li>Veja o carrossel</li>
            <li>Participe da conservação</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
