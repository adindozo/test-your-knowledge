// import React, { useEffect, useState } from 'react';
// import PhotoBrowser from './components/PhotoBrowser';


function EditPhotoDetails(props) {
    if(!props.currentPhoto.location) return
    let {currentPhoto} = props;
    let {title, location} = currentPhoto;
    let city = props.currentPhoto.location.city;
    let country=location.country;
    
    return (
        <article className="details">
            <div className="detailsPhotoBox">
                <form className="photoForm">
                    <legend>Edit Photo Details</legend>
                    <img src={`http://www.randyconnolly.com/funwebdev/3rd/images/travel/medium640/${currentPhoto.filename}`} alt={currentPhoto.title} />
                    <label>Title</label>
                    <input type="text" name="title" value={title} onChange={(e)=>props.updatePhoto(e,currentPhoto.id)}/>
                    <label>City</label>
                    <input type="text" name="city" value={city} onChange={(e)=>props.updatePhoto(e,currentPhoto.id)}/>
                    <label>Country</label>
                    <input type="text" name="country" value={country} onChange={(e)=>props.updatePhoto(e,currentPhoto.id)}/>
                </form>
            </div>
        </article>
    );
}

export default EditPhotoDetails;

