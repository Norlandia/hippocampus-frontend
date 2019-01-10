import React, { Component } from 'react';
import Card from '../components/Card';
import '../game.css';

class Board extends Component {
  state = {
    board: [],
    // position: {},
  };

  componentDidMount() {
    this.createBoard();
  }

  createBoard = () => {
    const board = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push({
          value: i * 3 + j,
          position: {
            x: i,
            y: j,
          },
        });
      }
      board.push(row);
    }

    this.setState({
      board: board,
    });
  };

  handleClick = (clickedPosition, cardValue) => {
    console.log(clickedPosition);

    const neighbors = this.getAdjacents(clickedPosition);

    console.log('neighbor', neighbors);

    const empty = this.getEmptyNeighbor(neighbors);

    if (empty) {
      const clickedCard = this.state.board[clickedPosition.x][
        clickedPosition.y
      ];
      const swappedBoard = this.swap(empty, clickedCard);
      this.setState({
        board: swappedBoard,
      });
    }
  };

  swap = (cardOne, cardTwo) => {
    const boardCopy = [...this.state.board];

    const tempPos = {...cardOne.position};
    cardOne.position = cardTwo.position;
    cardTwo.position = tempPos;

    boardCopy[cardOne.position.x][cardOne.position.y] = cardOne;
    boardCopy[cardTwo.position.x][cardTwo.position.y] = cardTwo;

    return boardCopy;
  };

  getEmptyNeighbor = (neighbors) => {
    for (let i = 0; i < neighbors.length; i++) {
      if (neighbors[i].value === 8) {
        return neighbors[i];
      }
    }
    return null;
  };

  getAdjacents = (clickedPosition) => {
    const adjacentCards = [];

    for (let i = 0; i < this.state.board.length; i++) {
      for (let j = 0; j < this.state.board[i].length; j++) {
        const currPos = this.state.board[i][j].position;
        if (
          this.arePositionsEqual(currPos, {
            x: clickedPosition.x,
            y: clickedPosition.y + 1,
          }) ||
          this.arePositionsEqual(currPos, {
            x: clickedPosition.x - 1,
            y: clickedPosition.y,
          }) ||
          this.arePositionsEqual(currPos, {
            x: clickedPosition.x + 1,
            y: clickedPosition.y,
          }) ||
          this.arePositionsEqual(currPos, {
            x: clickedPosition.x,
            y: clickedPosition.y - 1,
          })
        ) {
          adjacentCards.push(this.state.board[i][j]);
        }
      }
    }
    return adjacentCards;
  };

  arePositionsEqual = (pos1, pos2) => {
    return Object.keys(pos1).reduce(
      (prev, xy) => prev && pos1[xy] === pos2[xy],
      true
    );
  };

  render() {
    return (
      <div>
        {this.state.board.map((row, i) => (
          <div key={i}>
            {row.map((card, j) => (
              <Card
                key={card.value}
                value={card.value}
                position={card.position}
                onClick={this.handleClick}
                empty={this.state.board[i][j].value === 8}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board;
