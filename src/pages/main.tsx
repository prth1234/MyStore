// MainPage.tsx
import React from 'react';
import Navbar from '../components/navbar';
import MidLevelMenuBar from '../components/midLevelMenuBar';

const MainPage = () => {
    return (
        <div style={styles.container}>
            <Navbar />
            <div style={styles.buttonContainer}>
                <MidLevelMenuBar />
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: '100%',
        height: '110vh',
        position: 'relative'
    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '70px' // Adjust this value based on your navbar height
    }
};

export default MainPage;