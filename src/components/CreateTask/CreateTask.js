import React, { useState } from 'react';
import TaskForm from './TaskForm';
import ls from 'local-storage';
import { Link } from 'react-router-dom';
import { GenerateId, ValidateExtension, GetBase64 } from '../misc';

import './CreateTask.scss';

const CreateTask = (props) => {
  const { setAlert, history } = props;

  const [formData, setFormData] = useState({
    taskname: '',
    taskdesc: '',
  });

  const handleValue = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === 'taskimage' ? e.target.files[0] : e.target.value,
    });
  };

  const handleTaskSubmit = async () => {
    const { taskname, taskdesc, taskimage } = formData;
    if (!taskname || !taskdesc || !taskimage) {
      setAlert({
        open: true,
        message: 'All fields are required!',
        type: 'error',
      });
      return;
    }
    if (!ValidateExtension(taskimage.name?.split('.').pop())) {
      setAlert({
        open: true,
        message: 'Only PNG, JPEG and JPG!',
        type: 'error',
      });
      setFormData({
        ...formData,
        taskimage: undefined,
      });
      return;
    }
    const id = GenerateId(6);
    const newData = {
      ...formData,
      taskimage: `${id}File`,
      id,
    };
    const base64File = await GetBase64(formData.taskimage);
    const allFiles = ls.get('taskFiles') || [];
    ls.set('taskFiles', [newData, ...allFiles]);
    ls.set(`${id}File`, base64File);
    console.log([newData, ...allFiles]);
    setAlert({
      open: true,
      message: 'Success! Redirecting...',
      type: 'success',
    });
    setFormData({
      taskname: '',
      taskdesc: '',
    });
    setTimeout(() => {
      history.push('/');
    }, 2000);
  };

  return (
    <div className="create-task">
      <h1 className="title">Create Task</h1>
      <Link to="/" className="app-btn">
        View All Tasks
      </Link>
      <TaskForm
        handleValue={handleValue}
        handleTask={handleTaskSubmit}
        formData={formData}
      />
    </div>
  );
};

export default CreateTask;
