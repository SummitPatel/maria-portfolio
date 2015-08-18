export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let body = this.props.tile.body;
    return (
      // tile prop is inherited from parent TilesContainer
      <div className="tile">
        <div className="content">
          <h5>{this.props.tile.name}</h5>
          <p>{body}</p>
          <ul>
            <li>{this.props.tile.email}</li>
            <li>{this.props.tile.linkedin}</li>
            <li>{this.props.tile.behance}</li>
          </ul>
          <img src={this.props.tile.imageSrc} />
        </div>
      </div>
    );
  }
}
