import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './styles.css';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDom.render(<App/>, document.getElementById("root"));








