import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar1 from '../Navbar';
import {  Outlet } from 'react-router-dom';
import Footer from './Footer';
import { FaFacebook } from "react-icons/fa";

const Layout=()=>{

    return(
        <>
        
        <Container fluid>
      <Row>
        <Col>
        <Navbar1/>
        <Outlet/>
        <Footer/>
        </Col>
      </Row>
    </Container>
    <FaFacebook/>
        
       
        </>
    )
}
export default Layout;





