import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class DrawerUI extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <div className="drawer">
        <RaisedButton
          label="JAER Timeline"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>January 23 1992</MenuItem>
          <MenuItem onClick={this.handleClose}>December 04 1993</MenuItem>
          <MenuItem onClick={this.handleClose}>November 17 1997</MenuItem>
          <MenuItem onClick={this.handleClose}>June 07 1998</MenuItem>
          <MenuItem onClick={this.handleClose}>November 20 1998</MenuItem>
          <MenuItem onClick={this.handleClose}>January 01 2013</MenuItem>
          <MenuItem onClick={this.handleClose}>May 30 2014</MenuItem>
          <MenuItem onClick={this.handleClose}>June 12 2015</MenuItem>
          <MenuItem onClick={this.handleClose}>July 26 2015 </MenuItem>
          <MenuItem onClick={this.handleClose}>May 15 2017</MenuItem>
        </Drawer>
      </div>
    );
  }
}
export default DrawerUI;
