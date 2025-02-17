import React from 'react';
import { Button } from '@cred/neopop-web/lib/components';
import { PiDotsSixBold } from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";

const MidLevelMenuBar: React.FC = () => {
    return (
        <div style={styles.container}>
            <div style={styles.buttonWrapper}>
                <Button variant="secondary" kind="flat" size="big" style={styles.button} showArrow>
                    <span style={styles.buttonContent}>
                        <PiDotsSixBold />
                        collections
                    </span>
                </Button>
                <Button variant="secondary" kind="flat" size="big" style={styles.button} showArrow>
                    <span style={styles.buttonContent}>
                        <IoDiamondOutline />
                        brands
                    </span>
                </Button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(90vh - 30px)', // Adjust height to account for Navbar
    },
    buttonWrapper: {
        display: 'flex',
        gap: '20px', // Space between buttons
        width:'100%'
    },
    buttonContent: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px', // Space between icon and text
    },
};

export default MidLevelMenuBar;