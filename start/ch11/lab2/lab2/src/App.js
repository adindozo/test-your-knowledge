import React, { useEffect, useState } from 'react';
import PhotoBrowser from './components/PhotoBrowser';

import './App.css';

function App() {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const url = "https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php?iso=gb";
        fetch(url)
            .then(resp => resp.json())
            .then(data => setPhotos(data))
            .catch(err => console.error(err));
    });
    const updatePhoto = (id, title, city, country) =>{
        setPhotos(photos.map(p => {
            if(p.id!=id) return p;
            return {
                ...p,
                title: title,
                city: city,
                country: country
            };
        }))
    }
    console.log(photos)
    return (
       <PhotoBrowser photos={photos} updatePhoto={updatePhoto}></PhotoBrowser>
    );
}

export default App;
