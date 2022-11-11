import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Serviceall = () => {
    const [services, setServices] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/ser')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4'>
            {
            services.map(service => <SingleCard
            key={service._id}
            service={service}
            ></SingleCard>)
            }
            
        </div>
    );
};

export default Serviceall;