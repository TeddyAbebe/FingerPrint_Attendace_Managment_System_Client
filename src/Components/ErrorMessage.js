import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-3 py-1 rounded relative mb-5 w-1/2 text-sm animate-bounce"
      role="alert"
    >
      <strong className="font-bold">Error:</strong>
      <span className="block sm:inline"> {message}</span>
    </div>
  );
};

export default ErrorMessage;
