import React, { Component } from 'react';
import Card from '../components/Card';
import Win from '../components/Win';
import './game.css';

class Board extends Component {
  state = {
    board: [],
    height: 4,
    isWin: false,
  };

  componentDidMount() {
    this.createBoard();
    this.setNewValues();
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
      const isWin = this.isWin(swappedBoard);
      console.log(isWin);
      
      this.setState({
        board: swappedBoard,
        isWin: isWin,
      });
    }
  };

  swap = (cardOne, cardTwo) => {
    const boardCopy = [...this.state.board];

    const tempPos = { ...cardOne.position };
    cardOne.position = cardTwo.position;
    cardTwo.position = tempPos;

    boardCopy[cardOne.position.x][cardOne.position.y] = cardOne;
    boardCopy[cardTwo.position.x][cardTwo.position.y] = cardTwo;

    return boardCopy;
  };

  getEmptyNeighbor = (neighbors) => {
    for (let i = 0; i < neighbors.length; i++) {
      if (neighbors[i].value === this.state.height * this.state.height - 1) {
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
  };

  shuffle = () => {
    const shuffled = this.createValueArray();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  convertToMatrix = () => {
    const shuffledArray = this.shuffle();

    const shuffledMatrix = [];

    while (shuffledArray.length) {
      shuffledMatrix.push(shuffledArray.splice(0, this.state.height));
    }

    return shuffledMatrix;
  };

  setNewValues = () => {
    const shuffledMatrix = this.convertToMatrix();

    const shuffledBoard = [];
    for (let i = 0; i < shuffledMatrix.length; i++) {
      const row = [];
      for (let j = 0; j < shuffledMatrix[i].length; j++) {
        row.push({
          value: shuffledMatrix[i][j],
          position: {
            x: i,
            y: j,
          },
        });
      }
      shuffledBoard.push(row);
    }

    this.setState({
      board: shuffledBoard,
    });
  };

  convertToSimpleArr = (swappedBoard) => {
    const simpleArray = [].concat(...swappedBoard);
    console.log(simpleArray);

    return simpleArray;
  };

  isWin = (swappedBoard) => {
    const simpleArray = this.convertToSimpleArr(swappedBoard);

    console.log('simpleArray', simpleArray);

    for (let i = 0; i < simpleArray.length - 1; i++) {
      if (simpleArray[i].value !== simpleArray[i + 1].value - 1) {
        this.changeBoardClassName();
        return false;
      }
    }
    this.changeBoardClassName();
    return true;
  };

  changeBoardClassName = (state) => {
    return state ? 'game board-transparent' : 'game board-visible';
  }

  render() {
    return (
      <div className="board-container">
      <Win isWin={this.state.isWin} />
        <div className={this.changeBoardClassName(this.state.isWin)}>
          {this.state.board.map((row, i) => (
            <div key={i}>
              {row.map((card, j) => (
                <Card
                key={card.value}
                value={card.value}
                position={card.position}
                onClick={this.handleClick}
                empty={
                  this.state.board[i][j].value ===
                  this.state.height * this.state.height - 1
                }
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
