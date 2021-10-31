import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const TravelAsia = () => {
    const [toursAsia, setToursAsia] = useState([]);
    useEffect(() => {
        fetch('https://shielded-retreat-55862.herokuapp.com/asiatours')
            .then(res => res.json())
            .then(data => setToursAsia(data));
    }, []);
    return (
        <div className='py-5' style={{
            background: "#E3E6E3"
        }}>
            <Container>
                <h3 className='text-center py-3 text-primary'>OUR DESTINATIONS
                </h3>
                <h5 className='text-center pb-3 text-success'>CHOOSE YOUR NEXT DESTINATION</h5>
                <Row lg={3} md={2} sm={1} xs={1} className='g-3'>
                    {
                        toursAsia.map(tour => <Tour
                            key={tour._id}
                            tour={tour}
                        ></Tour>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default TravelAsia;