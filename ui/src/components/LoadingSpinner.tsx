import React from "react";

export const LoadingSpinner = () => {
  return (
    <div className="d-flex align-items-center flex-column centered">
      <div
        className="spinner-grow text-primary mb-2"
        role="status"
        aria-hidden="true"
      ></div>
      <p className="text-primary mt-1">Loading content</p>
    </div>
  );
};
