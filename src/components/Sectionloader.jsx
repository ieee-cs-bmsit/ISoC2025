import React from 'react';

const SectionLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-white w-full">
      {/* Animated Dots */}
      <div className="flex space-x-2 mb-3">
        <span className="w-3 h-3 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-3 h-3 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-3 h-3 bg-gray-600 rounded-full animate-bounce"></span>
      </div>

      {/* Message */}
      <p className="text-lg text-gray-500 font-medium animate-pulse">
        Loading... Please wait
      </p>
    </div>
  );
};

export default SectionLoader;
