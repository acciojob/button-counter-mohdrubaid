
import React from "react";
import './../styles/App.css';

const App = () => {
  let [count,setCount]=useState(0);
  function countClicks(){
    setCount(count+1)
  }
  return (
    <div>
      <p>Button Clicked{count}times</p>
<button onClick={countClicks}>Click me</button>
      {/* Do not remove the main div */}
    </div>
  )
}

export default App
