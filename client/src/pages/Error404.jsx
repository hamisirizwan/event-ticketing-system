import React from "react";

function Error404() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-red-500 text-xl">404 ERROR</h1>
      <div className="flex items-center justify-center p-2 text-gray-800 bg-gray-400 rounded-lg">
        <h1>PAGE NOT FOUND</h1>
      </div>
    </div>
  );
}

export default Error404;
