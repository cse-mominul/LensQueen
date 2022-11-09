import React from 'react';
import me from '../../Assets/gift-habeshaw-b5oaW2R5iks-unsplash.jpg'
const About = () => {
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
           <div className="hero-content flex-col lg:flex-row-reverse">
             <img src={me} className="max-w-sm rounded-lg shadow-2xl" />
             <div>
               <h1 className="text-5xl font-bold">All About Me!</h1>
               <p className="py-6">Communicating with clients to set up a time and place for a photoshoot. Maintaining and managing photography equipment. Editing photos. Submitting photos to appropriate persons.</p>
               <button className="btn btn-primary">Lets Tlak</button>
             </div>
           </div>
         </div>

        </div>
     
    );
};

export default About;