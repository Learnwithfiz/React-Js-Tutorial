import { Component } from "react";

class MyClass extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
           data: 0 ,
           name:"fiz",
           id:191311073,
           dept:"CSE",
           unv:"VU" 
        }
    }
    Increment=()=>{
        this.setState({
            data:this.state.data+1 
        }) 
    }
    Decrement=()=>{
        this.setState({
            data:this.state.data-1
        })
    }
    render()
    {
        const {data,name,id,dept,unv} = this.state ;
        return (<>
            <h3>{data}</h3>
            <h3>{name}</h3>
            <h3>{id}</h3>
            <h3>{dept}</h3>
            <h3>{unv}</h3>

            <button disabled={data==5 ? true :false} onClick={this.Increment}>+</button>
            <button disabled={data<=0 ? true :false} onClick={this.Decrement}>-</button>
        </>)
    }
}
export default MyClass;