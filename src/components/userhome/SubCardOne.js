import React from 'react';
import { Row, Col, CardPanel } from 'react-materialize';

const SubCardOne = ({}) => (
  <Row>
      <Col s={12} m={7}>
          <div className="epl">
            English Premier League
            </div>
          <CardPanel className="grey lighten-4 black-text">
              <span>Fernandinho believes Manchester City have the financial might to sign Cristiano Ronaldo and Lionel Messi, but he does not feel such superstars fit into the club’s philosophy. City spent over £200 million in the summer transfer window, signing the likes of Kyle Walker from Tottenham, Bernardo Silva and Benjamin Mendy from Monaco and goalkeeper Ederson from Benfica.</span>
          </CardPanel>
          <CardPanel className="grey lighten-4 black-text">
              <span>So good has De Bruyne been of late that his performance levels and value to his club has been likened to the talismanic presence of Messi at Camp Nou and Cristiano Ronaldo at Real Madrid. Asked by Le Soir how it feels to be placed in such illustrious company, De Bruyne said: “It’s not up to me to say, but it’s nice to hear too. “Beyond that, there’s no point focusing on my individual performance.“In my eyes, City are a very credible title challenger now more than ever as they are winning in the big games.”</span>
          </CardPanel>
      </Col>
  </Row>
  );

  export default SubCardOne;
