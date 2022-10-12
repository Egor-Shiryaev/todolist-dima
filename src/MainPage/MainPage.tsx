import React from 'react';
import SideBar from './SideBar/SideBar';
import Posts from './PageBody/Posts/Posts';
import ProfileHeader from './PageBody/ProfileHeader/ProfileHeader';
import TopSearch from './PageBody/TopSearch/TopSearch';
import UpcomingEvents from './PageBody/UpcomingEvents';


const MainPage = () => {
    return (
        <div>
            <SideBar />
            <Posts/>
            <ProfileHeader/>
            <TopSearch/>
            <UpcomingEvents/>
        </div>
    );
};

export default MainPage;