import React,{useState,useEffect,useContext} from "react";
import "./style.css";
import Counter from "./components/Counter.js"
import DataContext from "./context/DataContext.js"
export default function App() {
  let ctx = useContext(DataContext);
//   let[counter,setCounter] =useState(0);
//   let[test,setTest] =useState(1);
//   let [arr,setArr] =useState([]);
//   const increment=()=>{
//       setCounter(counter+1)
//   }
//   const decrement=()=>{
//     setCounter(counter-1)

// }
// function testing(){
//   setTest(test+1)
// }
// function handleClick(){
//   console.log(arr)
// }

// useEffect(()=>{
//   const fetchApi =async ()=>{
//      let response =await fetch("https://dummyjson.com/products")
//     let data =await response.json()
//      console.log(data)
//      let products =data.products;
//      setArr([...arr,products])
//   }
//   fetchApi()
  
// },[counter,test])
  






  return (
 <>
 
 {ctx.isloggedein && <Counter/>}
 {/* <Counter/> */}
 </>
  );
}
