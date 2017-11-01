import React from 'react';
import { Card, CardTitle } from 'react-materialize';


const MainCardTwo = ({}) => (
  <div className="mainCardTitle">
  <Card header={<CardTitle reveal image={"./images/ronaldo.jpg"} />}
      title="Cristiano Ronaldo wins Fifa Player of the Year 2017"
      reveal={<p>Cristiano Ronaldo will be hoping to be named Best FIFA Men's Player for the second year running after being included among the nominations for the 2017 award. Real Madrid star Ronaldo, who won the inaugural award last year, is one of 24 players to have been nominated for the accolade.
      The award, which covers the period of Nov. 20, 2016, to July 2, 2017, is voted for by national team coaches, captains, selected media and fans and will be handed out at the Best FIFA Football Awards ceremony on Oct. 23 in London.</p>}>
      <p><a href="#">This is a link</a></p>
  </Card>
      </div>

);

export default MainCardTwo;
