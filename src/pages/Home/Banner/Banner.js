import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='bg-light pt-5'>


            <Container>
                <h1 className='text-center py-3'>Welcome to Bangladesh: The Land of Rivers</h1>
                <p className='text-center py-3'>
                    Travelmate brings you the places to visit in Dhaka as well as the places to visit in Bangladesh. We will guide you for visiting the tourist’s spots, historical places in Bangladesh, ecotourism sites in Bangladesh and World Heritage Sites in Bangladesh. Travel Mate Team is here to make your journey affordable, enjoyable and memorable. If you are a tourist or foreign citizen, just get in touch with us and we will take the work to handle your Visa Processing, Air-Ticketing, Hotel-Booking, Tourist Transport and tour-package planning that will be suitable for you.
                </p>
            </Container>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZGFyYmFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="First slide" style={{ height: "500px" }}
                    />
                    <Carousel.Caption>
                        <h3>Bandarban</h3>
                        <p>4 Days Bandarban</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://www.travelmate.com.bd/wp-content/uploads/2018/07/saint-martin-01-531x354.jpg"
                        alt="First slide" style={{ height: "500px" }}
                    />
                    <Carousel.Caption>
                        <h3>Saint-martin</h3>
                        <p>4 Days saint-martin Island</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/photos/inside-paro-dzong-picture-id157316722?b=1&k=20&m=157316722&s=170667a&w=0&h=eUDy5pQ5wRBOJT-S34Ccst9zxqU2Yl28HVCaOMbNYfQ="
                        alt="First slide" style={{ height: "500px" }}
                    />
                    <Carousel.Caption>
                        <h3>Bhutan</h3>
                        <p>4 Days Bhutan</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/photos/scenic-aerial-view-of-two-boats-on-sea-in-thailand-picture-id1136324597?b=1&k=20&m=1136324597&s=170667a&w=0&h=CCzSbAQX9oQh-04efEoP-hYnVjnBaVS0ZYV5398OPUs="
                        alt="Second slide" style={{ height: "500px" }}
                    />
                    <Carousel.Caption>
                        <h3 className='text-primary'>Thailand</h3>
                        <p className='text-success'>4 Days Krabi Island</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/photos/view-from-above-aerial-view-of-a-traditional-longtail-boat-sailing-a-picture-id1132785980?b=1&k=20&m=1132785980&s=170667a&w=0&h=rhrZwj_XW9X097fHsqRiXmim_gi8tFuU21-EY7Viu9Q="
                        alt="Third slide" style={{ height: "500px" }}
                    />
                    <Carousel.Caption>
                        <h3>Thailand</h3>
                        <p>4 Days Krabi Island</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </div>
    );
};

export default Banner;