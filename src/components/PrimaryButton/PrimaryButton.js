import React from "react";

export default function PrimaryButton({ children }) {
  return (
    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
      {children}
    </button>
  );
}
