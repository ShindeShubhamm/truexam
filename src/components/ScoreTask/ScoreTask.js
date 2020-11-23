import React, { useState, useEffect, Fragment } from 'react';
import ls from 'local-storage';

import './ScoreTask.scss';

const ScoreTask = (props) => {
  const { id } = props.match.params;
  const { history, setAlert } = props;

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getTaskData = (tasks) => {
    const task = tasks.find((t) => t.id === id);
    setData(task);
    setLoading(false);
  };

  useEffect(() => {
    const taskFiles = ls.get('taskFiles') ?? [];
    getTaskData(taskFiles);
    // eslint-disable-next-line
  }, []);

  const handleTaskDelete = () => {
    const taskFiles = ls.get('taskFiles');
    const newTasks = taskFiles.filter((file) => file.id !== id);
    ls.set('taskFiles', newTasks);
    ls.remove(`${id}File`);
    setAlert({ open: true, message: 'Deletion Successful', type: 'success' });
    history.push('/');
  };

  return (
    <div className="score-task">
      <h1 className="title">Score Task</h1>
      {loading && <p className="info-text">Loading...</p>}
      <div className="content">
        {!loading &&
          (data ? (
            <Fragment>
              <div className="task-image-wrapper">
                <img
                  src={ls.get(data.taskimage)}
                  alt={data.id}
                  className="task-image"
                />
              </div>
              <div className="t-title">
                <h2 className="block-head">Title:</h2> {data.taskname}
              </div>
              <div className="t-desc">
                <h2 className="block-head">Description:</h2> {data.taskdesc}
              </div>
              <div className="t-delete">
                <button type="button" onClick={handleTaskDelete}>
                  Delete Task
                </button>
              </div>
            </Fragment>
          ) : (
            <p className="info-text">Task Not Found!</p>
          ))}
      </div>
    </div>
  );
};

export default ScoreTask;
