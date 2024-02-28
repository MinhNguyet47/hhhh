import React from 'react';

function Result({ score, onReplay }) {
  return (
    <div>
      <h2>Your Score: {score}</h2>
      <button onClick={onReplay}>Replay Quiz</button>
    </div>
  );
}

export default Result;
