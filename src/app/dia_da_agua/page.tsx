import Hero from "./components/water_day/hero";
import FactCards from "./components/water_day/FactCards";
import ProjectInfo from "./components/water_day/ProjectInfo";
import ProjectHistory from "./components/water_day/ProjectHistory";
import Timeline from "./components/water_day/Timeline";
import CallToAction from "./components/water_day/CallToAction";
import ImageCarousel from "./components/water_day/ImageCarousel";

export default function WaterDayPage() {
  return (
    <main className="min-h-screen bg-blue-50">
      {/* HERO SECTION */}
      <Hero />

      {/* CARDS DE FATOS */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <FactCards />
        </div>
      </section>


      {/* NOSSA HISTÓRIA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ProjectHistory />
        </div>
      </section>

      {/* GALERIA / CARROSSEL */}
      <section className="py-20 bg-blue-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-blue-700">
            Galeria de Imagens
          </h2>

          <ImageCarousel
          />
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <CallToAction />
        </div>
      </section>
    </main>
  );
}
