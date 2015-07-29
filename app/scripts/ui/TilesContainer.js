var Tile = require('./Tile');

export default class TilesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [
        { name: 'Tile 1' },
        { name: 'Tile 2' },
        { name: 'Tile 3' },
        { name: 'Tile 4' }
      ]
    }
  }

  render() {
    let tilesComponents = [];
    for(var i = 0; i < this.state.tiles.length; i++) {
      tilesComponents.push(
        <Tile
          // these get passed as props to each tile
          tile={this.state.tiles[i]}
          key={i}
        />
      );
    }
    return(
      <div className="tilesContainer">
        {tilesComponents}
      </div>
    );
  }
}
