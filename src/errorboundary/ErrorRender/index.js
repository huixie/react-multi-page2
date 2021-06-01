import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './error.scss';

export default class ErrorRender extends Component {
  static defaultProps = {
    errorType: 'param',
  };

  static propTypes = {
    errorType: PropTypes.oneOf(['param', 'interface', 'other']),
  };

  render() {
    const { errorType } = this.props;
    return (
      <div className='param-error-render'>
        <img src={require('../../assets/img/null_img_networkfailure.png')} alt='error' />
        <p>页面失联了，攻城狮正在紧急搜索中...</p>
        {errorType === 'other' && <span className='error-tip'>访问失败,其他错误</span>}
        {errorType === 'param' && <span className='error-tip'>访问失败,参数错误</span>}
        {errorType === 'interface' && <span className='error-tip'>访问失败,接口错误</span>}
      </div>
    );
  }
}
