import React, { useState } from "react";
import { signOut } from 'firebase/auth';
import { BiHomeAlt, BiMusic, BiLogOut } from 'react-icons/bi'

const Navbar = ({ auth, setUser, user, setPage }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toHome = () => {
      setPage('landing page');
    }

    const toArtists = () => {
      setPage('artists');
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
            setPage('landing page');
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
        <li>{isExpanded ? <button className="navbar-button" onClick={toHome}><BiHomeAlt/> Home</button> : <button><BiHomeAlt/></button>}</li>
        {user ? <li>{isExpanded ? <button className="navbar-button" onClick={toArtists}><BiMusic/> Artists</button> : <button><BiMusic/></button>}</li> : <></>}
        {user ? <li>{isExpanded ? <button className="navbar-button" onClick={handleLogout}><BiLogOut/> Log Out</button> : <button onClick={handleLogout}><BiLogOut/></button>}</li> : <></>}
      </ul>
    </div>
  );
};

export default Navbar;