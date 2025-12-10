import ProjectCarousel from "./components/projectCarousel";
import ProjectInfo from "./components/projectInfo";
import ProjectFooter from "./components/projectFooter";

export default function Page() {
  return (
    <div className="w-full">
      <main className="pb-20">
        <div className="px-4 md:px-10 py-10">
          <div className="mb-4">
            <h1 className="text-blue-600 text-4xl font-bold">
              Galeria de maquetes:
            </h1>
            <p className="text-xl font-light text-purple-700">
              Sistema Solar, As fases da Lua, Degradação Ambiental, Alimentação
              e Reciclagem
            </p>
          </div>
          <ProjectCarousel />
        </div>

        <ProjectInfo />
      </main>
    </div>
  );
}
