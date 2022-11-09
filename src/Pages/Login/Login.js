import React, { useContext } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/loginpic.jpg'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);
    const HandleLogin= event =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      login(email, password)
      .then(result => {
          const user = result.user;
          console.log(user);
          form.reset();
          navigate('/')
      })
      .catch(error => console.error(error))
  }
    return (
        <div className='rounded-lg'>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold ml-4 mb-4">Login now!</h1>
      <img className='loginImg rounded-lg' src={logo}></img>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <Form onSubmit={HandleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered"  required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-primary" type="submit">Login</button>
        </div>
      </Form>
      <p className='font-bold pl-4 pb-4' >New to Lens Queen? <Link to="/singup">Sing Up</Link></p>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;