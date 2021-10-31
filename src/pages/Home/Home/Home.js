import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';

import Choose from '../Choose/Choose';
import News from '../News/News/News';
import Packages from '../Packages/Packages';
import Testimonials from '../Testimonials/Testimonials';
import Tour from '../Tour/Tour';
import TravelAsia from '../TravelAsia/TravelAsia';

const Home = () => {
    const [toursAsia, setToursAsia] = useState([]);
    useEffect(() => {
        fetch('https://shielded-retreat-55862.herokuapp.com/asiatours')
            .then(res => res.json())
            .then(data => setToursAsia(data));
    }, []);
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            {/* <TravelAsia></TravelAsia> */}
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
                            ></Tour>).slice(0, 6)
                        }
                    </Row>
                    <div className='py-5 text-center'>
                        <button className='btn btn-success px-4'> <Link to='/travelasia' style={{
                            textDecoration: "none",
                            color: "white"
                        }}>Sell all</Link> </button>
                    </div>
                </Container>
            </div>
            <News></News>
            <Choose></Choose>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;
