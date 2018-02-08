import React from 'react';
import PlayerStats from './PlayerStats.js';

var playerObj = {
  link1: "https://s5.postimg.org/tnei67vzr/914658136.jpg",
  link2: "https://s5.postimg.org/5xp2h0abr/messi-player.jpg",
  link3: "https://s5.postimg.org/w6076fzl3/neymarjr-image.jpg",
  link4: "https://s5.postimg.org/fv03ahac7/marcelo-image.jpg",
  link5: "https://s5.postimg.org/uqymi5lrr/kevin-image.jpg",
  link6: "https://s5.postimg.org/829fio4ev/coutinho-image.jpg",
  link7: "https://s5.postimg.org/k5er5o2g7/ramos-image.jpg",
  link8: "https://s5.postimg.org/4761fkq8n/modric-image.jpg",
  link9: "https://s5.postimg.org/v4zyhcsw7/james-image.jpg",
  link10: "https://s5.postimg.org/np0ovkkmf/buffon-image.jpg"
}

var playerDemographics = {
    position: ['Forward', 'Forward', 'Forward', 'Defender', 'Midfielder', 'Midfielder', 'Defender', 'Midfielder', 'Midfielder', 'GoalKeeper'],
    height: [1.84, 1.69, 1.75, 1.75, 1.81, 1.71, 1.83, 1.75, 1.80, 1.91],
    weight: [174, 148, 141, 161, 150, 150, 161, 148, 172, 183] ,
    age: [33, 30, 26, 29, 26, 25, 31, 32, 26, 40] ,
    dob: ['02/05/1985', '06/24/1987', '02/05/1992', '05/12/1988', '06/28/1991', '06/12/1992', '03/30/1986', '09/09/1985', '07/12/1991', '01/28/1978']
}

var playerStats = {
  apppearances: [505, 404, 242, 340, 271, 217, 418, 418, 261, 667] ,
  goals: [380, 269, 140, 29, 59, 50, 52, 61, 82, 0],
  assists: [203, 244, 178, 150, 253, 144, 312, 190, 2] ,
  country: ['Portugal', 'Argentina', 'Brazil', 'Brazil', 'Germany', 'Spain', 'Croatia', 'Colombia', 'Italy']
}

var playerAwards = {
  playerofyear: [5, 5, 0, 0, 0, 0, 0, 0, 0, 5],
  goldenboot: [4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  champions: [4, 4, 1, 3, 0, 0, 3, 3, 2, 1],
  international: [1, 0, 0, 0, 0, 0, 3, 0, 0, 1]
}

class PlayerPage extends React.Component {
  render() {
    return (
      <div>
          <PlayerStats />
      </div>

      );
  }
}

export default PlayerPage;
