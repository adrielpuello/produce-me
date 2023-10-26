import React, { useState } from "react";
import { signOut } from 'firebase/auth';
import { BiHomeAlt, BiMusic, BiLogOut } from 'react-icons/bi'

const Navbar = ({ auth, setUser, user, setPage }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const changePage = () => {
      setPage('landing page');
    }

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };

    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            console.log('the user signed out');
            setUser(null);
            console.log(user);
        })
        .catch((err) => {
            console.log(err.message);
        });
    };


  return (
    <div
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul>
        <li>{isExpanded ? <button className="navbar-button" onClick={changePage}><BiHomeAlt/> Home</button> : <button><BiHomeAlt/></button>}</li>
        {user ? <li>{isExpanded ? <button className="navbar-button"><BiMusic/> Artists</button> : <button><BiMusic/></button>}</li> : <></>}
        {user ? <li>{isExpanded ? <button className="navbar-button" onClick={handleLogout}><BiLogOut/> Log Out</button> : <button onClick={handleLogout}><BiLogOut/></button>}</li> : <></>}
      </ul>
    </div>
  );
};

export default Navbar;