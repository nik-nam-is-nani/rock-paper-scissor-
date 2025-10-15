import React from 'react';

export default function ResultDisplay({ playerChoice, computerChoice, result }) {
  if (!playerChoice || !computerChoice) return null;
  const cls = result.startsWith('You Win') ? 'win' : result.startsWith('You Lose') ? 'lose' : 'draw';
  return (
    <div className="result">
      <p>You chose: {playerChoice}</p>
      <p>Computer chose: {computerChoice}</p>
      <h2 className={cls}>{result}</h2>
    </div>
  );
}
