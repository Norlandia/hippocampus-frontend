import React, { Component } from 'react';
import Card from '../components/Card';
import './game.css';

class Board extends Component {
  state = {
    board: [],
  };

  componentDidMount() {
    console.log('Working');
    this.createBoard();
  }

  createBoard = () => {
    const board = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push({ value: i * 3 + j });
      }
      board.push(row);
    }

      this.setState({
        board: board,
      });
  };

  isLast = (indexValue) => {
    return indexValue === 8;
  }

  handleClick = () => {
    
  }

  render() {
    return (
      <div className="game">
        {this.state.board.map((row, i) => (
          <div key={i}>
            {row.map((card, j) => (
              <Card key={card.value} value={card.value} onClick={this.handleClick} empty={this.isLast(i*3+j)}/>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board;
