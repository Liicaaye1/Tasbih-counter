import { useState } from "react"
function Tasbih(){
    const [count, setCount ]= useState(0)

    

    //increate
    const IncreaseBtn= () =>{
        setCount ((star) => star+1)
    }
    //Reset 

    const ResetBtn = () =>{
        setCount((star) => star=0)
       
    }

    return <div className=" flex justify-center mt-10">
        <div className="border-2 border-pink-300 h-[400px] w-[300px] rounded-full ">

        <div className="text-center mt-16 ">
            <h1 className=" text-9xl text-pink-400 mb-4 ml-4">{count}</h1>
            <button onClick={IncreaseBtn} className="bg-pink-400 px-6 py-2 text-[26px] m-2 text-black rounded hover:border-2 border-black hover:text-pink-400 hover:bg-white" >Increase</button>
            <button onClick={ResetBtn} className="bg-pink-400 px-6 py-2 text-[26px] text-black rounded hover:border-2 border-black hover:text-pink-400 hover:bg-white" >Reset</button>
            
        </div>
       
        </div>
    </div>
}

export default Tasbih