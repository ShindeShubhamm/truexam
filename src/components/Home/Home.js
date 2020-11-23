import React, { useState, useEffect, Fragment } from 'react';

import ls from 'local-storage';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTasks(ls.get('taskFiles') ?? []);
      setLoading(false);
    }, 2000);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">View Your Tasks</h2>
      <div className="tasks-container">
        {loading && <p className="info-text">Loading...</p>}
        {!loading &&
          (tasks.length !== 0 ? (
            <div className="tasks-list">
              {tasks.map((t) => {
                return (
                  <div className="task-item" key={t.id}>
                    <img
                      src={ls.get(t.taskimage)}
                      alt="Task"
                      className="ti-img"
                    />
                    <div className="ti-details">
                      <h3 className="ti-title">{t.taskname}</h3>
                      <p className="ti-subtitle">{t.taskdesc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <Fragment>
              <p className="info-text">
                You have not created any tasks.
                <Link to="/create" className="link">
                  {' '}
                  Create New Task
                </Link>
              </p>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default Home;
