import React, { Component } from 'react';
import Card from '../components/Card';
import './game.css';

class Board extends Component {
  state = {
    board: [],
    height: 4,
  };

  componentDidMount() {
    this.createBoard();
  }

  createBoard = () => {
    const board = [];
    for (let i = 0; i < this.state.height; i++) {
      let row = [];
      for (let j = 0; j < this.state.height; j++) {
        row.push({
          value: i * this.state.height + j,
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
    const neighbors = this.getAdjacents(clickedPosition);

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
      if (neighbors[i].value === this.state.height * this.state.height - 1 ) {
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

  createValueArray = () => {
    let valueArray = [];
    for (let i = 0; i < this.state.height * this.state.height; i++) {
      valueArray.push(i);
    }
    return valueArray;
  }

  shuffle = () => {
    const shuffled = this.createValueArray();
    for (let i = shuffled.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // setNewValues = () => {
  //   const shuffledArray
  //   for (let i = 0; i < this.state.board.length; i++) {
  //     for (let j = 0; i < this.state.board.length; j++) {
      
  //     }
  //   }
  // }

  render() {
    console.log(this.shuffle());
    
    return (
      <div className="game">
        {this.state.board.map((row, i) => (
          <div key={i}>
            {row.map((card, j) => (
              <Card
                key={card.value}
                value={card.value}
                position={card.position}
                onClick={this.handleClick}
                empty={this.state.board[i][j].value === this.state.height * this.state.height - 1}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board;
