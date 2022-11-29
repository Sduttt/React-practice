import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0)

    return(
        <div className= "text-center font-bold text-xl mb-8">
            <h1>Counter: {count}</h1>
            <div className="flex items-center justify-center">
            <button onClick={() => setCount(0)} className="mx-2 my-2 inline-flex items-center bg-[#6366F1] border-0 py-1 px-3 focus:outline-none hover:bg-[#111827] rounded text-base text-white font-semibold mt-4 md:mt-0">Reset</button>
            
            <button onClick={() => setCount(count+1)} className="mx-2 my-2 inline-flex items-center bg-[#6366F1] border-0 py-1 px-3 focus:outline-none hover:bg-[#111827] rounded text-base text-white font-semibold mt-4 md:mt-0">Increase</button>
            
            <button onClick={() => setCount(count-1)} className="mx-2 my-2 inline-flex items-center bg-[#6366F1] border-0 py-1 px-3 focus:outline-none hover:bg-[#111827] rounded text-base text-white font-semibold mt-4 md:mt-0">Decrease</button>
            </div>
        </div>
    )
}

export default Counter;