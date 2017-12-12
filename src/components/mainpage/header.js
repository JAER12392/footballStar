import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => (
  <div>
    <nav id="head-nav">
    <div id="quote-center">
    <img id="poker" src={"https://s5.postimg.org/70ejjptvb/jaer.png"} />
    <div id="nav-quote">
     <p>Put your heart, mind, and soul into even your smallest acts.</p>
     <p>This is the secret of success.</p>
     </div>
    <div id="buttons">
        <ul><Button className="demo-button" bsSize="xsmall"  bsStyle="danger">TryfootballStar</Button></ul>
        <ul><Button className="login-button" bsSize="xsmall"  bsStyle="danger">Login</Button></ul>
      </div>
    </div>
    </nav>
  </div>

  );

  export default Header;
