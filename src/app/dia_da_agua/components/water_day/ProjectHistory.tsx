import { Users } from "lucide-react";

export default function ProjectHistory() {
  return (
    <section className="py-12 bg-cyan-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded shadow p-6 border-t-8 border-cyan-400">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-cyan-500" />
            <h3 className="text-xl font-semibold">Nossa História</h3>
          </div>
          <p className="text-gray-700">Projeto criado por educadores locais.</p>
        </div>
      </div>
    </section>
  );
}
