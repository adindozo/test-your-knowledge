import React, { useEffect, useState } from 'react';
import PhotoThumb from './PhotoThumb';

const PhotoList = (props) =>{
 return (
 props.photos.map(p => <PhotoThumb photo={p} key={p.id} showImageDetails={props.showImageDetails}></PhotoThumb>)
 );
}
export default PhotoList;