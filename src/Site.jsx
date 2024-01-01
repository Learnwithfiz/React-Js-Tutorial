import { useState } from "react";

function Site(){
    const [user,SetUser] = useState({
        data1:"Fiz",
        data2:"Fiz2"
    });
   function HandleForm(e){

      SetUser(
         (prevObj)=>({
           ...prevObj,
           data1:"Mafi",
            
         })
      )
   }
    function SendData(e){
        e.preventDefault();
        console.log(user)
    }
    return (
        <>
        <p>{user.data1}</p>
          <h1>Form Submited</h1>
          <form onSubmit={SendData} action="">
            <input type="text" name="name" onChange={HandleForm} /> <br />
            <input type="text"name="email" onChange={HandleForm} /> <br />
            <input type="text"name="dept" onChange={HandleForm} /> <br />
            <button>submit</button>
          </form>
        </>
    )
}
export default Site;