import React, { useState, useEffect } from 'react';
import ChoiceButton from './components/ChoiceButton';
import ScoreBoard from './components/ScoreBoard';
import ResultDisplay from './components/ResultDisplay';

const choices = ["Rock", "Paper", "Scissors"];

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [engage, setEngage] = useState(false);
  const [impact, setImpact] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [loseShake, setLoseShake] = useState(false);
  const [danger, setDanger] = useState(false);
  const [arenaOutcome, setArenaOutcome] = useState("");

  const generateComputerChoice = () => {
    return choices[Math.floor(Math.random() * 3)];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) return "Draw ⚖️";   
    if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      setPlayerScore(prev => prev + 1);
      return "You Win ✅";
    }
    setComputerScore(prev => prev + 1);
    return "You Lose ❌";
  };

  const handlePlayerChoice = (choice) => {
    const compChoice = generateComputerChoice();
    setPlayerChoice(choice);
    setComputerChoice(compChoice);
    setResult(determineWinner(choice, compChoice));
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
    setPlayerScore(0);
    setComputerScore(0);
    setEngage(false);
    setImpact(false);
    setLoseShake(false);
    setDanger(false);
    setConfetti([]);
    setArenaOutcome("");
  };

  // Keyboard input
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === 'r') handlePlayerChoice("Rock");
      if (e.key.toLowerCase() === 'p') handlePlayerChoice("Paper");
      if (e.key.toLowerCase() === 's') handlePlayerChoice("Scissors");
      if (e.key.toLowerCase() === 'x') resetGame("reset");
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Trigger animations when choices are made and result is known
  useEffect(() => {
    if (!playerChoice || !computerChoice || !result) return;

    // hands charge in and impact
    setEngage(true);
    setImpact(false);
    const impactT = setTimeout(() => setImpact(true), 520);
    const disengageT = setTimeout(() => setEngage(false), 600);

    const isWin = result.startsWith("You Win");
    const isLose = result.startsWith("You Lose");

    // outcome classes for hand reactions
    if (isWin) setArenaOutcome("winner-left loser-right");
    else if (isLose) setArenaOutcome("winner-right loser-left");
    else setArenaOutcome("");

    if (isWin) {
      // confetti burst
      const pieces = Array.from({ length: 70 }).map((_, i) => ({
        id: i,
        h: Math.floor(Math.random() * 360),
        dur: 1000 + Math.random() * 1200,
        rot: 400 + Math.random() * 900,
        sx: (Math.random() - 0.5) * 500,
        left: `${10 + Math.random() * 80}%`,
        delay: Math.random() * 150,
      }));
      setConfetti(pieces);
      const confettiClear = setTimeout(() => setConfetti([]), 2200);
      return () => {
        clearTimeout(confettiClear);
        clearTimeout(impactT);
        clearTimeout(disengageT);
      };
    }

    if (isLose) {
      // shake + vignette + vibration
      setLoseShake(true);
      setDanger(true);
      try { if (navigator.vibrate) navigator.vibrate([60, 40, 60]); } catch {}
      const shakeT = setTimeout(() => setLoseShake(false), 700);
      const dangerT = setTimeout(() => setDanger(false), 800);
      return () => {
        clearTimeout(shakeT);
        clearTimeout(dangerT);
        clearTimeout(impactT);
        clearTimeout(disengageT);
      };
    }

    return () => {
      clearTimeout(impactT);
      clearTimeout(disengageT);
    };
  }, [playerChoice, computerChoice, result]);

  const choiceToEmoji = (c, side) => {
    if (!c) return '';
    switch (c) {
      case 'Rock': return side === 'left' ? '✊' : '✊';
      case 'Paper': return side === 'left' ? '✋' : '✋';
      case 'Scissors': return side === 'left' ? '✌️' : '✌️';
      default: return '';
    }
  };

  return (
    <div className={`game-root ${danger ? 'danger-vignette' : ''} ${loseShake ? 'lose-shake' : ''}`}>
      {/* ambient background */}
      <div className="bg-ambient" aria-hidden>
        <div className="blob b1" style={{ top: '-15%', right: '-10%' }} />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>

      {/* RPS arena behind content */}
      <div className={`arena ${engage ? 'engage' : ''} ${impact ? 'shake-hands' : ''} ${arenaOutcome}`} aria-hidden>
        <div className="arena-inner">
          {playerChoice && <div className="hand left">{choiceToEmoji(playerChoice, 'left')}</div>}
          {computerChoice && <div className="hand right">{choiceToEmoji(computerChoice, 'right')}</div>}
          <div className={`impact-ring ${impact ? 'burst' : ''}`} />
        </div>
      </div>

      {/* confetti on win */}
      {confetti.length > 0 && (
        <div className="confetti-layer" aria-hidden>
          {confetti.map(p => (
            <div
              key={p.id}
              className="confetti-piece"
              style={{
                '--h': p.h,
                '--dur': `${p.dur}ms`,
                '--rotDur': `${p.rot}ms`,
                '--sx': `${p.sx}px`,
                left: p.left,
                animationDelay: `${p.delay}ms`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container">
        <h1 className="game-title">Rock <span className="em">🪨</span> Paper <span className="em">📄</span> Scissors <span className="em">✂️</span></h1>
        <ScoreBoard player={playerScore} computer={computerScore} />
        <div className="choices">
          {choices.map(choice => (
            <ChoiceButton key={choice} choice={choice} onClick={handlePlayerChoice} />
          ))}
        </div>
        <ResultDisplay playerChoice={playerChoice} computerChoice={computerChoice} result={result} />
        <button className="choice-btn" onClick={resetGame} aria-label="Reset game">
          Reset
        </button>
        <p className="hint">Press R, P, or S on your keyboard and x to reset</p>
      </div>
    </div>
  );
}
