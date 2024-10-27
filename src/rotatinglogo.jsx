import React from 'react';
import { Star } from 'lucide-react';

const RotatingStarLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-50">
      {/* Container for both rotating star and centered element */}
      <div className="relative w-64 h-64">
        {/* Rotating star background */}
        <div className="absolute inset-0 animate-spin [animation-duration:10s] [transform-origin:center]">
          <Star
            className="w-full h-full text-red-500 opacity-20"
            strokeWidth={1.5}
          />
        </div>

        {/* Centered stable element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center">
            <Star className="w-8 h-8 text-neutral-50" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="mt-8 text-center">
        <h1 className="text-3xl font-bold tracking-wide text-neutral-900">
          Pon Kanchi
        </h1>
        <p className="mt-2 text-lg text-neutral-600 tracking-widest uppercase">
          Coming Soon
        </p>
      </div>
    </div>
  );
};

export default RotatingStarLogo;
