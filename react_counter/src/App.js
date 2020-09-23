import React, { Component } from 'react';
import '../src/App.js';


class App extends Reac.Component {
  constructor() {
    super()
  state= {
    Count: 1,
  
  }
}
  render() {
    return (
      <div className="App">

        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <div>
                <Button onClick={this.increment.Count}>+</Button>
            </div>

      </div>
    );
  }


  export default App;
