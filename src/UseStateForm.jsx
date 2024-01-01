import { useState } from "react";

function UseStateForm()
{
    const [UserInfo,SetUserInfo] = useState({
        Name :"Mostafizur Rahman",
        Id: 192829,
        dept:"CSE"
    });
    
    function ChangeData()
    {
        SetUserInfo(
            (PrevObject)=>({
               ...PrevObject,
               Name :"Puspo",
               Id: 29,
       
            })
        )
    }
    return (
        <>
         <h3>Name = {UserInfo.Name}</h3>
         <h3>Dept = {UserInfo.dept}</h3>
         <h3>id = {UserInfo.Id}</h3>
          <h1>Form Manage Using useState</h1>
          <button onClick={ChangeData}>Changes Object</button>
        </>
    )
}
export default UseStateForm;