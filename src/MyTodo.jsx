import { useState } from 'react';
import './style.css'
function MyTodo()
{
    const [userData,SetUserData] = useState('');
    const [userDataFile,SetUserDataFile] = useState('');
    const [DisplayAll,SetDisplayAllInfo] = useState([]);
    function HandleForm(e)
    {
        SetUserData(
            (PrevObj)=>({
               ...PrevObj,
               [e.target.name]: e.target.value
            })
        )
    }
    function HandleFile(e){
        SetUserDataFile(e.target.files[0]);
    }
    function SendData(e){
        e.preventDefault();
      
        SetDisplayAllInfo(
            (PrevData)=>([
                ...PrevData,
                {
                   ...userData, 
                   img:userDataFile
                }
            ])
        )
        // console.log(DisplayAll)
    }
    function OnDelete(id)
    {
        const userDeleteRow = DisplayAll.filter((index,Item)=> Item !=id);
        SetDisplayAllInfo(userDeleteRow)
    }
    return(
        <>
          <div className="FormDiv">
            <div className="left-div">
            <h1>REACT Todo App</h1>
              <form onSubmit={SendData} action="">
                 <input onChange={HandleForm} placeholder="Enter name" name="name" type="text" /> <br />
                 <input onChange={HandleForm} placeholder="Enter email" name="email" type="text" /> <br />
                 <input onChange={HandleForm} placeholder="Enter dept" name="dept" type="text" /> <br />
                 <input onChange={HandleFile} type="file" name="img" /> <br />
                 <button>Submit</button>
              </form>
            </div>
            <div className="right-div">
                <table>
                    <thead>
                        <th width="40px">Sl</th>
                        <th width="100px">Name</th>
                        <th width="100px">Email</th>
                        <th width="100px">Dept</th>
                        <th width="100px">Img</th>
                        <th width="100px">Action</th>
                    </thead>
                    <tbody>

                        {
                            DisplayAll.map((row,i)=>(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.dept}</td>
                                    <td>{row.img && <img src={URL.createObjectURL(row.img)} width={60} height={60} />}</td>
                                    <td><button onClick={()=>OnDelete(i)}>Delete</button></td>
                                </tr>
                            ))
                        }
                       
                    </tbody>
                </table>
            </div>
          </div>
        </>
    )
}
export default MyTodo;