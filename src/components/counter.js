import {useState} from "react"
const Counter = () => {
   const [count,setCount] = useState(0)
   const increase = ()=>{
    setCount(count + 1)
   }
   const decrease = ()=>{
    return count <=0 ? alert("count cant be less than 0 "):
    setCount(count - 1)
   }
    return ( 
        <div className="counter">
            <h1>Counter</h1>
            <button onClick={increase}>Increase</button>
            <h1>The count is {count}</h1>
            <button onClick={decrease}>Decrease</button>

        </div>
     );
}
 
export default Counter;