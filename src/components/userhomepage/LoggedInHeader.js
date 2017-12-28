import React from 'react';
import { SideNav, SideNavItem, Button } from 'react-materialize';
import 'materialize-css';


const LoggedInHeader = () => (
  <SideNav
    trigger={<div id="side-nav-button"> <img id="poker-image-nav" src="https://s5.postimg.org/i04xr7s53/three-bar.png" alt="Navigation Icon" class="hamburger" /></div>}
    options={{ closeOnClick: true }}
    >
    <SideNavItem userView
      user={{
        background: 'https://s5.postimg.org/hah1u78s7/jaer.png'
      }}
    />
    <h1 id="user-view-text">FootballStar</h1>
    <SideNavItem divider />
    <div id="red-text">
    <SideNavItem subheader>Seattle, WA Vol 1.</SideNavItem>
    <SideNavItem waves href='#!first'>Home</SideNavItem>
    <SideNavItem waves href='#!second'>News</SideNavItem>
    <SideNavItem waves href='#!third'>Matches</SideNavItem>
    <SideNavItem waves href='#!fourth'>Players</SideNavItem>
    <SideNavItem waves href='#!fifth'>JAER</SideNavItem>
    <SideNavItem waves href='#!sixth'>Logout</SideNavItem>
    </div>
  </SideNav>

  );


export default LoggedInHeader;
