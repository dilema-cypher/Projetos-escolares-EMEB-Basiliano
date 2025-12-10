import { ImageWithFallback } from './figma/ImageWithFallback';
import { Trees, Building2, User } from 'lucide-react';

interface StudentWorkProps {
  work: {
    id: number;
    studentName: string;
    title: string;
    type: string;
    imageUrl: string;
    description: string;
  };
}

export function StudentWork({ work }: StudentWorkProps) {
  const isNatural = work.type === 'natural';
  
  return (
    <div className="bg-linear-to-br from-white to-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <ImageWithFallback 
          src={work.imageUrl} 
          alt={work.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-sm flex items-center gap-1 ${
          isNatural ? 'bg-green-600' : 'bg-blue-600'
        }`}>
          {isNatural ? <Trees className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
          {isNatural ? 'Natural' : 'Modificada'}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2 text-gray-600">
          <User className="w-4 h-4" />
          <span className="text-sm">{work.studentName}</span>
        </div>
        
        <h3 className={`text-xl mb-2 ${isNatural ? 'text-green-700' : 'text-blue-700'}`}>
          {work.title}
        </h3>
        
        <p className="text-gray-700 text-sm leading-relaxed italic">
          &quot;{work.description}&quot;
        </p>
      </div>
    </div>
  );
}
