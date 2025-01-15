import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from 'antd'; 

const AddProduct = () => {
  const [input, handleinput] = useState({});
  const navigate = useNavigate();

  const handleform = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    handleinput((values) => ({ ...values, [name]: value }));
  };

  const saveData = () => {
    let url = "http://localhost:3000/products";
    axios.post(url, input).then(() => {
      message.success("Data Saved Successfully");
      navigate("./Products");
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Add Product</h1>
      <hr style={styles.separator} />

      <form style={styles.form}>
        <label style={styles.label}>Product Name</label>
        <input
          type="text"
          name="name"
          onChange={handleform}
          style={styles.input}
          placeholder="Enter product name"
        />

        <label style={styles.label}>Brand</label>
        <input
          type="text"
          name="brand"
          onChange={handleform}
          style={styles.input}
          placeholder="Enter brand"
        />

        <label style={styles.label}>Category</label>
        <input
          type="text"
          name="category"
          onChange={handleform}
          style={styles.input}
          placeholder="Enter category"
        />

        <label style={styles.label}>Price</label>
        <input
          type="text"
          name="price"
          onChange={handleform}
          style={styles.input}
          placeholder="Enter price"
        />

        <label style={styles.label}>Description</label>
        <input
          type="text"
          name="description"
          onChange={handleform}
          style={styles.input}
          placeholder="Enter description"
        />

        <label style={styles.label}>Quantity</label>
        <input
          type="number"
          name="quantity"
          onChange={handleform}
          style={styles.input}
          placeholder="Enter quantity"
        />

        <label style={styles.label}>Created Date</label>
        <input
          type="text"
          name="created"
          onChange={handleform}
          style={styles.input}
          placeholder="Enter created date"
        />
      </form>

      <div style={styles.buttonContainer}>
        <button onClick={saveData} style={styles.button}>
          Save Data
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    padding: "30px",
    borderRadius: "8px",
    width: "60%",
    margin: "50px auto",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  header: {
    color: "#333",
    fontSize: "2em",
    marginBottom: "20px",
  },
  separator: {
    borderColor: "red",
    width: "50%",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "15px",
    maxWidth: "500px",
    margin: "0 auto",
  },
  label: {
    fontSize: "1.1em",
    fontWeight: "600",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1em",
    outline: "none",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontSize: "1.2em",
    padding: "12px 25px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default AddProduct;
