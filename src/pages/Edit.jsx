
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Edit=()=>{
    const[mydata, setmydata]=useState({})
    const{id}=useParams();
    const navigate=useNavigate();
    const loadData=()=>{
        let api=`http://localhost:3000/products/${id}`;
        axios.get(api).then((res)=>{
            setmydata(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    },[])

    const formhandle=(e)=>{
            let name=e.target.name;
            let value=e.target.value;
            setmydata(values=>({...values,[name]:value}))
    }

    const savedata=()=>{
        let url=`http://localhost:3000/products/${id}`;
        axios.put(url,mydata).then((res)=>{
            alert("data updated successfully")
            navigate("Products")
        })
    }

    return(
        <>
        <form style={{marginLeft:"20px"}}>
        Enter Name : <input type="text" name="name" value={mydata.name} onChange={formhandle}  /> <br /> <br/>
        Enter Brand : <input type="text" name="brand" value={mydata.brand} onChange={formhandle} /> <br /> <br/>
        Enter Category : <input type="text" name="category" value={mydata.category} onChange={formhandle}  /> <br /> <br/>
        Enter Price : <input type="text" name="price" value={mydata.price} onChange={formhandle}  /> <br /> <br/>
        Enter Description : <input type="text" name="description" value={mydata.description} onChange={formhandle}  /> <br /> <br/>
        Enter Created : <input type="text" name="created" value={mydata.created} onChange={formhandle}  /> <br /> <br/>
        <button onClick={savedata} >Update Data</button>
        </form>
        </>
    )
}
export default Edit;