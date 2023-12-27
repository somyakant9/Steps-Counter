import { useState } from "react";

function DateCounter() {
  let [step, setStep] = useState(1);
  let [count, setCount] = useState(0);

  const date = new Date("Dec 27 2023");
  date.setDate(date.getDate() + count);

  function handleDecrement() {
    setCount((count) => count - step);
  }
  function handleIncrement() {
    setCount((count = count + step));
  }
  function handleReset(){
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div>
        <input type="range" min="0" max="10" onChange={(e) => setStep(Number(e.target.value))} />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <input type="number" value={count} onChange={(e)=>setCount(Number(e.target.value))} />
        <button onClick={handleIncrement}>+</button>
      </div>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
      <div>
      <button onClick={handleReset} disabled={count===0 || step === 1}>Reset</button>  
      </div>
    </div>
  );
}

export default DateCounter;
