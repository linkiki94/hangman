import React,{Componet} from 'react';
import ReactDOM from 'react-dom';
import socketIOClient from "socket.io-client";



class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

class Word extends React.Component {
  render() {
    return (
      <div
      > 
        {this.props.value}
      </div>
    );
  }
}


class Board extends React.Component {
  
  constructor(props) {
    super(props);
 
    this.state = {
      squares: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      is:Array(5).fill('_'),
      count:0,
      count_game:0,
      flag_word:0,
    };
  }

  handleClick(i) {
    
    const define=['A','D','A','C','B'];
    const squares = this.state.squares.slice();
    squares[i] = ' ';
    let flag=0;
 
    for(let j=0;j<5;j++){
     if(this.state.squares[i]==define[j]){
       this.state.is[j]=define[j];
       this.state.count=this.state.count+1;
       flag=1;
     }
    }
  if(flag==0){
    this.state.count_game=this.state.count_game+1;
  }

   if(this.state.flag_word==1||this.state.count_game>5)
    {return;}
   if(this.state.count==5){
      this.state.flag_word=1;
    }
    this.setState({
        squares: squares,
        is:this.state.is,
        count:this.state.count,
        count_game:this.state.count_game,
        flag_word:this.state.flag_word,
     });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
   );
  }
 renderWord(i) {
    return (
      <Word
        value={this.state.is[i]}
      />
    );
   }
  render() {
    const status = 'Hangman';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}{this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}{this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
        <div className="board-row">
          {this.renderSquare(9)}{this.renderSquare(10)}{this.renderSquare(11)}{this.renderSquare(12)}{this.renderSquare(13)}{this.renderSquare(14)}{this.renderSquare(15)}{this.renderSquare(16)}{this.renderSquare(17)}
        </div>
        <div className="board-row">
          {this.renderSquare(18)}{this.renderSquare(19)}{this.renderSquare(20)}{this.renderSquare(21)}{this.renderSquare(22)}{this.renderSquare(23)}{this.renderSquare(24)}{this.renderSquare(25)}
        </div>
        <div>
          {this.renderWord(0)}{this.renderWord(1)}{this.renderWord(2)}{this.renderWord(3)}{this.renderWord(4)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  
  <Game />,
  document.getElementById('root')
);


