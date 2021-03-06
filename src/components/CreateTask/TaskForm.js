import React from 'react';
import { FaUpload } from 'react-icons/fa';

const TaskForm = (props) => {
  const { handleValue, handleTask, formData } = props;

  return (
    <form className="task-form">
      {/* Task Image */}
      <label htmlFor="taskimage">
        <p className="label">Upload Task Image:</p>
        <div className="label-upload">
          <FaUpload className="upload-button" />
        </div>
        {formData.taskimage?.name && (
          <p className="filename">{formData.taskimage?.name}</p>
        )}
      </label>
      <input
        type="file"
        name="taskimage"
        id="taskimage"
        accept="image/png, image/jpg, image/jpeg"
        hidden
        onChange={handleValue}
        onClick={(e) => {
          e.target.value = null;
        }}
      />

      {/* Task Name */}
      <label htmlFor="taskname">
        <p className="label">Task Name:</p>
        <input
          type="text"
          name="taskname"
          id="taskname"
          onChange={handleValue}
          className="input-box"
          value={formData.taskname}
        />
      </label>
      <label htmlFor="taskdesc">
        <p className="label">Task Description:</p>
        <textarea
          name="taskdesc"
          id="taskdesc"
          onChange={handleValue}
          className="input-box input-area"
          value={formData.taskdesc}
          cols="4"
          rows="5"
          charswidth="23"
        />
      </label>
      <div className="submit-button">
        <button type="button" className="app-btn" onClick={handleTask}>
          Create
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
