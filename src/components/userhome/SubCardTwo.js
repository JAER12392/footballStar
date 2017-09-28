import React from 'react';
import { Row, Col, CardPanel } from 'react-materialize';

const SubCardTwo = ({}) => (
  <Row>
      <Col s={12} m={7}>
          For a simpler card with less markup, try using a card panel which just has padding and a shadow effect
          <CardPanel className="blue lighten-4 black-text">
              <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
          </CardPanel>
          <CardPanel className="blue lighten-4 black-text">
              <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
          </CardPanel>
      </Col>
  </Row>
  );

  export default SubCardTwo;
