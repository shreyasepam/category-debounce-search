import React from 'react';

export default function HandlingView({ error }) {
  return (
    <div className="w-full flex-row justify-center align-middle">
      {!error ? (
        <h1 className="text-xl font-semibold">Loading...</h1>
      ) : (
        <h1 className="text-xl font-semibold text-red-500">{error}</h1>
      )}
    </div>
  );
}
