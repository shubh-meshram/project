import { useEffect, useState } from "react";

function Sample()
{
    var [message1,setmess1]=useState("abcd");

    var [message2,setmess2]=useState("0000");
    var [counter,setCounter]=useState(0)

    
    // console.log("first")

    
    var doChange1=()=>{
        setmess1("pqrs")
        
    }
    var doChange2=()=>{
        setmess2("1234")
        var count=counter+1
      setCounter(count)
        
    } 
    
    useEffect(()=>
    { 
console.log("use effect[empty] (Similar Comp.get.mount) is called..")
    },[])
    useEffect(()=>
    {
console.log("use effect[message1] (Similar Comp.did.update) is called..")
    },[message1])
    useEffect(()=>
    {
console.log("use effect[message1 or message2] (Similar Comp.did.update) is called..")
    },[message1,message2,counter])
    useEffect(()=>
    {
console.log("use effect[message2] (Similar Comp.did.update) is called..")
    },[message2])


    console.log("about to call rendering")
    return <>
   <h1> {message1}</h1> 
   
   <button onClick={doChange1} >change message1</button>
   
   <h1> {message2}</h1> 
   
   <button onClick={doChange2} >change message2</button>
   <h1> {counter}</h1> </>
   

}
export default Sample;