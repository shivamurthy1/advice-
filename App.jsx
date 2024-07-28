import { useState } from "react";
function App() {
  const [advice,setAdvice]=useState(" ");
  const [count,setCount]=useState(0);

  async function Getadvice(){
    const apis=await fetch('https://api.adviceslip.com/advice');
    const apix=await apis.json();
    setAdvice(apix.slip.advice);
    setCount((c)=>c+1);
  }
  return (
    <div>
    <center>
    <h1 >{advice}</h1>
    <button onClick={Getadvice} > click me</button>
    </center>
    <center>
    <p> this is no.of times u click <strong>{count}</strong> times </p>
    </center>
     </div>
  );
}
export default App