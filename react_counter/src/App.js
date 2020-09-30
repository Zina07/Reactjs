import React from 'react';
import Counter from '../src/Components/Counter';


class App extends React.Component {

  constructor() {
    super();
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);

  }

  state = {
    counter: 1

  }
  incrementCount() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

    decrementCount(){
      this.setState({
        counter: this.state.counter - 1
      });
    }



      render() {
        return (
          <div>

            <h1>Counter</h1>
            <h2>{this.state.counter}</h2>
            
              <button onClick={this.incrementCount}>+</button>
              <button onClick={this.decrementCount}>-</button>
            <Counter incrementFn={this.incrementCount} decrementFn = {this.decrementCount} counter={this.state.counter}></Counter>
            

          </div>
        );
      }
    };

    export default App;
