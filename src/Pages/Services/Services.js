import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://lensqueenserver.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-4 mb-4'>
            <div className='text-center'>
            <h2 className="text-5xl font-semibold text-secondary mb-2">My Service</h2>
            <p>A photographer works closely with clients to  capture photos of people, places and things through the use of creativity and technical abilities</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4'>
            {
            services.map(service => <SingleCard
            key={service._id}
            service={service}
            ></SingleCard>)

            }

            </div>
          
        </div>
    );
};

export default Services;
