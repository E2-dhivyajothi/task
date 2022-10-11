import { useState } from "react";
import"./Registration.css";
// import App from "./App";

const Registration=()=>{
const[nameInput,setNameinput]=useState();
const[deptInput,setDeptinput]=useState();
const[jobInput,setJobinput]=useState();
const[phnInput,setPntinput]=useState();
const[yrInput,setYrinput]=useState();

const handleChange=(e)=>{
    const{id,value}=e.target.value;
    if(id==="Name"){
        setNameinput(value);
    }

if(id==="dept"){
    setDeptinput(value);
}
if(id==="job"){
    setJobinput(value);
}
if(id==="contact"){
    setPntinput(value);
}
if(id==="year"){
    setYrinput(value);
}


}
const handleSubmit =(e)=>{
    e.preventDefault();
    onsubmit(nameInput,deptInput,jobInput,phnInput,yrInput);
}


    return(
    <><label></label>
<div className="Registration">
     
    <lablel htmlFor="name">Name</lablel>
    <div className="name">
    <input type= "text"
    id="Name"
    value={nameInput}
    onChange={(e)=>handleChange(e)}
    />
    </div>
    <div className="Dept">
    <label  htmlFor="dept">Department</label>
    <input type="text"
     id="dept"
     value={deptInput}
     onChange={handleChange}/>
     </div>

    <div className="job">
    <label  htmlFor="job"> JobTitle</label>
    <input type="text"
     id="job"
     value={jobInput}
     onChange={handleChange}/>
     </div>

    <div className="contact">
    <label  htmlFor="contact">Contact Number</label>
    <input type="tel"
     id="contact"
     value={phnInput}
     onChange={(e)=>handleChange(e)}/>
    </div>

    <div className="contact">
    <label htmlFor="year">Year of experience</label>
    <input type="number"
     id="year"
     value={yrInput}
     onChange={handleChange}/>
     </div>
</div>
<div className="Submitbtn">
    <button onSubmit={()=>handleSubmit()}type="submit">Submit</button>

</div>
</>
    )
}
export default Registration;