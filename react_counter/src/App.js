import React from 'react';


class App extends React.Component {
  incrementCount () {this.setstate({
    count: this.state.count +1})};


    state = {
      count: 1

    }
  

  render() {
    return (
      <div className="App">

        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <div>
          <button onClick={this.incrementCount}>+</button>
        </div>

      </div>
    );
  }
}

export default App;
