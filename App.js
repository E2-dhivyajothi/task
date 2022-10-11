import {useEffect,useState } from "react";
import App from "../todotask/App";

export default App();{
const[register,setregister]=useState()
useEffect(() => {
    if (localStorage.getItem("registerdata")) {
        setTodos(JSON.parse(localStorage.getItem("registerData")));
    }

},[]);

useEffect(() => {
    localStorage.setItem("registerdata", JSON.stringify(register));
},[register]);



    


};