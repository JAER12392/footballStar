import React from 'react';
import { Button, Collapse, Well, Popover} from 'react-bootstrap';
import { Col, Card } from 'react-materialize';
import 'materialize-css';



class CollapseButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div id="collapse-cards">
        <div className="hvr-shutter-in-vertical">
        <div  className="first-drop-card"  onClick={() => this.setState({ open: !this.state.open })}>
        <Col l={4} m={6} s={12}>
            <Card className="red" offset="l1" textClassName='white-text' title='Coutinho thrilled to live with idols at Barcelona after move from Liverpool'>
                 Philippe Coutinho says he is living the dream after completing his move to Barcelona.The finishing touches have been put on his British record transfer from Liverpool, which could be worth up to £142 million, and the Spanish club will parade him at the Nou Camp on Monday.
            </Card>
        </Col>
        </div>
        </div>
        <Collapse in={this.state.open}>
             <div>
             <div className="hvr-sweep-to-left">
             <div className="second-drop-card">
              <Col l={4} m={6} s={12}>
                  <Card className="red" offset="l1" textClassName='white-text' title='Real Madrid boss Zinedine Zidane angry after team drops points vs. Celta'>
                    Real Madrid coach Zinedine Zidane admitted to being angry with his teams performance after they dropped two more points in Sunday evenings 2-2 draw at Celta Vigo to slip even further behind runaway La Liga leaders Barcelona.
                  </Card>
              </Col>
              </div>
              </div>
              <div className="hvr-radial-out">
              <Col l={4} m={6} s={12}>
                  <Card className="red" offset="l1" textClassName='white-text' title='Monterrey coach confirms Efrain Juarez is considering MLS move'>
                      Monterrey defender Efrain Juarez is nearing a move to Major League Soccer, according to Rayados coach Antonio Mohamed. Juarez was left out of the Monterrey squad for Saturday's 1-1 draw with Morelia in the 2018 Clausura season opener in Estadio BBVA Bancomer and Mohamed said it was because the player is set to leave the club
                  </Card>
              </Col>
              </div>
              <div className="hvr-rectangle-in">
              <Col l={4} m={6} s={12}>
                  <Card className="red" offset="l1" textClassName='white-text' title='Antoine Griezmanns wage demands could rule out Manchester United move'>
                      Just as he was in the summer, Antoine Griezmann is being linked with Manchester United -- but they will have to dig very deep to sign him from Atletico Madrid, according to the Sun. It reports that Griezmann "will demand a staggering £400,000 a week to snub Barcelona and join United."
                  </Card>
              </Col>
              </div>
              <div className="hvr-sweep-to-top">
              <Col l={4} m={6} s={12}>
                  <Card className="red" offset="l1" textClassName='white-text' title='Jose Mourinhos Manchester United future: Does boss deserve a deal?'>
                    Jose Mourinho's Manchester United future is uncertain amid conflicting reports over whether he will remain manager come the end of the season. Mourinho has cut an increasingly agitated figure in recent weeks after seeing bitter rival Pep Guardiola mastermind Manchester City's rise to the top of the Premier League by 15 points.
                  </Card>
              </Col>
              </div>
              </div>
        </Collapse>
      </div>
    );
  }
}

export default CollapseButton;
