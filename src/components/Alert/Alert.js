import React from 'react';
import { ImCross } from 'react-icons/im';
import './Alert.scss';

const Alert = (props) => {
  const { type, message, handleClose } = props;

  return (
    <div className={`alert ${type}`}>
      <h3>{message}</h3>
      <button className="alert-cancel" onClick={handleClose}>
        <ImCross />
      </button>
    </div>
  );
};

Alert.defaultProps = {
  type: 'success',
};

export default Alert;
