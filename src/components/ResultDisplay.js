import React from 'react';

export default function ResultDisplay({ playerChoice, computerChoice, result }) {
  if (!playerChoice || !computerChoice) return null;
  return (
    <div className="result">
      <p>You chose: {playerChoice}</p>
      <p>Computer chose: {computerChoice}</p>
      <h2>{result}</h2>
    </div>
  );
}
