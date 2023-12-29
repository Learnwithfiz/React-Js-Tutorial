import { useState } from "react";

function MyHooks()
{   
    
    const [CountNumber,SetCountNumber] = useState(0) ;
    
    function UpdateButton(){
        SetCountNumber(CountNumber+1);
    }
    return <>
      
       <h1>UseState update {CountNumber}</h1>
       <button onClick={UpdateButton}>Update</button>
        
       
    </>
}
export default MyHooks;