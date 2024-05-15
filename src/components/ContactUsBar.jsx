
import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';

const ContactUsBar = () => {
  return (
    <>
     <section className='container-fluid'>

        <Container>
                <Row>
                    <Col md={4} className='border p-4 shadow-sm rounded d-flex justify-content-center flex-column align-items-center gap-2'>
                        <i className="fa-solid fa-location-dot fa-2xl"></i>
                        <h5 className='mt-3 text-success'>Corporate Office</h5>
                        <p className='text-center'>
                            702 Main St, West Columbia <br />
                            South Carolina, 29170 <br />
                            United States
                        </p>
                    </Col>
                    <Col md={4} className='border p-4 shadow-sm rounded d-flex justify-content-center flex-column align-items-center gap-2'>
                        <i class="fa-solid fa-envelope fa-2xl"></i>
                        <h5 className='mt-3 text-success'>Get in Touch</h5>
                        <p className='text-center'>
                            <b>+44 2033939474</b> <br />
                            person@company.com <br />
                            person@company.com
                        </p>
                    </Col>
                    <Col md={4} className='border p-4 shadow-sm rounded d-flex justify-content-center flex-column align-items-center gap-2'>
                        <i class="fa-solid fa-clock fa-2xl"></i>
                        <h5 className='mt-3 text-success'>Customer Support</h5>
                        <p className='text-center'>
                            <b>Mon to Sat:</b>  09:00am - 08:00pm <br />
                            <b>Sunday:</b>  10:00am - 06:00pm
                        </p>
                    </Col>
                </Row>
            </Container>
     </section> 
    </>
  )
}

export default ContactUsBar
