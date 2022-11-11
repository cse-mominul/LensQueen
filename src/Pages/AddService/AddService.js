import React, { useContext } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './AddService.css'

const AddService = () => {
    const {user} = useContext(AuthContext);
    const placeService = event =>{
        event.preventDefault();
        const from = event.target;
        const title = from.Title.value;
        const photoURL = from.Photourl.value;
        const description = from.Description.value;
        const price = from.Price.value;
        
        const service = {
            title: title,
            photoURL: photoURL,
            description: description,
            price: price,
        }
        fetch('http://localhost:5000/services',{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body : JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(er => console.log(er));
    }
    return (
        <div>
              <h3 className='text-center text-secondary text-3xl mt-4 mb-3 font-semibold'>Hi {user?.displayName} </h3>
            <p className='text-center'>Thanks For Adding Your Service</p>
            
            <Form onSubmit={placeService}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 mb-4 InputSt'>
           <input name="Title" type="text" placeholder="Title" className="input input-bordered input-primary w-full max-w-xs" required/>
           <input name="Photourl"  type="text" placeholder="PhotoUrl" className="input input-bordered input-primary w-full max-w-xs" required/>
           <input name="Description" type="text" placeholder="Description" className="input input-bordered input-primary w-full max-w-xs" required/>
           <input name="Price" type="text" placeholder="Price" className="input input-bordered input-primary w-full max-w-xs" required/>
            </div>
            <input className='btn btn-outline btn-secondary btnst' type="submit" value="Submit"></input>
            </Form>
       
        </div>
        
    );
};

export default AddService;