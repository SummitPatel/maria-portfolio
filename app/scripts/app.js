'use strict';

var React = window.React = require('react');
var mountNode = document.getElementById('app');

var TilesContainer = require('./ui/TilesContainer');

var App = React.createClass({
  displayName: 'App',
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <TilesContainer />
      </div>
    );
  }
});


React.render(<App />, mountNode);

