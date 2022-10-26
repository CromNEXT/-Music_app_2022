import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('In to the Arena');
    
  }
componentDidMount(){
  console.log("DidMount");
}  
componentDidUpdate(){
  console.log('FARADOX');
}

  state ={
    count: 0,

  };

  add = () => {
    console.log('add');
    this.setState({count: this.state.count+1});
  };

  minus = () => {
    console.log('minus');
    this.setState(current => ({count: current.count-1}));
  };S

  Restart = () => {
    console.log('Restart');
    this.setState({count:0});
  };

  render(){
    console.log('render');
    return (
    <div>
      <h1> Satan's starlight {this.state.count}</h1>
      <button onClick={this.add}> Add </button>
      <button onClick={this.minus}> Minus </button>
      <button onClick={this.Restart}> Restart </button>
    </div>
    );
  }

}

export default App;
