import React from 'react';
import { Row, Col, CardPanel } from 'react-materialize';

const SubCardTwo = ({}) => (
  <Row>
      <Col s={12} m={7}>
          <div className="world">
            La Liga
          </div>
          <CardPanel className="blue lighten-4 black-text">
              <span>The Ballon d'Or trophy won by Cristiano Ronaldo in 2013 has been auctioned off for £600,000 in benefit of the Make-A-Wish Foundation charity. Ronaldo beat out Lionel Messi to the award after a strong end to the year, lifting it for the second time in his career. And on Wednesday the original replica Ballon d'Or donated by the Real Madrid star was sold to an anonymous donor at the Foundation's 'Art of Wishes' auction at the Dorchester Hotel, London. </span>
          </CardPanel>
          <CardPanel className="blue lighten-4 black-text">
              <span>Ryan Giggs has advised compatriot Gareth Bale that he must start making changes after continuously struggling with injuries. Real Madrid star Bale was restricted to 19 La Liga appearances in an injury interrupted 2016-17 campaign, having only played 23 in the previous season. Now, a calf problem suffered in an impressive performance against Borussia Dortmund last week has ruled him out of Wales' crucial World Cup qualifiers against Georgia and the Republic of Ireland.</span>
          </CardPanel>
      </Col>

  </Row>
  );

  export default SubCardTwo;
