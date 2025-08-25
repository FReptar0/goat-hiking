import { MountainIcon } from "@/components/icons";

interface LoadingProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

export const Loading: React.FC<LoadingProps> = ({ 
  message = "Cargando aventura...", 
  size = "md" 
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16", 
    lg: "w-24 h-24"
  };

  const iconSizes = {
    sm: 24,
    md: 48,
    lg: 72
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className={`${sizeClasses[size]} bg-green-100 rounded-full flex items-center justify-center mb-4 animate-pulse`}>
        <MountainIcon 
          className="text-green-600 animate-bounce" 
          size={iconSizes[size]} 
        />
      </div>
      <p className="text-gray-600 text-center animate-pulse">{message}</p>
    </div>
  );
};

// Full screen loading component
export const FullScreenLoading: React.FC<LoadingProps> = ({ 
  message = "Preparando tu aventura..." 
}) => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
          <MountainIcon 
            className="text-green-600 animate-bounce" 
            size={72} 
          />
        </div>
        <p className="text-gray-700 text-lg font-medium animate-pulse">{message}</p>
        <div className="mt-4 flex justify-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};