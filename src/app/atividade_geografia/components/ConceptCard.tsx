import { ImageWithFallback } from './figma/ImageWithFallback';

interface ConceptCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  color: 'green' | 'blue';
}

export function ConceptCard({ icon, title, description, imageUrl, color }: ConceptCardProps) {
  const colorClasses = {
    green: {
      border: 'border-green-500',
      iconBg: 'bg-green-100 text-green-700',
      titleText: 'text-green-700'
    },
    blue: {
      border: 'border-blue-500',
      iconBg: 'bg-blue-100 text-blue-700',
      titleText: 'text-blue-700'
    }
  };

  const styles = colorClasses[color];

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden border-4 ${styles.border} hover:shadow-xl transition-shadow`}>
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className={`inline-flex items-center justify-center p-3 rounded-full ${styles.iconBg} mb-3`}>
          {icon}
        </div>
        <h3 className={`text-2xl mb-3 ${styles.titleText}`}>{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
