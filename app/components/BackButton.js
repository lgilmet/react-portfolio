"use client";

export default function BackButton() {
  return (
    <button onClick={() => window.history.back()} className="back-button">
      Back
    </button>
  );
}
