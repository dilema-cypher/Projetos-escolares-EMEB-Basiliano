'use client'
import { Leaf, BookOpen, Users } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-green-700 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8" />
            <span className="text-xl">Prof. Meio Ambiente</span>
          </div>
          
          <ul className="hidden md:flex gap-8">
            <li>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="hover:text-green-200 transition-colors flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Sobre
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('atividades')}
                className="hover:text-green-200 transition-colors flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Atividades
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}