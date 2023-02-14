import React, { useEffect, useState } from 'react';
import PhotoList from './PhotoList';
import EditPhotoDetails from './EditPhotoDetails'

// const deep = {...complex, location: {...complex.location}}; 
const PhotoBrowser = (props) => {

    const [currentPhoto, setCurrentPhoto] = useState([]);
    useEffect(() => {
        if (props.photos && props.photos.length > 0) {
          setCurrentPhoto(props.photos[0]);
        }
      }, [props.photos]);
    let showImageDetails = (id) => {
        let complex = props.photos.find( p => p.id==id);
        // if(!complex) return setCurrentPhoto(props.photos[0]);

        setCurrentPhoto({...complex, location: {...complex.location}});
    }
    return (
        <section className='container'>
        <PhotoList photos={props.photos} showImageDetails={showImageDetails}></PhotoList>
        <EditPhotoDetails updatePhoto={props.updatePhoto} currentPhoto={currentPhoto}></EditPhotoDetails>
        </section>
    );
}
export default PhotoBrowser;