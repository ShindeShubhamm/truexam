import React from 'react';
import { scores } from '../../misc';
import ScoreCard from './ScoreCard';
import './ScoreCards.scss';

const ScoreCards = (props) => {
  const { id, handleScore, scoreData } = props;

  return (
    <div className="scorecards-wrapper">
      {scores.map((s) => (
        <button
          type="button"
          className="sc-button"
          onClick={() => handleScore(id, s)}
          key={s}
        >
          <ScoreCard number={s} selected={scoreData && s === scoreData.score} />
        </button>
      ))}
    </div>
  );
};

export default ScoreCards;
