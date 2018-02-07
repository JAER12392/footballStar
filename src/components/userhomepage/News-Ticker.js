import React from 'react';

const links = ["Donovan comes out of retirement and signs with Leon", "Sources: Manchester United fires head coach Jose Mourinho", "United States is out of the World Cup for the first time since 1986", "Sources: Manchester United sign Alexis Sanchez Mkhitaryan joins Arsenal", "  De Bryune signs New Five-Year Deal Manchester City Deal", "Reports emanating from Spain that Kylian Mbappé will be out for 2 months", "  Chivas impressive in Necaxa thrashing but home form still a concern", "United States 5-1 Denmark: USWNT open 2018 in style"];

const linkItem = links.map((link) =>
  <span>{link}</span>
);


class NewsTicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
    <div>
      <div className='red-barrier'>
      <p className="marquee">
      <span>{linkItem}</span>
      </p>
      </div>
      </div>
      );
  }
}


export default NewsTicker;
