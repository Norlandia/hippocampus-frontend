import React from 'react';

const Card = (props) => {

  const createEmpty = (empty) => {
   return empty ? 'card empty' : 'card';
  }

  return <button className={createEmpty(props.empty)} onClick={props.onClick(props.position, props.value)}>{props.value}</button>;
};

export default Card;
