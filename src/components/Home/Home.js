import React, { useState, useEffect, Fragment } from 'react';

import ls from 'local-storage';
import { Link } from 'react-router-dom';
import TaskCard from '../common/TaskCard/TaskCard';
import './Home.scss';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTasks(ls.get('taskFiles') ?? []);
      setLoading(false);
    }, 200);
    // eslint-disable-next-line
  }, []);

  const handleDelete = (id) => {
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
    ls.set('taskFiles', newTasks);
    ls.remove(`${id}File`);
    ls.remove(`${id}Score`);
  };

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
                  <TaskCard
                    key={t.id}
                    taskimage={t.taskimage}
                    taskname={t.taskname}
                    taskdesc={t.taskdesc}
                    id={t.id}
                    showLink
                    handleDelete={handleDelete}
                  />
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
