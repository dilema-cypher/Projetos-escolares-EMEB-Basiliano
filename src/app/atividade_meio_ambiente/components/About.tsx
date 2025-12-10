import { GraduationCap, Target } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-green-800">Sobre o Trabalho</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl mb-3 text-green-800">Experiência</h3>
              <p className="text-gray-600">
                Dedicação à educação ambiental e formação de cidadãos conscientes
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl mb-3 text-green-800">Missão</h3>
              <p className="text-gray-600">
                Promover a consciência ecológica através de atividades práticas e reflexivas
              </p>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-8">
            <p className="text-gray-700 leading-relaxed">
              O trabalho desenvolvido tem como objetivo sensibilizar alunos sobre a importância 
              da preservação ambiental. Através de uma abordagem interdisciplinar, buscamos integrar 
              teoria e prática, promovendo reflexões sobre nosso papel na construção de um mundo 
              mais sustentável e preparando os estudantes para serem agentes de transformação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}