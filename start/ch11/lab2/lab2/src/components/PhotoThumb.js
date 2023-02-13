// import React, { useEffect, useState } from 'react';
// import PhotoThumb from './components/PhotoThumb';

const PhotoThumb = (props) => {
    let { photo } = props;
    return (
        <div className="photoBox" onClick={()=>{
            props.showImageDetails(photo.id);
        }}>
            <figure>
                <img title={photo.title} alt={photo.title} src={"https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/"+photo.filename} className="photoThumb" />
            </figure>
            <div>
                <h3>{photo.title}</h3>
                <p>{photo.location.city}, {photo.location.country}</p>
                <button>View</button> <button>❤</button>
            </div>
        </div>
    );
}
export default PhotoThumb;