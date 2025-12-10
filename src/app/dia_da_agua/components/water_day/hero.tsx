import { Droplet } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full py-20 bg-linear-to-br from-blue-500 to-cyan-500 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Droplet className="w-10 h-10 animate-bounce" aria-hidden />
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Dia Mundial da Água
          </h1>
          <Droplet className="w-10 h-10 animate-bounce" aria-hidden />
        </div>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-blue-50">
          Um site educativo para crianças sobre a importância da água.
        </p>
      </div>
    </section>
  );
}
