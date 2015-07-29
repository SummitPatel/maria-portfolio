export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // tile prop is inherited from parent TilesContainer
      <div className="tile">{this.props.tile.name}</div>
    );
  }
}
