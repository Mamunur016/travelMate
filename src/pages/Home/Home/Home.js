import React from 'react';
import Banner from '../Banner/Banner';

import Choose from '../Choose/Choose';
import News from '../News/News/News';
import Packages from '../Packages/Packages';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <News></News>
            <Choose></Choose>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;
