import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({service}) => {
    const {_id,img,description, price, title} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description.slice(0,200)}....</p>
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