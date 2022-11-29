import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {    
      square: Array(9).fill(null),
      count: 0
    }
    this.win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
  }

  Winner = event => {
    let block_player = (this.state.count % 2 === 0) ? 'X' : 'O';
    for(let i = 0; i < 8; i++){
      let line = this.win[i];
      if(this.state.square[line[0]] === block_player && this.state.square[line[1]] === block_player && this.state.square[line[2]] === block_player){
        alert('Хорош');
        setTimeout(()=>{this.setState({square:Array(9).fill(null)})}, 100);
        setTimeout(()=>{this.setState({count: 0})}, 100);
      }
    }

  }

  clickHad = event => {
    let data = event.target.getAttribute("data");
    let currentSquare = this.state.square;
    if(currentSquare[data] === null){
    currentSquare[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
    this.setState({count: this.state.count + 1})
    this.setState({square:currentSquare})
    } else {
      alert('Ебанутый?')
    }
    console.log(this.state.square);
    this.Winner();
  }
  
  render() {
    return (
          <div className="main_block">
              <div className="main_pol">
                  <div className="main_players">
                      <div className='block' onClick={this.clickHad} data="0">{this.state.square[0]}</div>
                      <div className='block' onClick={this.clickHad} data="1">{this.state.square[1]}</div>
                      <div className='block' onClick={this.clickHad} data="2">{this.state.square[2]}</div>
                      <div className='block' onClick={this.clickHad} data="3">{this.state.square[3]}</div>
                      <div className='block' onClick={this.clickHad} data="4">{this.state.square[4]}</div>
                      <div className='block' onClick={this.clickHad} data="5">{this.state.square[5]}</div>
                      <div className='block' onClick={this.clickHad} data="6">{this.state.square[6]}</div>
                      <div className='block' onClick={this.clickHad} data="7">{this.state.square[7]}</div>
                      <div className='block' onClick={this.clickHad} data="8">{this.state.square[8]}</div>
                  </div>
              </div>
          </div>
    );
  }
}

export default App;