import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App/Assets/styles/style.scss';
import App from './App/App';
import SquareSpinner from './App/Components/Common/SquareSpinner';

import { Provider } from 'react-redux';
import { store } from './App/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {false ? (
        <>
          <SquareSpinner />
          <App />
        </>
      ) : (
        <App />
      )}
    </Provider>
  </React.StrictMode>
);
