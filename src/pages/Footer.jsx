

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
          <a href='https://www.facebook.com/cybromtechnologybhopal?mibextid=ZbWKwL' className='me-4 text-reset'>
          
            < FaFacebook />
            </a>
            <a href='https://en.m.wikipedia.org/wiki/Twitter' className='me-4 text-reset'>
            
            <FaTwitter />

          </a>
          <a href='https://www.google.co.in/' className='me-4 text-reset'>
         
            <IoLogoGoogle/>
          </a>
          <a href='https://www.instagram.com/sahupunit100?igsh=MXV4ZWV5aXJ5Y2h2OA==' className='me-4 text-reset'>
         
            <FaInstagram/>
          </a>
          <a href='https://www.linkedin.com/in/punit-sahu-9871552b9' className='me-4 text-reset'>
         
            <FaLinkedinIn/>
          </a>
          <a href='https://github.com/punitsahu9039' className='me-4 text-reset'>
     
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
                <a href='https://www.flipkart.com/search?q=smart%20phones&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off' className='text-reset'>
                  Smart-phone
                </a>
              </p>
              <p>
                <a href='https://www.flipkart.com/search?q=apple%20mobiles&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off' className='text-reset'>
                  Apple-mobile
                </a>
              </p>
              <p>
                <a href='https://www.flipkart.com/search?q=multimedia+mobile&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_2_11_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_2_11_na_na_ps&as-pos=2&as-type=RECENT&suggestionId=multimedia+mobile&requestId=64c4171f-80ec-472c-a1d9-387c74530f45&as-searchtext=multimedia%20
                ' className='text-reset'>
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