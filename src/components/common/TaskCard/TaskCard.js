import React from 'react';
import ls from 'local-storage';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import './TaskCard.scss';

const TaskCard = (props) => {
  const { taskimage, taskname, taskdesc, id, showLink, handleDelete } = props;
  const description =
    taskdesc?.length > 70 ? `${taskdesc.slice(0, 70)}...` : taskdesc;
  const imageBase64 = ls.get(taskimage);

  return (
    <div className="task-item">
      <img src={imageBase64} alt="Task" className="ti-img" />
      <div className="td-wrapper">
        <div className="ti-details">
          <h3 className="ti-title">{taskname}</h3>
          <p className="ti-subtitle">{description}</p>
        </div>
        <div className="ti-score">
          {showLink && id && (
            <Link to={`/score/${id}`} className="app-btn">
              Score
            </Link>
          )}
          <button
            type="button"
            className="delete-button"
            onClick={() => handleDelete(id)}
          >
            <MdDelete className="delete-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
