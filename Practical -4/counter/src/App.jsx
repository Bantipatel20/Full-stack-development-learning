import { useState } from 'react'
import './App.css'
import Counter from './component/Counter';


function App() {
  const [count, setCount] = useState(0);
  const [temp,settemp] = useState("banti");
  function child(newtemp){
    console.log(temp);
    settemp(newtemp);
    console.log("parent class")
    console.log(newtemp);
  }
  return (
    <>
    <p>{temp}</p>
     <Counter count={count} setcount={setCount} temp={temp} child={child}/>
     
    </>
  )
}

export default App;
