"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  X,
  House,
  Apple,
  Microscope,
  Droplets,
  Earth,
  Mountain,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [onpageHorta, setOnPageHorta] = useState<boolean>(false);

  const route = useRouter();
  const navegar = (local: string) => {
    route.push(local);
  };
  return (
    <section className="relative bg-green-700 text-white text-center py-16 shadow-md">
      {/* Background imagem */}
      <img
        src="https://images.unsplash.com/photo-1597047084897-51e81819a499?auto=format&fit=crop&w=1500&q=80"
        alt="Horta Escolar"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      <div className="absolute left-4 top-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <button className="cursor-pointer bg-white text-black px-3 py-1 rounded shadow">
              <Menu />
            </button>
          </SheetTrigger>

          <SheetContent
            className="p-2 min-h-0 bg-white/15 backdrop-blur-xl 
                       border border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.3)]
                       flex flex-col"
            side={"left"}
          >
            <SheetHeader className="flex justify-between items-center px-2">
              <SheetTitle className="text-white">
                Visite mais projetos!
              </SheetTitle>
              <SheetClose className="p-2 hover:bg-slate-600 rounded-xl cursor-pointer">
                <X size={24} className="text-green-400" />
              </SheetClose>
            </SheetHeader>

            <div
              className="grid auto-rows-min px-2 py-2 rounded-xl 
                         h-[90vh] bg-white overflow-y-auto w-full"
            >
              <div className="grid gap-3 w-full text-slate-900 p-2">
                <button
                  className=" px-4 py-2 rounded-lg font-bold 
                  bg-linear-to-r from-lime-300 via-lime-400 to-green-500 cursor-pointer flex items-center justify-between"
                  onClick={() => (navegar("./"), setOnPageHorta(false))}
                >
                  Pagina Inicial
                  <House className="text-white" />
                </button>

                <button
                  className="px-4 py-2 rounded-lg  font-bold 
                  bg-linear-to-r from-lime-300 via-lime-400 to-green-500 cursor-pointer flex items-center justify-between"
                  onClick={() => (
                    navegar("./hortaPage/"), setOnPageHorta(true)
                  )}
                >
                  Horta Escolar
                  <Apple className="text-white" />
                </button>
                <button
                  className="px-4 py-2 rounded-lg font-bold 
                  bg-linear-to-r from-lime-300 via-lime-400 to-green-500 cursor-pointer flex items-center justify-between"
                  onClick={() => (
                    navegar("./projeto_ciencias/"), setOnPageHorta(false)
                  )}
                >
                  Projeto de ciencias
                  <Microscope className="text-white" />
                </button>

                <button
                  className="px-4 py-2 rounded-lg font-bold 
                  bg-linear-to-r from-lime-300 via-lime-400 to-green-500 cursor-pointer flex items-center justify-between"
                  onClick={() => (
                    navegar("./dia_da_agua/"), setOnPageHorta(false)
                  )}
                >
                  Dia da agua
                  <Droplets className="text-white" />
                </button>
                <button
                  className="px-4 py-2 rounded-lg font-bold 
                  bg-linear-to-r from-lime-300 via-lime-400 to-green-500 cursor-pointer flex items-center justify-between"
                  onClick={() => (
                    navegar("./atividade_geografia/"), setOnPageHorta(false)
                  )}
                >
                  Atividades geografia
                  <Mountain className="text-white" />
                </button>
                <button
                  className="px-4 py-2 rounded-lg font-bold 
                  bg-linear-to-r from-lime-300 via-lime-400 to-green-500 cursor-pointer flex items-center justify-between"
                  onClick={() => (
                    navegar("./atividade_meio_ambiente/"), setOnPageHorta(false)
                  )}
                >
                  Atividades Meio ambiente
                  <Earth className="text-white" />
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* RESTO DO HEADER */}
      <div className="relative z-10">
        <h1 className="text-[13px] md:text-5xl font-bold mb-4">
          EMEB Basiliano do Carmo de Jesus
        </h1>
        {onpageHorta ? (
          <p className="text-[10px] md:text-xl max-w-2xl mx-auto">
            Projeto escolar 2025 produzido por{" "}
            <b className="text-blue-900">Autor:</b> Profª Esp. Inajá Maringues
            da Silva Chiarelli e <b className="text-blue-900">Coautores:</b>{" "}
            Profº Me. Flávio Marcelo Bueno de Castro e Profº Esp. Gilmar Antônio
            Frydriszewski
          </p>
        ) : (
          <p className="text-[10px] md:text-xl max-w-2xl mx-auto">
            Projetos escolares 2025 produzido por{" "}
            <b className="text-blue-900">Autor:</b> Profª Esp. Inajá Maringues
            da Silva Chiarelli
          </p>
        )}
      </div>
    </section>
  );
}
