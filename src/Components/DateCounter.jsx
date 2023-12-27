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
  function StepDecrement() {
    if(step > 1) setStep((step) => step - 1);
  }
  function StepIncrement() {
    setStep((step) => step + 1);
  }

  return (
    <div>
      <div>
        <button disabled={step===1} onClick={StepDecrement}>-</button>
        <span>Steps: {step}</span>
        <button onClick={StepIncrement}>+</button>
      </div>
      <div>
        {" "}
        <button onClick={handleDecrement}>-</button>
        <span>Count: {count}</span>
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
    </div>
  );
}

export default DateCounter;
