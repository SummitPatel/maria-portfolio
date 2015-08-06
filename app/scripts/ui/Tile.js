export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // tile prop is inherited from parent TilesContainer
      <div className="tile">
        <div className="content">
          <h5>{this.props.tile.name}</h5>
          <p>{this.props.tile.body}</p>
          <img src={this.props.tile.imageSrc} />
        </div>
      </div>
    );
  }
}
