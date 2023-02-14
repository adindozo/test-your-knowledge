import React, { useEffect, useState } from 'react';
import PhotoBrowser from './components/PhotoBrowser';

import './App.css';

function App() {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const url = "https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php?iso=gb";
        fetch(url)
            .then(resp => resp.json())
            .then(data => {setPhotos(data); })
            .catch(err => console.error(err));
    },[]);
    const updatePhoto = (e,id) =>{
       
        // const deep = {...complex, location: {...complex.location}}; 

        let value=e.target.value;
        setPhotos(photos.map(p => {
            if(p.id!=id) return p;
            if(e.target.name=='title')   return {
                ...p,
                location: {
                    ...p.location
                },
                title: value
               
            };
            if(e.target.name=='city') return {
                ...p,
                location: {
                    ...p.location,
                    city: value
                },
               
               
               
            };
            
            if(e.target.name=='country') return {
                ...p,
                location: {
                    ...p.location,
                    country: value,
                },
               
               
            };
          
        }))
    }
    return (
       <PhotoBrowser photos={photos} updatePhoto={updatePhoto}></PhotoBrowser>
    );
}

export default App;
