import React from 'react';
import { Typography } from '@cred/neopop-web/lib/components';
import { colorPalette, FontVariant } from '@cred/neopop-web/lib/primitives';

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '50px',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div>
        <img
          src="https://i.ibb.co/CpZ0nHWX/Orange-and-Dark-Gray-Retro-Apparel-Logo-Photoroom.png" 
          alt="Company Logo"
          style={{ height: '70px', cursor: 'pointer' }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
  {/* "Giveaway" in Caps and Bold */}
  <Typography {...FontVariant.CapsExtraBold10} color={colorPalette.popBlack[500]}>
    Giveaway
  </Typography>

  <Typography {...FontVariant.CapsBold10} color={colorPalette.popBlack[500]}>
    Store
  </Typography>
</div>

      {/* Buttons on the right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
        <a 
          href="/orders"
          style={{ 
            background: 'transparent', 
            border: 'none', 
            cursor: 'pointer',
            padding: '0',
            textDecoration: 'none' // Remove underline from link
          }}
        >
          <img 
            src="https://i.ibb.co/7dZSjv6M/Screenshot-2025-02-17-at-7-03-24-PM-Photoroom.png" 
            alt="Orders" 
            style={{ width: '40px', height: '40px' }}
          />
        </a>
        <a 
          href="/cart"
          style={{ 
            background: 'transparent', 
            border: 'none', 
            cursor: 'pointer',
            padding: '0',
            textDecoration: 'none' // Remove underline from link
          }}
        >
          <img 
            src="https://i.ibb.co/4Rbk2dWs/Screenshot-2025-02-17-at-7-03-35-PM-Photoroom.png" 
            alt="Cart" 
            style={{ width: '40px', height: '40px' }}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;