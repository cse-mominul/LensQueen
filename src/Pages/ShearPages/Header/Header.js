import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/lensqueenlogo.png'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';



const Header = () => {
  const {user,logOut} = useContext(AuthContext);
    const menuitems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to='/service'>Services</Link></li>
   <li><Link to='/addservice'>Add Service</Link></li>
    <li><Link to='/review'>Review</Link></li>
    <li><Link to="/blog">Blog</Link></li>

    </>
     const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.error(error))
  }
    return (
        <div>
           <div className="navbar pb-5 pt-6 text-primary-content bg-primary bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuitems}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl"><img className='w-12 mr-2' src={logo}></img> <p>  Lens Queen</p></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuitems}
    </ul>
  </div>
  <div className="navbar-end">
  
   
  {
                                user?.uid ?
                                    <>
                                   
                                    <button className='btn' variant="light" onClick={handleLogOut}>Log out</button>
                                    <img className='rounded-full ml-4 w-20' src={user?.photoURL}  alt=''></img>
                                    </>
                                    :
                                    <>
                                        <Link className='btn mr-2' to='/login'>Login</Link>
                                        <Link className='btn' to='/singup'>SingUp</Link>
                                    </>
                            }

  </div>
</div>
        </div>
    );
};

export default Header;