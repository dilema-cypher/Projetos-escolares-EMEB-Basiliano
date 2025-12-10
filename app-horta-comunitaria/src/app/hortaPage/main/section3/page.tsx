'use client';
import {useState, useRef} from "react";

export default function Section3(){
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const[isOn, setIsOn] = useState<boolean>(false);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  function handleClick(i:number){
    setOpenIndex(openIndex === i ? null : i);
  }
  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  
    return(
        <section className="py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[18px] font-bold mb-6 bg-linear-to-r from-lime-400 to-lime-500 rounded">Objetivos do Projeto </h2>
          <p className="text-[10px] md:text-base leading-relaxed max-w-3xl mx-auto mb-10">
            Pretende-se desenvolver nos estudantes da consciência da preservação da natureza, incentivando a atitudes como reuso, a reciclagem o cultivo de hortas e jardins escolares. A proposta
            parte da compreensão de que o indivíduo é parte integrante da natureza responsável por sua conservação, favorecendo a formação de cidadãos ecologicamente instruídos e engajados na
            construção de um futuro sustentável
          </p>

          <div className="grid md:grid-cols-1 gap-8">
            {[
              {
                title: "🌻 Metodologia",
                text: "As ações didáticas incluem rodas de conversa, atividades lúdicas, exibição de vídeos educativos, passeio para observação dos impactos ambientais e práticas de cultivo. Também são completadas dimensões artísticas e culturais, por meio de releituras de obras narrativas visuais e textos que articulam a experiência estética ao tema da sustentabilidade. Atividades de reciclagem e reaproveitamento de materiais, como a criação de brinquedos e objetos funcionais permite vivenciar a transformação do resíduo em recurso útil. O projeto assuma caráter interdisciplinar, articulando língua portuguesa artes, ciências e práticas sociais em torno da preservação ambiental. Além disso, busca-se consolidar aprendizagens que ultrapassam espaço escolar estimulando a adoção de comportamentos éticos e a compreensão do impacto das ações humanas no meio ambiente o trabalho é desenvolvido com apresentação do tema em sala de aula, seguida de práticas relacionadas ao cultivo de hortaliças especiarias, promovendo contato direto com solo e a valorização dos recursos naturais",
              },
              {
                title: "🍅 Resultados esperados",
                text: "Envolve a conscientização sobre o uso sustentável dos recursos, a mudança de hábito de consumo e a participação cidadã em ações de preservação.",
              },
              {
                title: "🤝 Conclusão",
                text: " A educação ambiental nesse sentido, constitui o processo contínuo de formação ética e social, capaz de fortalecer a cidadania e despertar o sentimento de pertencimento à natureza.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-lg transition">
                
                <button
                  onClick={() => handleClick(i)}
                  className="w-full flex justify-between px-2 items-center cursor-pointer"
                >
                  <h3 className="text-[18px] font-semibold mb-3">{item.title}</h3>
                  <p>{openIndex === i ? "-" : "+"}</p>
                </button>

                <div
                  ref={(el) => {
                    contentRefs.current[i] = el;
                  }}
                  className="overflow-hidden transition-all duration-700"
                  style={{
                    maxHeight:
                      openIndex === i
                        ? `${contentRefs.current[i]?.scrollHeight || 0}px`
                        : "0px",
                    opacity: openIndex === i ? 1 : 0,
                  }}

                >
                  <div className="p-2">
                    <p className="text-[10px] md:text-base">{item.text}</p>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>
    )
}