'use strict';

var React = require('react');

var Timer = React.createClass({
  displayName: 'Timer',
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});


module.exports = Timer;
