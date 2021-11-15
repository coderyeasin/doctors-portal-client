import React from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Doctors from '../Doctors/Doctors';
import HIghlight from '../HIghlight/HIghlight';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HIghlight></HIghlight>
            <Services></Services>
            <Care></Care>
            <AppoinmentBanner></AppoinmentBanner>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;