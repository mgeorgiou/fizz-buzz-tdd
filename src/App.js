import React from 'react';
import './App.css';
import Solution from './Solution';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h1>Fizz Buzz TDD</h1>
        <form>
          <input className='Input-font'
            name='input'
            type='text'
            placeholder="Input"
            value={this.state.value}
            onChange={this.handleChange}
             />
        </form>
        <h2><Solution input={this.state.value} /></h2>
        {/* <h2>{this.state.value}</h2> */}
      </header>
    </div>
    )
  }
}

export default App 