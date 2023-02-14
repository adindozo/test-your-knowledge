import React, { useEffect, useState } from 'react';
import PhotoThumb from './PhotoThumb';

const PhotoList = (props) =>{

 return ( <article className='photos'>
 {props.photos.map(p => <PhotoThumb photo={p} key={p.id} showImageDetails={props.showImageDetails}></PhotoThumb>)}
 </article>
 );
}
export default PhotoList;