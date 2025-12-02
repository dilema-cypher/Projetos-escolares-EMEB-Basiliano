"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function Section2() {
  const [onModal, setOnModal] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  
  const slogansImg = [
    { url: "/imgs/imgProjetos/slogan-1.jpeg" },
    { url: "/imgs/imgProjetos/slogan-2.jpeg" },
    { url: "/imgs/imgProjetos/slogan-3.jpeg" },
    { url: "/imgs/imgProjetos/slogan-4.jpeg" },
    { url: "/imgs/imgProjetos/slogan-5.jpeg" },
    { url: "/imgs/imgProjetos/slogan-6.jpeg" },
    { url: "/imgs/imgProjetos/slogan-7.jpeg" },
    { url: "/imgs/imgProjetos/slogan-8.jpeg" },
    { url: "/imgs/imgProjetos/slogan-9.jpeg" },
    { url: "/imgs/imgProjetos/slogan-10.jpeg" },
    { url: "/imgs/imgProjetos/slogan-11.jpeg" },
    { url: "/imgs/imgProjetos/slogan-12.jpeg" },
    { url: "/imgs/imgProjetos/slogan-13.jpeg" },
    { url: "/imgs/imgProjetos/slogan-14.jpeg" },
    { url: "/imgs/imgProjetos/slogan-15.jpeg" },
    { url: "/imgs/imgProjetos/slogan-16.jpeg" },
    { url: "/imgs/imgProjetos/slogan-17.jpeg" },
    { url: "/imgs/imgProjetos/slogan-18.jpeg" },
    { url: "/imgs/imgProjetos/slogan-19.jpeg" },
    { url: "/imgs/imgProjetos/slogan-20.jpeg" },
    { url: "/imgs/imgProjetos/slogan-21.jpeg" },
    { url: "/imgs/imgProjetos/slogan-22.jpeg" },
  ];
  const modalSlogans = () => {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="relative bg-slate-800 w-[90%] max-w-4xl h-auto max-h-[90%] rounded-lg overflow-auto flex items-center justify-center">
          <img
            className="w-full h-full  object-contain"
            src={slogansImg[index].url}
            alt=""
          />

          <X
            onClick={() => setOnModal(false)}
            size={40}
            className="absolute top-3 right-3 text-white hover:text-red-600 cursor-pointer hover:scale-110 transition"
          />
        </div>
      </div>
    );
  };
  return (
    <section className="py-16 px-6 md:px-20 ">
      <div className="max-w-5xl mx-auto  grid gap-10 place-items-center">
        <img
          src="/imgs/imgProjetos/projeto-horta-1.jpg"
          alt="Horta comunitária"
          className="rounded w-[270px] md:w-[270px] lg:w-[670px] shadow-[0_2px_12px_4px_rgba(0,0,0,0.3)]"
        />
        <div>
          <h2 className="text-[18px] font-bold mb-4 bg-linear-to-r from-lime-400 to-lime-500 rounded">O que é o projeto?</h2>
          <p className="text-[10px] md:text-base leading-relaxed w-[270px] sm:w-[600px]">
            A <strong>Horta Comunitária Escolar</strong> é uma iniciativa criada
            por alunos e professores para promover a <em>educação ambiental</em>{" "}
            e o contato com a natureza. As crianças aprendem sobre
            sustentabilidade, responsabilidade e cooperação, cuidando juntas de
            uma horta dentro da escola.
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-5xl mx-auto rounded px-4 py-3 relative">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[url('/imgs/imgProjetos/background-slogans.png')] bg-cover bg-center rounded"></div>

        {/* OVERLAY (altere bg-black/20 para a cor desejada) */}
        <div className="absolute inset-0 bg-white/60 rounded"></div>

        {/* CONTEÚDO */}
        <div className="relative z-10">
          <div className="p-5 text-center">
            <h1 className="md:text-[2rem] sm:text-2xl text-[1.2rem] font-bold bg-linear-to-r from-lime-400 to-lime-500 rounded">
              Mural de Slogans
            </h1>
          </div>

          <div className="columns-3 sm:columns-5 gap-2 md:gap-5 w-full">
            {slogansImg.map((item, index) => (
              <button
              key={index}
               onClick={() =>{
                setOnModal(!onModal);
                setIndex(index)
              }}>
              <div className="sm:pb-5 bg-white  mb-5 rounded-md shadow-md shadow-slate-950
               hover:shadow-2xl transition duration-500 cursor-pointer ">
                <img
                  className="rounded mb-5 w-full break-inside-avoid "
                  src={item.url}
                  alt=""
                />
              </div>
              </button>
            ))}
          </div>

          {onModal && modalSlogans()}
        </div>
      </div>
    </section>
  );
}
