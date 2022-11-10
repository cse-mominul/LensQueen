import React from 'react';

const SingleReviews = ({r}) => {
    return (
        <div>
            <div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{r.course}</h2>
    <p>{r.review}</p>
    <div className="card-actions justify-end">
      <p className="btn btn-primary">Name: {r.name}</p>
      <p className="btn btn-ghost">Email: {r.email}</p>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SingleReviews;