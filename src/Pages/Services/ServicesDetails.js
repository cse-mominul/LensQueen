import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const {title,img, description, price} = useLoaderData();
    return (
        <div className="card w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-secondary">{title}</h2>
    <p>{description}</p>
    <h3 className='card-title text-secondary'>${price}</h3>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ServicesDetails;