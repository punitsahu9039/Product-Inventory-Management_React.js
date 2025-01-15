import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { message } from "antd";

const Product = () => {
  const [mydata, setmydata] = useState([]);
  const navigate = useNavigate();

  const loaddata = () => {
    axios.get("http://localhost:3000/products").then((res) => {
      setmydata(res.data);
    });
  };

  useEffect(() => {
    loaddata();
  }, []);

  const addproduct = () => {
    navigate("/addproduct");
  };

  const DataDelete = (myid) => {
    let api = `http://localhost:3000/products/${myid}`;
    axios.delete(api).then((res) => {
      message.error("Data Deleted Successfully");
      loaddata();
    });
  };

  const DataEdit = (id) => {
    navigate("/edit/" + id);
  };

  const answer = mydata.map((key) => {
    return (
      <tr key={key.id}>
        <td>{key.name}</td>
        <td>{key.brand}</td>
        <td>{key.category}</td>
        <td>{key.description}</td>
        <td>{key.price}</td>
        <td>{key.quantity}</td>
        <td>
          <button
            onClick={() => DataEdit(key.id)}
            style={styles.editButton}
          >
            Edit
          </button>
          <button
            onClick={() => DataDelete(key.id)}
            style={styles.deleteButton}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.header}>Product List</h1>
        <Table striped bordered hover size="sm" style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{answer}</tbody>
        </Table>
        <button onClick={addproduct} style={styles.addButton}>
          Add Product
        </button>
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    width: "80%",
    margin: "40px auto",
  },
  header: {
    textAlign: "center",
    color: "#333",
    fontSize: "2em",
    marginBottom: "20px",
  },
  table: {
    marginBottom: "20px",
  },
  editButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    marginRight: "8px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  addButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    display: "block",
    width: "200px",
    margin: "20px auto",
    fontSize: "1.2em",
    transition: "background-color 0.3s ease",
  },
};

export default Product;
