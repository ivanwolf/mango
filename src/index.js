import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App/App.jsx';
import './index.scss';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./containers/App/App.jsx', () => {
    const NextApp = require('./containers/App/App.jsx').default;
    render(NextApp);
  });
}

ReactDOM.render(<App />, );