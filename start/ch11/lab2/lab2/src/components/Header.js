// import React, { useEffect, useState } from 'react';
// import PhotoBrowser from './components/PhotoBrowser';

import { Link } from 'react-router-dom';
function Header(props) {


    return (
        <header className="header">
            <div className="header-titles">
                <h1>Travel Image App</h1>
                <p>Using create-react-app</p>
            </div>
            <nav>
                <Link to='/about'><button>About</button></Link>
                <Link to='/upload'><button>Upload</button></Link>
                <Link to='/download'><button>Download</button></Link>
            </nav>
        </header>
    );
}

export default Header;

