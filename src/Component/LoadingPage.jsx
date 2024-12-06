import React from "react";

const LoadingPage = () => {
  return (
    <div
    className="h-screen  flex items-center justify-center">
      <div className="flex items-center justify-center space-x-4">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        
      </div>
    </div>
  );
};

export default LoadingPage;
