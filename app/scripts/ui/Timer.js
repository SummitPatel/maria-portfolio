'use strict';

var React = require('react');

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.inteval);
  }

  tick() {
    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
  }

  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}
