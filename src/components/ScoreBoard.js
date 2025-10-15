import React from 'react';

export default function ScoreBoard({ player, computer }) {
  const playerLeads = player > computer;
  const computerLeads = computer > player;
  return (
    <div className="scoreboard">
      <p>
        Player: {player}
      </p>
      <p style={{ position: 'relative', display: 'inline-block' }}>
        Computer: {computer}
        {playerLeads && (
          <span className="status-icon anger" aria-hidden style={{ marginLeft: 8 }}>
            😡
          </span>
        )}
        {computerLeads && (
          <span className="status-icon cool" aria-hidden style={{ marginLeft: 8 }}>
            😎
          </span>
        )}
        {computerLeads && (
          <span className="laugh-bubbles" aria-hidden>
            <span style={{ '--i': 0 }}>HA</span>
            <span style={{ '--i': 1 }}>Ha</span>
            <span style={{ '--i': 2 }}>ha...</span>
          </span>
        )}
      </p>
    </div>
  );
}
