import React, { Component } from 'react';
import Card from '../components/Card';

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

  render() {
    return (
      <div>
        {this.state.board.map((row, i) => (
          <div key={i}>
            {row.map((card, j) => (
              <Card key={card.value} value={card.value} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board;
