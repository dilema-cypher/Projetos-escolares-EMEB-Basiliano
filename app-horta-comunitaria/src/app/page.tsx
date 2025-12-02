import Header from "@/app/hortaPage/header/page";
import Section1 from "@/app/hortaPage/main/section1/page"; 
import Section2 from "@/app/hortaPage/main/section2/page";
import Section3 from "@/app/hortaPage/main/section3/page";
import Footer from "@/app/hortaPage/footer/footer";
import RouterBar from "@/app/hortaPage/routerBar/page";

export default function Home() {
  return (
    <main className="bg-linear-to-r from-[#ffffff] via-[#e0f7fa] to-[#b1eaf2] ">
      {/* Banner */}
      <div className="shadow-[0_12px_25px_rgba(0,0,0,0.25)] relative z-50">
      <Header></Header>
      </div>
      
      {/* Carrossel */}
      <div className="bg-linear-to-r from-[#ffffff] via-[#e0f7fa] to-[#b1eaf2] shadow-[0_12px_25px_rgba(0,0,0,0.25)] relative z-40">
      <Section1></Section1>
      </div>

      <div className="bg-linear-to-r from-[#ffffff] via-[#f0f0f0] to-[#e0e0e0] shadow-[0_12px_25px_rgba(0,0,0,0.25)] relative z-40">
      {/* Seção sobre o projeto */}
      <Section2></Section2>
      </div>

      {/* Objetivos */}
      <div className="bg-linear-to-r from-[#ffffff] via-[#e0f7fa] to-[#b1eaf2] ">
      <Section3></Section3>
      </div>

      {/* Rodapé */}
      <div>
      <Footer></Footer>
      </div>
    </main>
  );
}
