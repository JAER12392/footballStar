import React from 'react';
import { Parallax } from 'react-materialize';
import 'materialize-css';

       // <h2 className="header">Parallax</h2>
       // <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
const pDisplay = () => (
  <div>
  <Parallax imageSrc="https://s5.postimg.org/msda590xz/desertsoccer.jpg"/>
   <div className="section white">
     <div className="row container">
     </div>
   </div>
   <Parallax imageSrc="https://s5.postimg.org/52blk82sn/liverpool.jpg"/>
  </div>
  );

  export default pDisplay;
