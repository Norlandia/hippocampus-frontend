import React, { Component } from 'react';
import Card from '../components/Card';

class Board extends Component {
  state = {
    board: [
      [
        {
          value: 0,
        },
        {
          value: 1,
        },
      ],
      [
        {
          value: 2,
        },
        {
          value: 3,
        },
      ],
    ],
  };

  render() {
    return (
      <div>
        {this.state.board.map((row, i) => (
          <div key={i}>
            {row.map((card, j) => (
              <Card key={card.value} value={card.value}/>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board;
