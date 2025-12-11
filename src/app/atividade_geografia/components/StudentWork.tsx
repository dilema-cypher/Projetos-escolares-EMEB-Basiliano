'use client';
import { useState } from 'react';
import { ImageOff, Maximize2 } from 'lucide-react';

interface Drawing {
  id: number;
  imageUrl: string;
}

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Array com os desenhos dos alunos - cada desenho mostra ambas as paisagens (modificada e natural)
  const drawings: Drawing[] = [
    { id: 1, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (1).jpeg' },
{ id: 2, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (2).jpeg' },
{ id: 3, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (3).jpeg' },
{ id: 4, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (4).jpeg' },
{ id: 5, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (5).jpeg' },
{ id: 6, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (6).jpeg' },
{ id: 7, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (7).jpeg' },
{ id: 8, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (8).jpeg' },
{ id: 9, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (9).jpeg' },
{ id: 10, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (10).jpeg' },
{ id: 11, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (11).jpeg' },
{ id: 12, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (12).jpeg' },
{ id: 13, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (13).jpeg' },
{ id: 14, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (14).jpeg' },
{ id: 15, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (15).jpeg' },
{ id: 16, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (16).jpeg' },
{ id: 17, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (17).jpeg' },
{ id: 18, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (18).jpeg' },
{ id: 19, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (19).jpeg' },
{ id: 20, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (20).jpeg' },
{ id: 21, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (21).jpeg' },
{ id: 22, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (22).jpeg' },
{ id: 23, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (23).jpeg' },
{ id: 24, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (24).jpeg' },
{ id: 25, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (25).jpeg' },
{ id: 26, imageUrl: 'imgs/imgsProjects_geografia/imgGeografia  (26).jpeg' },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-slate-800 mb-2">
            Paisagens Modificadas vs Paisagens Naturais
          </h1>
          <p className="text-slate-600 mb-4">
            Desenhos dos alunos mostrando suas perspectivas sobre as diferentes paisagens
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-slate-700">
              <span className="font-semibold">Atividade:</span> Cada aluno criou um desenho mostrando ambos os tipos de paisagens - naturais (florestas, rios, montanhas) e modificadas (cidades, estradas, construções)
            </p>
          </div>
        </div>

        {/* Contador */}
        <div className="mb-6">
          <p className="text-slate-600">
            Total de desenhos: <span className="font-semibold text-slate-800">{drawings.length}</span>
          </p>
        </div>

        {/* Grid de Desenhos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drawings.map((drawing) => (
            <div
              key={drawing.id}
              onClick={() => setSelectedImage(drawing.imageUrl)}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header do Card */}
              <div className="p-3 bg-linear-to-r from-green-50 to-orange-50 border-b border-slate-100">
                <p className="text-slate-700">Desenho #{drawing.id}</p>
                <div className="flex gap-2 mt-1">
                  <span className="inline-block px-2 py-0.5 rounded-full text-xs bg-green-100 text-green-800">
                    🌿 Natural
                  </span>
                  <span className="inline-block px-2 py-0.5 rounded-full text-xs bg-orange-100 text-orange-800">
                    🏙️ Modificada
                  </span>
                </div>
              </div>

              {/* Imagem */}
              <div className="relative aspect-video bg-slate-100 group">
                <img
                  src={drawing.imageUrl}
                  alt={`Desenho ${drawing.id} mostrando paisagens natural e modificada`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback caso imagem não carregue */}
                <div className="hidden absolute inset-0 items-center justify-center bg-slate-100">
                  <ImageOff className="w-12 h-12 text-slate-400" />
                </div>

                {/* Botão de Expandir */}
                <button
                  onClick={() => setSelectedImage(drawing.imageUrl)}
                  className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Expandir imagem"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Footer */}
              <div className="p-4">
                <p className="text-slate-600 text-sm">
                  Perspectiva do aluno sobre os dois tipos de paisagem
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há desenhos */}
        {drawings.length === 0 && (
          <div className="text-center py-12">
            <ImageOff className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500">Nenhum desenho cadastrado ainda.</p>
          </div>
        )}
      </div>

      {/* Modal de Imagem Expandida */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-slate-300 text-4xl"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Desenho expandido"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}