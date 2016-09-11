import React from 'react';




export default function () {
  return (
    // <p className="UserMessage">Enter a random number you
    // </p>
    <div className="InputFields">
      <label>Guess</label>
      <input type="number" className="Guess" placeholder='enter guess here'/>
      <label>Minimum Range</label>
      <input type="number" className="MinInput" placeholder='enter a minimum here'/>
      <label>Maximum Range</label>
      <input type="number" className="MaxInput" placeholder='enter a minimum here'/>
    </div>
  );
}
