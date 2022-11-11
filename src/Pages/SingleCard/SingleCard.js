import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const SingleCard = ({service}) => {
    const {_id,img,description, price, title} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
           <PhotoProvider>
              <PhotoView src={img}><img src={img} alt="" /></PhotoView>
          </PhotoProvider>
    </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description.slice(0,200)}....</p>
    <h3 className='card-title'>${price}</h3>
    <div className="card-actions justify-end">
      <Link to={`/service/${_id}`}>
      <button className="btn btn-outline btn-secondary">Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default SingleCard;