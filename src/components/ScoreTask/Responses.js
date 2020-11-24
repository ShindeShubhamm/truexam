import React, { useState, useEffect } from 'react';
import ScoreCards from '../common/ScoreCards/ScoreCards';
import { mockData } from '../misc';
import ls from 'local-storage';

const Responses = (props) => {
  const { taskId, setAlert } = props;

  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    setScores(ls.get(`${taskId}Score`) || []);
    setTimeout(() => {
      setResponses(mockData);
      setLoading(false);
    }, 500);
    // eslint-disable-next-line
  }, []);

  const handleScore = (id, score) => {
    const scoresData = ls.get(`${taskId}Score`) || [];
    const prevScore = scoresData.find((s) => s.id === id);
    const newScore = { id, score };
    if (!prevScore) {
      scoresData.push(newScore);
      ls.set(`${taskId}Score`, scoresData);
      setScores(scoresData);
      setAlert({ open: true, message: 'Saved', type: 'success' });
      return;
    }
    const index = scoresData.indexOf(prevScore);
    scoresData.splice(index, 1, newScore);
    ls.set(`${taskId}Score`, scoresData);
    setScores(scoresData);
    setAlert({ open: true, message: 'Saved', type: 'success' });
  };

  return (
    <div className="responses">
      {loading && <p className="info-text">Loading...</p>}
      {!loading &&
        responses.map((r) => (
          <div className="response-card" key={r.id}>
            <img src={r.submission} alt={r.name} className="submission" />
            <div className="r-score-wrapper">
              <h1>{r.name}</h1>
              <ScoreCards
                id={r.id}
                handleScore={handleScore}
                scoreData={scores.find((s) => s.id === r.id)}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Responses;
