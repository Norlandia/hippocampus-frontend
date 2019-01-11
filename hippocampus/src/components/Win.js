import React from 'react';

const Win = (props) => {

  const winScreen = (isWin) => {
    return isWin ? 'win visible' : 'win transparent'; 
  }

  return (
    <div className={winScreen(props.isWin)}>
      <h1>You Rock!</h1>
    </div>
  );
}
 
export default Win;
