import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import '../../assets/css/sidenav.css';
import LogoMain from '../../assets/logos/logo-main.png';
import Floral from '../../assets/images/floral.png';

const SideNav = () => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;

  const onLogout = () => {
    logout();
  };
  return (
    <div class='sidebar'>
      <div class='dashboard' align="center">
        <div class='dash-items'>
          <Link to='/home'> 
            <img class="logo-dashboard" src={LogoMain}></img>
          </Link>
        </div>
        <div>
          <img className="floral" src={Floral}></img>
        </div>
        <div class='dash-item'>
          <Link to='/home'>HOME</Link>
        </div>
        <div class='dash-item'>
          <Link to='/financehelp'>FINANCIAL HELP</Link>
        </div>
        <div class='dash-item'>
          <Link to='/categories'>CONNECT WITH PEERS</Link>
        </div>
        <div class='dash-item'>
          <Link to='/shgroups'>SELF HELP GROUPS</Link>
        </div>
        <div class='dash-item'>
          <Link to='/settings'>SETTINGS</Link>
        </div>
        <div class='dash-item'>
          <Link onClick={onLogout} to='/'>LOGOUT</Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;