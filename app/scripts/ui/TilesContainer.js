var Tile = require('./Tile');

export default class TilesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="tilesContainer">
        <Tile />
        <Tile />
      </div>
    );
  }
}
