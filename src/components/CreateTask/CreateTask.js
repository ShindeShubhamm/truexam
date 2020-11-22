import React, { useState } from 'react';
import TaskForm from './TaskForm';
import ls from 'local-storage';
import { GenerateId } from '../misc/idGenerator';

import './CreateTask.scss';

const CreateTask = (props) => {
  const { setAlert } = props;

  const [open, setOpen] = useState(false); // true => Create New Task
  const [formData, setFormData] = useState({});

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleValue = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === 'taskimage' ? e.target.files[0] : e.target.value,
    });
  };

  const handleTaskSubmit = () => {
    const { taskname, taskdesc, taskimage } = formData;
    if (!taskname || !taskdesc || !taskimage) {
      setAlert({
        open: true,
        message: 'All fields are required!',
        type: 'error',
      });
      return;
    }
    const newData = {
      ...formData,
      id: GenerateId(6),
    };
    const allFiles = ls.get('taskFiles') || [];
    ls.set('taskFiles', [newData, ...allFiles]);
    console.log([newData, ...allFiles]);
    setAlert({ open: true, message: 'Success!', type: 'success' });
    setOpen(false);
    setFormData({});
  };

  return (
    <div className="create-task">
      <h1 className="title">Create Task</h1>
      <button type="button" onClick={handleToggle} className="app-btn">
        {!open ? 'Create New Task' : 'Cancel'}
      </button>
      {open && (
        <TaskForm
          handleValue={handleValue}
          handleTask={handleTaskSubmit}
          formData={formData}
        />
      )}
    </div>
  );
};

export default CreateTask;
