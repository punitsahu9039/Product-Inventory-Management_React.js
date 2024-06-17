import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct=()=>{
const [input,handleinput]=useState({});

const navigate =useNavigate();


const handleform=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    handleinput(values=>({...values,[name]:value}))
}

const saveData=()=>{
    let url="http://localhost:3000/products";
    axios.post(url,input).then(()=>{
       
        alert("Data Saved Successfully")
        navigate("./Products")
    })
}
    return(
        <>
         <div style={{backgroundColor:"grey", textAlign:"center", alignItems:"center"}}>
        <h1 style={{marginTop:"2px", textAlign:"center"}}>Add Products</h1>
        <hr style={{ borderColor:"red",}}/>
    
<form style={{marginLeft:"20px"}}>
        Enter Name : <input type="text" name="name" onChange={handleform} /> <br /> <br/>
        Enter Brand : <input type="text" name="brand" onChange={handleform} /> <br /> <br/>
        Enter Category : <input type="text" name="category" onChange={handleform} /> <br /> <br/>
        Enter Price : <input type="text" name="price" onChange={handleform} /> <br /> <br/>
        Enter Description : <input type="text" name="description" onChange={handleform} /> <br /> <br/>
        Enter Created : <input type="text" name="created" onChange={handleform}  /> <br /> <br/>  
        </form>
        </div>
        <button onClick={saveData}>Save Data</button>
        </>
    )
}
export default AddProduct;