import React, { useEffect, useState } from 'react';
import PhotoList from './PhotoList';
import EditPhotoDetails from './EditPhotoDetails'


const PhotoBrowser = (props) => {
    const [currentPhoto, setCurrentPhoto] = useState([]);

    let showImageDetails = (id) => {
        setCurrentPhoto(id);
    }
    return (
        <section className='container'>
        <PhotoList photos={props.photos} showImageDetails={showImageDetails}></PhotoList>
        <EditPhotoDetails updatePhoto={props.updatePhoto} currentPhoto={currentPhoto}></EditPhotoDetails>
        </section>
    );
}
export default PhotoBrowser;