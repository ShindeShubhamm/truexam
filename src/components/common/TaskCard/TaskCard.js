import React from 'react';
import ls from 'local-storage';
import { Link } from 'react-router-dom';
import './TaskCard.scss';

const TaskCard = (props) => {
  const { taskimage, taskname, taskdesc, id, showLink } = props;
  const description =
    taskdesc?.length > 70 ? `${taskdesc.slice(0, 70)}...` : taskdesc;

  return (
    <div className="task-item">
      <img src={ls.get(taskimage)} alt="Task" className="ti-img" />
      <div className="ti-details">
        <h3 className="ti-title">{taskname}</h3>
        <p className="ti-subtitle">{description}</p>
      </div>
      {showLink && id && (
        <div className="ti-score">
          <Link to={`/score/${id}`} className="app-btn">
            Score
          </Link>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
