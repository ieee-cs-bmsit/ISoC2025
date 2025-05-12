import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] text-white">
      {/* Pulsing Ring */}
      {/* <div className="relative mb-6">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 rounded-full animate-ping bg-white opacity-10"></div>
      </div> */}

      {/* Animated Dots */}
      <div className="flex space-x-2 mb-3">
        <span className="w-3 h-3 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-3 h-3 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-3 h-3 bg-gray-600 rounded-full animate-bounce"></span>
      </div>

      {/* Message */}
      <p className="text-lg text-gray-500 font-medium animate-pulse">Loading your Pull Requests...</p>
    </div>
  );
};

export default Loading;
