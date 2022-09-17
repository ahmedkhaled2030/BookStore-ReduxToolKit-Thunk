import React, { Fragment} from 'react';
import { useSelector } from 'react-redux';

const Header = () => {

  const {error}  = useSelector((state)=> state.books)
  return (
    <Fragment>

      {error && 
      
        (
          <div class="alert alert-danger" role="alert">
 {error}
</div>
        )}
      
      <nav className='navbar navbar-dark bg-dark col-lg-12' style={{ 'backgroundColor': 'black', 'display':'flex'}}>
      <span className='navbar-brand  h1 col-lg-9' style={{'color':'white'}}>My Books</span>

      {/* <button className='btn btn-outline-primary col-lg-3' type='submit'>
        Log In
      </button> */}
    </nav>
    

      
    </Fragment>


  );
};

export default Header;
