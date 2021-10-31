import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tour = ({ tour }) => {
    // console.log(tour);
    const { title, img, _id, cost, inclusion, country } = tour;
    return (
        <div>
            <Col>
                <Card className='p-3 border-0 shadow rounded-3' style={{ minHeight: "600px" }}>
                    <div className='text-center'>
                        <Card.Img variant="top" src={img} />
                    </div>
                    <Card.Body>
                        <Card.Title className='text-success'>{title}</Card.Title>
                        <Card.Text>
                            {inclusion[0]} {inclusion[1]}...

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='border-0 bg-white text-center '>


                        <div className='d-flex justify-content-between pb-4'>
                            <div className='text-info'>
                                <b> {country}</b>
                            </div>
                            <div className='text-danger'>
                                <b>{cost} BDT</b>
                            </div>
                        </div>
                        <Link to={`/asiatours/${_id}`} >
                            <button className="btn btn-primary">Book Now</button>
                        </Link>

                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Tour;