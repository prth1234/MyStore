// MidLevelMenuBar.tsx
import React from 'react';
import { Button } from '@cred/neopop-web/lib/components';
import { PiDotsSixBold } from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";

const MidLevelMenuBar: React.FC = () => {
    return (
        <div style={styles.container}>
            <Button 
                variant="secondary" 
                kind="flat" 
                size="big" 
                style={styles.button} 
                showArrow
            >
                <span style={styles.buttonContent}>
                    <PiDotsSixBold />
                    collections
                </span>
            </Button>
            <Button 
                variant="secondary" 
                kind="flat" 
                size="big" 
                style={styles.button} 
                showArrow
            >
                <span style={styles.buttonContent}>
                    <IoDiamondOutline />
                    brands
                </span>
            </Button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContent: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    },
    button: {
        minWidth: '150px'
    }
};

export default MidLevelMenuBar;