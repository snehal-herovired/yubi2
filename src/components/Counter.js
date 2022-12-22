import React ,{useContext}from "react";
import DataContext from "../context/DataContext.js"

function Counter (){

   let ctx = useContext(DataContext);

   console.log(ctx)

   const increment =()=>{
    //  ctx.setCounter((prev)=>{
    //    return prev+1
    //  })
    ctx.setisloggedIn(false)
   }
  return(
    <div>
    <button onClick={increment}>+</button>
    <button >-</button>
  
    <p>{ctx.counter}</p>

  </div>
  )
}
export default Counter;