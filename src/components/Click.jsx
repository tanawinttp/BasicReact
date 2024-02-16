import { useState } from "react";

const Click = () => {
  const [counter, setCounter] = useState(0);

  const buttonClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <div>
      <button
        onClick={buttonClick}
        className="bg-slate-600 rounded text-[25px] text-white m-2 p-1 hover:bg-slate-400"
      >
        Add Counter
      </button>
      Now counter is <span className="text-red-500 text-[2rem]">{counter}</span>
    </div>
  );
};

export default Click;
