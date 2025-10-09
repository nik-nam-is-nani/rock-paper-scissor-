import React from 'react';

export default function ScoreBoard({ player, computer }) {
  return (
    <div className="scoreboard">
      <p>Player: {player}</p>
      <p>Computer: {computer}</p>
    </div>
  );
}
