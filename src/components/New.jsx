
import react, { useState } from "react";
 function Transact(){
    let [bal, setBal] = useState(0)
    const finalSubmit = (e) => {
        e.preventDefault();
        const earning = e.target.earning.value;
        const spending = e.target.spendin.value;

        bal = earning - spending;
        setBal(bal);

    }

    return(

                <div className="ml-[35%]" >
                    <h1>Balance: {bal}</h1>
        
                    <form onSubmit={finalSubmit}>
                            <input type="number" className="mx-2" placeholder="Enter Earning" name="earning" />
                            <input type="number" className="mx-2" placeholder="Enter Spending" name="spending" />
        
                        <button className="mx-[30] inline-flex items-center bg-[#6366F1] border-0 py-1 px-3 focus:outline-none hover:bg-[#111827] rounded text-base text-white font-semibold mt-4 md:mt-0">Calculate</button>
        
                    </form>
        
                    
                </div>
            )

 }
 export default Transact;
