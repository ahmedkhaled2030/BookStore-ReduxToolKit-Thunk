import React, { Fragment} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import './Header.css';
import {login} from '../store/authSlice'


const Header = () => {
  const dispatch = useDispatch();
 const {isLoggedIn} = useSelector((state) => state.auth)

  const {error}  = useSelector((state)=> state.books)
  return (
    <Fragment>

      {error && 
      
        (
          <div className="alert alert-danger" role="alert">
 {error}
</div>
        )}
      
      <div className='navbar' >
      <span className='navbar-brand h1 ' style={{'color':'white'}}>My Books</span>

      <button type="button" className="btn btn-danger" onClick={() => dispatch(login(!isLoggedIn))}>{isLoggedIn ? 'logout': 'login'}</button>
    </div>
    

      
    </Fragment>


  );
};

export default Header;
