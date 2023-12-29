import { Component } from "react";

class ManagForm extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            userName:'',
            userEmail:'',
            dept:'',
            gender:'',
            Subject:'',
            msg:''
        }
    }
     
    ManagData=(event)=>{
        
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    SubmitData=(e)=>{
        e.preventDefault()
        console.log(this.state)
    }
    render()
    {
        const {userName,userEmail,dept,Subject,msg} = this.state;
        return (
            <>
              <h1>Manage Form</h1>
              <p>User Name = {userName}</p>
              <p>user Email = {userEmail}</p>
              <p>user Dept = {dept}</p>
              <p>User Subject = {Subject}</p>
              <p>User Msg = {msg}</p>
              <form action="">
                 <p>
                    Enter name : <input type="text" onChange={this.ManagData} name="userName" />
                 </p>
                 <p>
                    Enter Email : <input type="text"  onChange={this.ManagData} name="userEmail" />
                 </p>
                 <p>
                    Enter Dept : <input type="text"  onChange={this.ManagData} name="dept" />
                 </p>
                 <p>
                    Choose Gender Male | Female : 
                    <input type="radio"onChange={this.ManagData} value="Male" name="gender"  /> |
                    <input type="radio"onChange={this.ManagData} value="FeMale" name="gender" /> |
                 </p>
                 <p>Choose Subject  <select onChange={this.ManagData} name="Subject" id="">
                                    <option onChange={this.ManagData} value="Bangla">Bangla</option>
                                    <option onChange={this.ManagData} value="English">English</option>
                                    <option onChange={this.ManagData} value="Arabiq">Arabiq</option>
                                   </select>
                </p>
                <p>Enter Msg <textarea name="msg"onChange={this.ManagData}  id="" cols="30" rows="10"></textarea></p>

                 <p><button onClick={this.SubmitData}>Submit Data</button></p>
              </form>
            </>
        )
    }
}
export default ManagForm ;