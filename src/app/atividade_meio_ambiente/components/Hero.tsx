import { Sprout, Recycle, TreePine } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Educação Ambiental</h1>
          <p className="text-xl mb-8 text-green-50">
            Desenvolvendo consciência ecológica através do conhecimento e da prática
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Sprout className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Sustentabilidade</h3>
              <p className="text-green-50">Práticas para um futuro sustentável</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Recycle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Reciclagem</h3>
              <p className="text-green-50">Reduzir, reutilizar e reciclar</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <TreePine className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Preservação</h3>
              <p className="text-green-50">Proteger nossa biodiversidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
