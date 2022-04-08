import React from 'react'
import {slide as Menu} from 'react-burger-menu';
import './sidebar.css'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {signOut} from '../../Controllers/Redux/authSlice'


export default ()=>{
    const dispatch = useDispatch();
    const {auth} = useSelector(state=>state)


    function SignOut(){
        dispatch(signOut());
    }
    
    return (
        <Menu>
            <Link className='nav-link' to="/"><h1 className='brand'>Bug Tracker</h1></Link>
            
            <a className="menu-item" href="/">
        Dashboard
      </a>
      <a className="menu-item" href="/viewbugs">
        View Bugs
      </a>
                {auth.admin &&<a className="menu-item" href="/createbugs">
        Create Bugs
      </a>}

            <button className='nav-link logout' onClick={SignOut}>Logout</button>
       
        </Menu>
    )
}
