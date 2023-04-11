import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedJobSection from '../FeaturedJobSection/FeaturedJobSection';
import JobCategories from '../JobCategories/JobCategories';
import JobSection from '../JobSection/JobSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobSection></JobSection>
            <FeaturedJobSection></FeaturedJobSection>
        </div>
    );
};

export default Home;