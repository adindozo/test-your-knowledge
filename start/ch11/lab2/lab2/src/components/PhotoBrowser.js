import React, { useEffect, useState } from 'react';
import PhotoList from './PhotoList';
import EditPhotoDetails from './EditPhotoDetails'

// const deep = {...complex, location: {...complex.location}}; 
const PhotoBrowser = (props) => {

    const [currentPhoto, setCurrentPhoto] = useState([]);
    const [API_fetch_done, setAPI_fetch_done] = useState(false);
    useEffect(() => {
        if (props.photos && !API_fetch_done && props.photos.length >0) {
            console.log('dataFetched')
          setCurrentPhoto(props.photos[0]);
          setAPI_fetch_done(true);
        }
      }, [props.photos]);

    //   useEffect(() => { //if photos array change after API fetch is done, change current photo to store its value in controlled form inputs
    //     if (API_fetch_done) {
       
    //       setCurrentPhoto(props.photos[0]);
   
    //     }
    //   }, [props.photos]);
    const updateCurrentPhoto = (e) =>{
       
        // const deep = {...complex, location: {...complex.location}}; 

        let value=e.target.value;
        setCurrentPhoto((currentPhoto) => {
            
            if(e.target.name=='title')   return {
                ...currentPhoto,
                location: {
                    ...currentPhoto.location
                },
                title: value
               
            };
            if(e.target.name=='city') return {
                ...currentPhoto,
                location: {
                    ...currentPhoto.location,
                    city: value
                },
               
               
               
            };
            
            if(e.target.name=='country') return {
                ...currentPhoto,
                location: {
                    ...currentPhoto.location,
                    country: value,
                },
               
               
            };
          
        })
    }
    let showImageDetails = (id) => {
        
        let complex = props.photos.find( p => p.id==id);
        
        // if(!complex) return setCurrentPhoto(props.photos[0]);

        setCurrentPhoto({...complex, location: {...complex.location}});
    }
    return (
        <section className='container'>
        <PhotoList photos={props.photos} showImageDetails={showImageDetails}></PhotoList>
        <EditPhotoDetails updatePhoto={props.updatePhoto} currentPhoto={currentPhoto} updateCurrentPhoto={updateCurrentPhoto}></EditPhotoDetails>
        </section>
    );
}
export default PhotoBrowser;