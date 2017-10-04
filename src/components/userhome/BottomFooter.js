import React from 'react';
import { Footer } from 'react-materialize';

const BottomFooter = ({}) => (
  <Footer copyrights="Z/JAER production"
    moreLinks={
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
    }
    links={
      <ul>
        <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
      </ul>
    }
    className='example'
  >
      <h5 className="white-text">footballStar</h5>
      <p className="grey-text text-lighten-4">The daily diary of the footballers dream</p>
  </Footer>
  );

  export default BottomFooter;
