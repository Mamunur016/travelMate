import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Package from '../Package/Package';


const Packages = () => {
    const [packages, setPackages] = useState([]);
    // load data
    useEffect(() => {
        fetch('https://shielded-retreat-55862.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setPackages(data))
            .catch(err => console.log(err))
    }, []);

    // cheeck the data

    if (packages.length === 0) {

        return <div>
            <h3 className='text-primary text-center py-4'> BEST TOUR PACKAGE OFFERS FOR 2021</h3>
            <div className='text-center'> <Spinner animation="border" variant="danger" /></div>
        </div>


    }


    return (
        <div className='py-5'>
            <Container>
                <h3 className='text-primary text-center py-4'> BEST TOUR PACKAGE OFFERS FOR 2021</h3>
                <Row lg={3} md={2} sm={1} xs={1} className='g-3'>
                    {
                        packages.map(pack => <Package
                            key={pack._id}
                            pack={pack}
                        ></Package>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Packages;