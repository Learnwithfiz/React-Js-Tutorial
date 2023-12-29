import Child from "./child";
const Parent=()=>{
     const userInfo = {
        name:"Fiz",
        Id:1913110733,
        email:"fiz@gmail.com",
        dept:"cse"
     }
    return (
        <>
         <h1>Its parents</h1>
         <Child data = {userInfo}  />
        </>
    )

}
export default Parent;