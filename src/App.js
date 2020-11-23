import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import CreateTask from './components/CreateTask/CreateTask';
import ScoreTask from './components/ScoreTask/ScoreTask';
import Alert from './components/Alert/Alert';
import './App.scss';

const App = () => {
  const [alert, setAlert] = useState({
    open: false,
    type: '',
    message: '',
  });

  const handleAlertClose = () => {
    setAlert({
      open: false,
      type: '',
      message: '',
    });
  };

  const handleSetAlert = (data) => {
    setAlert(data);
    setTimeout(() => {
      handleAlertClose();
    }, 6000);
  };

  return (
    <div className="App">
      {alert.open && (
        <Alert
          message={alert.message}
          type={alert.type}
          handleClose={handleAlertClose}
        />
      )}
      <Router>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home setAlert={handleSetAlert} />}
            />
            <Route
              exact
              path="/create"
              render={(props) => (
                <CreateTask {...props} setAlert={handleSetAlert} />
              )}
            />
            <Route
              exact
              path="/score/:id"
              render={(props) => (
                <ScoreTask {...props} setAlert={handleSetAlert} />
              )}
            />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
