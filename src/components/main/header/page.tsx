"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
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
  Mountain,
} from "lucide-react";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const [onpageHorta, setOnPageHorta] = useState(false);
  const [open, setOpen] = useState(false);

  /** SMART HEADER (shrink + hide on scroll) **/
  const [isVisible, setIsVisible] = useState(true);
  const [isSmall, setIsSmall] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const cur = window.scrollY;

      setIsSmall(cur > 80); // shrink
      setIsVisible(cur < lastScroll || cur < 120); // some ao descer

      setLastScroll(cur);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  /** Navegação **/
  const pathname = usePathname();
  const router = useRouter();

  const navegar = (local: string) => {
    router.push(local);
  };

  return (
    <section
      className={`
        fixed top-0 left-0 w-full z-50 text-white
        bg-green-700 shadow-md overflow-hidden
        transition-all duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isSmall ? "py-3" : "py-10"}
      `}
    >
      {/* BG */}
      <img
        src="https://images.unsplash.com/photo-1597047084897-51e81819a499?auto=format&fit=crop&w=1500&q=80"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      {/* MENU BUTTON */}
      <div className="absolute left-4 top-2 z-50">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="cursor-pointer bg-white text-black px-3 py-1 rounded shadow w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center">
              <Menu />
            </button>
          </SheetTrigger>

          {/* MENU LATERAL */}
          <SheetContent
            className="
              p-2 bg-white/15 backdrop-blur-xl 
              border border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.3)]
              flex flex-col
            "
            side="left"
          >
            <SheetHeader className="flex justify-between items-center px-2">
              <SheetTitle className="text-white">
                Visite mais projetos!
              </SheetTitle>
              <SheetClose className="p-2 hover:bg-slate-600 rounded-xl">
                <X size={24} className="text-green-400" />
              </SheetClose>
            </SheetHeader>

            <div
              className="grid auto-rows-min px-2 py-2 rounded-xl 
                         h-[90vh] bg-white overflow-y-auto w-full"
            >
              <div className="grid gap-3 w-full text-slate-900 p-2">
                {/* BOTÕES */}
                <NavButton
                  label="Página Inicial"
                  icon={<House />}
                  active={pathname === "/"}
                  action={() => {
                    navegar("/");
                    setOnPageHorta(false);
                    setOpen(false);
                  }}
                />

                <NavButton
                  label="Horta Escolar"
                  icon={<Apple />}
                  active={pathname === "/hortaPage"}
                  action={() => {
                    navegar("/hortaPage");
                    setOnPageHorta(true);
                    setOpen(false);
                  }}
                />

                <NavButton
                  label="Projeto de Ciências"
                  icon={<Microscope />}
                  active={pathname === "/projeto_ciencias"}
                  action={() => {
                    navegar("/projeto_ciencias");
                    setOnPageHorta(false);
                    setOpen(false);
                  }}
                />

                <NavButton
                  label="Dia da água"
                  icon={<Droplets />}
                  active={pathname === "/dia_da_agua"}
                  action={() => {
                    navegar("/dia_da_agua");
                    setOnPageHorta(false);
                    setOpen(false);
                  }}
                />

                <NavButton
                  label="Atividades Geografia"
                  icon={<Mountain />}
                  active={pathname === "/atividade_geografia"}
                  action={() => {
                    navegar("/atividade_geografia");
                    setOnPageHorta(false);
                    setOpen(false);
                  }}
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* TEXTO CENTRAL */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-[13px] md:text-5xl font-bold mb-2">
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

/* =============================
   COMPONENTE DOS BOTÕES DE MENU
============================= */
function NavButton({
  label,
  icon,
  active,
  action,
}: {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  action: () => void;
}) {
  return (
    <button
      className={`
        px-4 py-2 rounded-lg font-bold 
        cursor-pointer flex items-center justify-between 
        transition duration-1000
        ${
          active
            ? "bg-linear-to-r from-green-900 via-green-800 to-lime-700 text-white"
            : "bg-linear-to-r from-lime-300 via-lime-400 to-green-500 text-green-900 hover:from-green-500 hover:via-green-400 hover:to-lime-300"
        }
      `}
      onClick={action}
    >
      {label}
      <span className="text-white">{icon}</span>
    </button>
  );
}
