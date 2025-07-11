import "./App.css";
import { useState } from "react";

function App() {
  const [count,setCount]=useState(0);
  function decreaseHandler(){
      setCount(count-1);
   }
   function increaseHandler(){
      // count+=1;
      setCount(count+1);
   }
   function resetHandler(){
        setCount(0);
   }
  return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[aqua] flex-col gap-10">
      <div className="text-2xl font-medium">Increment && Decrement</div>
      <div className="flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px]">
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-black text-5xl">
          -
        </button>
        <div className="font-bold text-5xl gap-12 ">
        {count}
        </div>
        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-black text-5xl">
          + 
        </button>
      </div>
      <button onClick={resetHandler} className="bg-[blue] text-[yellow ] font-bold px-5 py-2 rounded-sm text-lg ">
        reset
      </button>

      </div>
  );
}

export default App;
