import React from 'react';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>

            <Choose></Choose>

        </div>
    );
};

export default Home;
