'use strict';

require('rc-accordion/assets/index.css');
var Accordion = require('rc-accordion');
var Pannel = Accordion.Pannel;
var React = require('react');


var text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

var Test = React.createClass({
  getItems() {
    var items = [];
    for (var i = 0, len = 3; i < len; i++) {
      let props = {
        header: 'This is panel header ' + i,
        key: i
      };

      items.push(
        <Pannel {...props}>
          <p>{text.repeat(parseInt(Math.random() * 10) + 1)}</p>
        </Pannel>
      );
    }

    return items;
  },

  reRender() {
    this.setState({
      time: 1
    });
  },

  render() {
    return <div style={{margin: 20, width: 400}}>
      <button onClick={this.reRender}>reRender</button><br/><br/>
      <Accordion>{this.getItems()}</Accordion>
    </div>;
  }
});

React.render(<Test/>, document.getElementById('__react-content'));
