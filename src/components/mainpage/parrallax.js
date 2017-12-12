import React from 'react';
import { Parallax, Col, Card } from 'react-materialize';
import 'materialize-css';

const pDisplay = () => (
  <div>
  <Parallax imageSrc="https://s18.postimg.org/b5zwhcyop/color-skyline.jpg"/>
   <div className="section white">
     <div className="row container">
     <Col l={4} m={6} s={12}>
        <Card className='red' textClassName='white-text' title='Positivity' actions={[<a href='#'>This is a link</a>]}>
        In order to carry a positive action we must develop here a positive vision. -Dalai Lama
        </Card>
     </Col>
     <Col l={4} m={6} s={12}>
        <Card className='red' textClassName='white-text' title='Determination' actions={[<a href='#'>This is a link</a>]}>
        The truest wisdom is a resolute determination. -Napoleon Bonaparte
        </Card>
     </Col>
     <Col l={4} m={6} s={12}>
        <Card className='red' textClassName='white-text' title='Heart' actions={[<a href='#'>This is a link</a>]}>
        Nobody has ever measured, not even poets, how much the heart can hold. -Zelda Fitzgerald
        </Card>
     </Col>

    </div>
   </div>
   <Parallax imageSrc="https://s18.postimg.org/4ls2e3995/red-lights.jpg"/>
  </div>
  );

  export default pDisplay;
