import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SingleReviews from '../Reviews/SingleReviews';
import './reviewst.css'

const Review = () => {
    const {user} = useContext(AuthContext);
    const {displayName} = user;
    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    const placeReview = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const review = from.review.value;
        const course = from.course.value;

        const reviewC = {
            name: name,
            email: email,
            review: review,
            course: course,
        }
        fetch('http://localhost:5000/reviews',{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body : JSON.stringify(reviewC)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(er => console.log(er));
    
    }

    return (
    <div>
        <h1 className='text-center text-secondary text-3xl mt-4 mb-3 font-semibold'>Please Post Your Review</h1>
       
       
  <figure>
  
  <div>
  <div className='text-center reviewst'>
    
  {
                                user?.uid ?
                                    <>
                                    <div>
                                    <div>
                                        <img className='w-24 rounded-full' src={user?.photoURL} alt=""/>
                                        <h2 className='mt-2'>{displayName}</h2>
                                    </div>
                                    </div>
 
                                    </>
                                    :
                                    <>
                                        
                                    </>
                            }

  </div>
  <Form className='reviewst' onSubmit={placeReview}>
            <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 mt-4 mb-4'>
            <input name ="name"  type="text" placeholder="name" className="textarea textarea-primary" required></input>
           <input name="course" type="text" placeholder= "Course Name" className="textarea textarea-primary" required/>
           <input name="email" type="email" placeholder="email" className="textarea textarea-primary" required/>
           <input name ="review" className="textarea textarea-primary" type="text" placeholder="Review" required></input>
           <input className='btn btn-outline btn-secondary mb-4' type="submit" value="Submit"></input>
            </div>

            
            </Form>
</div>
  </figure>
  <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 mb-4'>
        {
            review.map(r=><SingleReviews
            key={r._id}
            r={r}
            ></SingleReviews>)
        }

            </div>
 
</div>
    );
};

export default Review;