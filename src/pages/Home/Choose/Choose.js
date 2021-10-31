import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Choose = () => {
    return (
        <div className='pt-5' style={{
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

            <div style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FpbnQlMjBtYXJ0aW4lMjBpc2xhbmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                minHeight: "300px"
            }} className='d-flex align-items-center'>
                {/* count section */}

                <Container>
                    <div>
                        <div className=' count py-2'>
                            <Row md={4} sm={2} xs={1} className="g-3">
                                <Col>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <h2 className='py-3 text-white'>20</h2>
                                        <div className=" py-1 px-3  text-white" style={{ background: "#FFD205" }}>
                                            DESTINATION

                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <h2 className='py-3 text-white'>30</h2>
                                        <div className=" py-1 px-3 text-white" style={{ background: "#1BBC9B" }}>TOURS PACK</div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <h2 className='py-3 text-white'>32</h2>
                                        <div className=" py-1 px-3  text-white" style={{ background: "#14B9D5" }}>CRUIES</div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <h2 className='py-3 text-white'>24</h2>
                                        <div className=" py-1 px-3 text-white" style={{ background: "#F76570" }}>HOUR_SUPPORT</div>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </div>
                </Container>

            </div>


        </div>

    );
};

export default Choose;