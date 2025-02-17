import React from 'react';
import Navbar from '../components/navbar';
import MidLevelMenuBar from '../components/midLevelMenuBar';

const MainPage = () => {
    return (
        <div style={styles.container}>
            <Navbar />
            <div className='mainBody'>            <MidLevelMenuBar />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    mainBody: {
        display: 'flex',
        justifyContent: 'center', // Center the MidLevelMenuBar horizontally
        alignItems: 'center', // Center the MidLevelMenuBar vertically
        flex: 1, // Take up the remaining space
    }
    
};

export default MainPage;