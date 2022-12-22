import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {
  let[counter,setCounter] =useState(0);
  let[test,setTest] =useState(1);
  let [arr,setArr] =useState([]);
  const increment=()=>{
      setCounter(counter+1)
  }
  const decrement=()=>{
    setCounter(counter-1)

}
function testing(){
  setTest(test+1)
}
function handleClick(){
  console.log(arr)
}

useEffect(()=>{
  const fetchApi =async ()=>{
     let response =await fetch("https://dummyjson.com/products")
    let data =await response.json()
     console.log(data)
     let products =data.products;
     setArr([...arr,products])
  }
  fetchApi()
  
},[counter,test])
  






  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={testing}>{test}</button>
      <p>{counter}</p>

      <button onClick={handleClick}>click</button>
    </div>
  );
}
