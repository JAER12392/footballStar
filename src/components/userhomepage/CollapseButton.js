import React from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';
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
      <div>
        <div onClick={() => this.setState({ open: !this.state.open })}>
        <Col l={4} m={6} s={12}>
            <Card className="red" offset="l1" textClassName='white-text' title='Predicting The 2017-18 Premier League Season'>
              The Premier League is back! Who will win the title in 2017-18? Who will finish in the coveted Champions League spots? Which the three clubs will go down? And who will finish as top scorer and player of the year?
            </Card>
        </Col>
        </div>
        <Collapse in={this.state.open}>
             <div>
              <Col l={4} m={6} s={12}>
                  <Card className="red" offset="l1" textClassName='white-text' title='Predicting The 2017-18 Premier League Season'>
                    The Premier League is back! Who will win the title in 2017-18? Who will finish in the coveted Champions League spots? Which the three clubs will go down? And who will finish as top scorer and player of the year?
                  </Card>
              </Col>
              <Col l={4} m={6} s={12}>
                  <Card className="red" offset="l1" textClassName='white-text' title='Predicting The 2017-18 Premier League Season'>
                    The Premier League is back! Who will win the title in 2017-18? Who will finish in the coveted Champions League spots? Which the three clubs will go down? And who will finish as top scorer and player of the year?
                  </Card>
              </Col>
              <Col l={4} m={6} s={12}>
                  <Card className="red" offset="l1" textClassName='white-text' title='Predicting The 2017-18 Premier League Season'>
                    The Premier League is back! Who will win the title in 2017-18? Who will finish in the coveted Champions League spots? Which the three clubs will go down? And who will finish as top scorer and player of the year?
                  </Card>
              </Col>
              <Col l={4} m={6} s={12}>
                  <Card className="red" offset="l1" textClassName='white-text' title='Predicting The 2017-18 Premier League Season'>
                    The Premier League is back! Who will win the title in 2017-18? Who will finish in the coveted Champions League spots? Which the three clubs will go down? And who will finish as top scorer and player of the year?
                  </Card>
              </Col>
              </div>
        </Collapse>
      </div>
    );
  }
}

export default CollapseButton;
