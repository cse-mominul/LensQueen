import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
    <div className='divStyle'>
        <div className='blogStyle'>
        <h1 className='text-center text-secondary text-3xl mt-4 mb-3 font-semibold'>My Blog</h1>
    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
    <div className="collapse-title text-xl font-medium">
    What is Difference between SQL and NoSQL?
  </div>
  <div className="collapse-content"> 
    <p>SQL lets you access and manipulate databases * SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International
    Organization for Standardization (ISO) in 1987 , SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them).
    : NoSQL is a class of DBMs that are non-relational and generally do not use SQL.Is SQL or NoSQL better? NoSQL doesn't support relations between data types. Running queries in NoSQL is doable, but much slower. You have a high transaction application
    </p>
  </div>
</div>
<div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
    <div className="collapse-title text-xl font-medium">
    What is JWT, and how does it work?
  </div>
  <div className="collapse-content"> 
    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
    </p>
  </div>
</div>
<div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
    <div className="collapse-title text-xl font-medium">
    What is the difference between javascript and NodeJS?
  </div>
  <div className="collapse-content"> 
    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
  </div>
</div>
<div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
    <div className="collapse-title text-xl font-medium">
    How does NodeJS handle multiple requests at the same time?
  </div>
  <div className="collapse-content"> 
    <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
  </div>
</div>
    </div>
    </div>
    );
};

export default Blog;