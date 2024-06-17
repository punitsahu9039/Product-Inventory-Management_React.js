
import Card from 'react-bootstrap/Card';

const Home=()=>{
return(
    <>
   <div className='background'>
        <h2 style={{textAlign:"center"}}>Management</h2>
        
        <div style={{display:"flex", justifyContent:"space-around",  flexWrap:"wrap"}}>
        <Card className='card' style={{ width: '18rem' }}>
        <img src="./src/images/product.png" alt="" />
     <Card.Body>
        <Card.Title>Product Inventory</Card.Title>
        <Card.Text>
        Easily manage and track your inventory with our user-friendly product inventory app.
        </Card.Text>
       
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <img src="./src/images/easy.png" alt="" />
      <Card.Body>
        <Card.Title>Easy Management</Card.Title>
        <Card.Text>
        Simplify your workflow with our app's easy management features
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
)
}
export default Home;