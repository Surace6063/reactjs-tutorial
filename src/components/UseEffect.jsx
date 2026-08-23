import { useEffect, useState } from "react"

const UseEffect = () => {
    const [count,setCount] = useState(0)
    const [on,setOn] = useState(false)
   
    // 1. useEffect without dependency array
    // runs when component render first time
    // also runs every time when something changes in component
    useEffect(()=>{
      console.log("running....")
    })

     // 2. useEffect with empty dependency array
    // runs only one time when component render first time
    useEffect(()=>{
      console.log("chasing....")
    },[])

    
     // 3. useEffect with dependency array
    // runs when component render first time
    // aslo runs according to value passed in dependency array
    useEffect(()=>{
      console.log("changed....")
    },[on])



  return (
    <div className="p-4">
    <p className="font-bold mb-2">Count: {count}</p>
      <button className="btn" onClick={()=>setCount(count + 1)}>
        Add
     </button>
       <br /><br />
      <button className="btn" onClick={()=>setOn(!on)}>
        {on ? "OFF" : "ON"}
     </button>
    </div>
  )
}
export default UseEffect