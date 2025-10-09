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

  // Keyboard input
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === 'r') handlePlayerChoice("Rock");
      if (e.key.toLowerCase() === 'p') handlePlayerChoice("Paper");
      if (e.key.toLowerCase() === 's') handlePlayerChoice("Scissors");
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="container">
      <h1>Rock 🪨 Paper 📄 Scissors ✂️</h1>
      <ScoreBoard player={playerScore} computer={computerScore} />
      <div className="choices">
        {choices.map(choice => (
          <ChoiceButton key={choice} choice={choice} onClick={handlePlayerChoice} />
        ))}
      </div>
      <ResultDisplay playerChoice={playerChoice} computerChoice={computerChoice} result={result} />
      <p className="hint">Press R, P, or S on your keyboard</p>
    </div>
  );
}
