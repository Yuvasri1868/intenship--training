import React, { useState } from "react";

function Score() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);

  function addRun(value) {
    setRuns(runs + value);
  }

  function addWicket() {
    setWickets(wickets + 1);
  }

  function resetScore() {
    setRuns(0);
    setWickets(0);
  }

  return (
    <div>
      <h2>Display Score</h2>

      <h2>Runs : {runs}</h2>

      <button onClick={() => addRun(1)}>+ 1 Run</button>
      <button onClick={() => addRun(4)}>+ 4 Runs</button>
      <button onClick={() => addRun(6)}>+ 6 Runs</button>

      <h2>Wickets : {wickets}</h2>

      <button onClick={addWicket}>+ 1 Wicket</button>
      <button onClick={resetScore}>Reset Score</button>
    </div>
  );
}

export default Score;