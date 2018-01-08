import React from 'react';
import { Parallax, Col, Card } from 'react-materialize';
import FaFutbol from 'react-icons/lib/fa/futbol-o';
import FaStar from 'react-icons/lib/fa/star-o';
import 'materialize-css';

const pDisplay = () => (
  <div>
  <Parallax imageSrc="https://s18.postimg.org/b5zwhcyop/color-skyline.jpg" className="grey-text text-darken-3 lighten-3" title='wow'/>
   <div className="section white">
     <div className="row container">
     <div className="caption">
     <h2> The city where it all transpired. </h2>
     <h2> A kid, his ball and his dream. </h2>
     </div>
     <Col l={4} m={6} s={12}>
        <Card className='red' textClassName='white-text' title='Positivity'>
        In order to carry a positive action we must develop here a positive vision. -Dalai Lama
        </Card>
     </Col>
     <Col l={4} m={6} s={12}>
        <Card className='red' textClassName='white-text' title='Determination'>
        The truest wisdom is a resolute determination. -Napoleon Bonaparte
        </Card>
     </Col>
     <Col l={4} m={6} s={12}>
        <Card className='red' textClassName='white-text' title='Heart'>
        Nobody has ever measured, not even poets, how much the heart can hold. -Zelda Fitzgerald
        </Card>
     </Col>

    </div>
   </div>

         <Parallax imageSrc="https://s18.postimg.org/4ls2e3995/red-lights.jpg"/>
<div className="bottom-grey-text">
        <div id="icon-1" style={{color: 'red'}}>
          <FaFutbol size={60} />
          </div>
         <div id="icon-2" style={{color: 'red'}} >
         <FaStar size={60} />
         </div>
        <div className="description-text">
         <p>A football news website that is creativily created to inspire the football youth.</p>
         <p> The Journey of a FootballStar</p>
         </div>
  </div>


  </div>
  );

  export default pDisplay;
