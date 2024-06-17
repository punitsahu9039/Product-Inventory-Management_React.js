

import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";







export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
          
            < FaFacebook />
            </a>
            <a href='' className='me-4 text-reset'>
            
            <FaTwitter />

          </a>
          <a href='' className='me-4 text-reset'>
         
            <IoLogoGoogle/>
          </a>
          <a href='' className='me-4 text-reset'>
         
            <FaInstagram/>
          </a>
          <a href='' className='me-4 text-reset'>
         
            <FaLinkedinIn/>
          </a>
          <a href='' className='me-4 text-reset'>
     
            <FaGithub/>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p>
                PUNIT MANAGMENT LTD
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Smart-phone
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Apple-mobile
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Multimedia-phone
                </a>
              </p>
            
              
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                INDIA, BHOPAL [MP]
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
              Sahupunit@cybrom.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 91 9340479217
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 91 8719937679
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MYinventory.com
        </a>
      </div>
    </MDBFooter>
  );
}