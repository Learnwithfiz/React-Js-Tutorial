import { useState } from "react";

function ManageForm()
{
    const [user,setUser] = useState("");
    

    function HandleUser(e){
        const {name,value} = e.target;
        setUser(
            (PrevObj)=>({
               ...PrevObj,
               [name]:value 
            })
        )
    }
    function SendData(e)
    {
        e.preventDefault();
         console.log(user)
    }
    return (
        <div>
            <p>User Name : {user.name}</p>
            <p>User email : {user.email}</p>
            <p>User dept : {user.dept}</p>
            <p>User subject : {user.subject}</p>
            <form onSubmit={SendData} action="">
               <label htmlFor=""> Eneter Name
                  <input onChange={HandleUser} type="text" name="name" />
               </label> <br />
               <label htmlFor=""> Eneter Email
                  <input onChange={HandleUser} type="text" name="email" />
               </label><br />
               <label htmlFor=""> Eneter Dept
                  <input onChange={HandleUser} type="text" name="dept" />
               </label>
               <br />
               <select onChange={HandleUser} name="subject" id="">
                  <option onChange={HandleUser} value="Bangla">Bangla</option>
                  <option onChange={HandleUser} value="English">English</option>
                  <option onChange={HandleUser} value="Phy">Phy</option>
               </select>
               <button>Submit</button>
            </form>
        </div>
    )
}
export default ManageForm;