import React from 'react';

const ScoreCard = (props) => {
  const { selected, number } = props;

  return (
    <div className={`sc-card ${selected ? 'sc-active' : ''}`}>{number}</div>
  );
};

export default ScoreCard;
