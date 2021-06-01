// @flow
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ErrorBoundary from '@/errorboundary';

const Container = (WrapConpoment) =>
  class extends Component {
    render() {
      return <WrapConpoment {...this.props} />;
    }
  };

const renderPage = (component) => {
  ReactDOM.render(<ErrorBoundary>{React.createElement(Container(component))}</ErrorBoundary>, document.getElementById('root'));
};
if (module.hot) {
  module.hot.accept();
}
export { renderPage };
