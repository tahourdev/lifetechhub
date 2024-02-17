import React from "react";

const Loading = () => {
  return (
    <div className="mt-8 flex w-full justify-center">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full 
          border-4 border-solid border-r-secondary"
        role="status"
      ></div>
    </div>
  );
};

export default Loading;
