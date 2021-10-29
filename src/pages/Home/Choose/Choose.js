import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Choose = () => {
    return (
        <div className='py-5' style={{
            background: "#D4E3E5"
        }}>
            <Container>
                <h4 className='text-center py-3 text-danger'>Why Choose Travel Mate?</h4>
                <Row md={2} sm={1} xs={1} className='g-4'>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <div className='me-3'>
                            <h1><i class="fas fa-camera-retro"></i></h1>
                        </div>
                        <div>
                            <h4>

                                Beautiful Places</h4>
                            <p>Travelers want beautiful and unique places every time they want to leave the home. We’re ready with years of experience to introduce the best places in the Wolrd.</p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <div className='me-3'>
                            <h1><i class="fas fa-check"></i></h1>
                        </div>
                        <div>
                            <h4>

                                Easy Tour Confirmation</h4>
                            <p>A long Tour Confirmation process can’t support you to purchase any tour package. Travelmate has tried to complete the whole process into one call.</p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <div className='me-3'>
                            <h1><i class="fas fa-globe-asia"></i></h1>
                        </div>
                        <div>
                            <h4>
                                Diverse Destinations</h4>
                            <p>Travelmate knows the value of your time and the varieties bucket list of you. We have the innovative team to fulfill your taste of diverse destination.</p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <div className='me-3'>
                            <h1><i class="fas fa-comments"></i></h1>
                        </div>
                        <div>
                            <h4>

                                Experienced Team</h4>
                            <p>Travelmate introduces 24/7 support team via online or offline. You can reach us in every method including email, social media or phone call. Just feel free to ask anything.</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Choose;