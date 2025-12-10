export default function Header(){
    return(
      <section className="relative bg-green-700 text-white text-center py-16 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1597047084897-51e81819a499?auto=format&fit=crop&w=1500&q=80"
            alt="Horta Escolar"
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          />
          
          <div className="relative z-10">
            <h1 className="text-[13px] md:text-5xl font-bold mb-4">
             EMEB Basiliano do Carmo de Jesus
            </h1>
            <p className="text-[10px] md:text-xl max-w-2xl mx-auto">
              Projetos escolares 2025 produzido por <b className="text-blue-900">Autor:</b> Profª Esp. Inajá Maringues da Silva Chiarelli e <b className="text-blue-900">Coautores:</b> Profº Me. Flávio Marcelo Bueno de Castro e
               Profº Esp. Gilmar Antônio Frydriszewski
            </p>
          </div>
      </section>
    )
}