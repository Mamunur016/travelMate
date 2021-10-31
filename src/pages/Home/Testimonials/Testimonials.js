import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://shielded-retreat-55862.herokuapp.com/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, []);

    return (
        <div className='news-container pb-5 pt-4' style={{ backgroundColor: "#FFFFFF" }}>
            <Container>
                <h2 className='text-center text-danger py-3'>CLIENT TESTIMONIALS</h2>
                <h5 className='text-center text-muted py-3'>It’s always the word of mouth that’s the best advice. Here are some of our…</h5>
                <Row xl={3} lg={2} md={2} sm={1} xs={1} className='g-3'>
                    {

                        testimonials.map(testimonial => <Testimonial
                            testimonial={testimonial}
                            key={testimonial.id}
                        ></Testimonial>)




                    }
                </Row>
            </Container>
        </div>
    );
};

export default Testimonials;