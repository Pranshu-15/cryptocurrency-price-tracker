import React from 'react';
import Button from '../Button';
import './style.css';
import MobileNav from './drawer';

const Header = () => {
  return (
    <>
     <div className="header">
      <h1>
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
        <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
        <a href="/dashboard">
          <Button text={"dashboard"} />
        </a>
      </div>
      <div className='drawer-component'>
        <MobileNav/>
      </div>
    </div>
    </>
  )
}

export default Header