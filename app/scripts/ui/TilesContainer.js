var Tile = require('./Tile');

export default class TilesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [
        { name: 'Tile 1' },
        { name: 'Tile 2' },
        { name: 'Tile 3' },
        { name: 'Tile 4' },
        { name: 'Tile 5' },
        { name: 'Tile 6' },
        { name: 'about me',
          body: 'I’m so pretty and witty and Ugiaspid ucidusillabori niapeliatiis sequam faciis derei-cabo. Riandipsam diciditatatest eatis estrum rerum eaqui assecuståis renimi, offictem es ea quodigendam ullamet ipsum sequate mporeugiaspiducidus asse-custis renim.',
          imageSrc: 'http://placehold.it/200x200'
        },
        { name: 'contact',
          email: 'email lala@lalapo.com',
          linkedin: 'linkedin',
          behance: 'behance',
        }
      ]
    }
  }

  render() {
    let tiles = [];
    for(var i = 0; i < this.state.tiles.length; i++) {
      tiles.push(
        <Tile
          // these get passed as props to each tile
          tile={this.state.tiles[i]}
          key={i}
        />
      );
    }
    return(
      <div className="tiles-container">
        {tiles}
      </div>
    );
  }
}
