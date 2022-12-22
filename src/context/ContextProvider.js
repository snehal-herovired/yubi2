import React,{useState} from "react";
import DataContext from "./DataContext.js"


// to provide context data everwhere in the react application
export default function ContextProvider({children}){
  let [counter,setCounter] =useState(0);

  let[isloggedein,setisloggedIn] =useState(true)











  return(
    <DataContext.Provider value={{
      counter,setCounter,setisloggedIn,isloggedein
    }}>
        {children}
      </DataContext.Provider>
  )

}