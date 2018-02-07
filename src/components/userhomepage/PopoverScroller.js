import React from 'react';
import { Popover, ButtonToolbar, OverlayTrigger, Button} from 'react-bootstrap';


const popoverLeft = (
  <Popover id="popover-positioned-scrolling-left" title="Popover left">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

const popoverTop = (
  <Popover id="popover-positioned-scrolling-top" title="Popover top">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

const popoverBottom = (
  <Popover id="popover-positioned-scrolling-bottom" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

const popoverRight = (
  <Popover id="popover-positioned-scrolling-right" title="Popover right">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

class PopoverScroller extends React.Component {
  render() {
    return (
      <ButtonToolbar style={{ padding: '100px 0' }}>
        <OverlayTrigger
          container={this}
          trigger="click"
          placement="left"
          overlay={popoverLeft}
        >
          <Button>Like Football?</Button>
        </OverlayTrigger>
        <OverlayTrigger
          container={this}
          trigger="click"
          placement="top"
          overlay={popoverTop}
        >
          <Button>Of Course You Do</Button>
        </OverlayTrigger>
        <OverlayTrigger
          container={this}
          trigger="click"
          placement="bottom"
          overlay={popoverBottom}
        >
          <Button>Am, I right?</Button>
        </OverlayTrigger>
        <OverlayTrigger
          container={this}
          trigger="click"
          placement="right"
          overlay={popoverRight}
        >
          <Button>Click Me Now!</Button>
        </OverlayTrigger>
      </ButtonToolbar>
    );
  }
}

export default PopoverScroller;
