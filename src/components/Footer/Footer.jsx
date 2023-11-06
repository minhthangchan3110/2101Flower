import React from 'react'
import './footer.css'
import {Col, Row, Container, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
          <div className="logo">
            <div>
              <h1 className='text-white'>2101Flower Shop</h1>
            </div>
          </div>
            <p className="footer_text mt-4">
              We are committed to offering only the finest floral arrangements and gifts, backed by service that is friendly and prompt. Because all of our customers are important, our professional staff is dedicated to making your experience a pleasant one
            </p>
          </Col>
          <Col lg='3' md='3' className='mb-4'>
            <div className="footer_quick-links">
              <h4 className='quick_links-title text-white'>Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0 '>
                  <Link to='#' >Flower</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 '>
                  <Link to='#' >Gift</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 '>
                  <Link to='#' >Wedding</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 '>
                  <Link to='#' >Slogan</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' className='mb-4' md='3'>
          <div className="footer_quick-links" >
              <h4 className='quick_links-title text-white'>Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0 '>
                  <Link to='#' >Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 '>
                  <Link to='#' >Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 '>
                  <Link to='#' >Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 '>
                  <Link to='#' >Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' className='mb-4' md='4'>
          <div className="footer_quick-links">
              <h4 className='quick_links-title text-white'>Contact</h4>
              <ListGroup className='footer_contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-map-pin-line"></i></span>
                  <p>181, Nguyen Trai, Ha Noi, Viet Nam</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-phone-line"></i></span>
                  <p>0356458854</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                  <i className="ri-mail-line"></i>
                  </span>
                  <p>minhthang3916@gmail.com</p>
                </ListGroupItem>
                
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer_copyright">
              Copyright {year} developed by me. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
