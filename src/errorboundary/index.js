import React, { Component } from 'react';
import ErrorRender from './ErrorRender';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorType: 'param'
    };
  }

  static getDerivedStateFromError(error) {
    if (error.name === 'FxError') {
      return { hasError: true, errorType: error.type };
    }
    return { hasError: true, errorType: 'other' };
    // return { hasError: false };
  }

  componentDidCatch(error, info) {
    console.log(11, error);
  }

  render() {
    const { hasError, errorType } = this.state;
    if (hasError) {
      return <ErrorRender errorType={errorType} />;
    }
    return this.props.children;
  }
}
