import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
const Product=()=>{
    const[mydata,setmydata]=useState([]);
    const navigate=useNavigate();

const loaddata=()=>{
    axios.get("http://localhost:3000/products").then((res)=>{
        setmydata(res.data);
    })
}
useEffect(()=>{
    loaddata();
},[])

const addproduct=()=>{
        navigate('/addproduct')
}

const DataDelete=(myid)=>{
    let api=`http://localhost:3000/products/${myid}`;
    axios.delete(api).then((res)=>{
        alert("Data Deleted Succcessfully")
        loaddata();
    })
}

const DataEdit=(id)=>{
    navigate("/edit/"+id)
}

const answer=mydata.map((key)=>{
    return(
        <>
    
    

        <tr>
          <td>{key.name}</td>
          <td>{key.brand}</td>
          <td>{key.category}</td>
          <td>{key.description}</td>
          <td>{key.price}</td>
          <td>
          <button onClick={()=>{DataEdit(key.id)}} style={{backgroundColor:"green"}}>Edit </button>|
                <button onClick={()=>{DataDelete(key.id)}} style={{backgroundColor:"blue"}}>Delete</button>
        </td>
        </tr>
        
          
     
        
    
      





        </>
    )
})

    return(
        <>
        <h1 align="center">Product List</h1>
        {/* <button onClick={addproduct}>Add Product</button> */}
        <Table striped bordered hover size="sm">
<thead>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Action</th>
          </tr>
          {answer}
          </thead>
            
        
        
        </Table>
        <button onClick={addproduct}>Add Product</button>

        
        </>
    )
}
export default Product;


