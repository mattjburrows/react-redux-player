'use strict';

import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setFullscreen } from '../actions/setFullscreen';

export class Fullscreen extends Component {
  _getFullscreenClassName() {
    const className = this.props.fullscreen ? 'is-fullscreen' : 'is-embedded';
    return `fullscreen ${className}`;
  }

  _fullscreenChangeListener() {
    const fullscreenElement = document.webkitFullscreenElement;

    if (!fullscreenElement) {
      this.props.setFullscreenAction(false);
    }
  }

  componentWillMount() {
    document.addEventListener('webkitfullscreenchange', this._fullscreenChangeListener.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('webkitfullscreenchange', this._fullscreenChangeListener);
  }

  componentWillUpdate() {
    if (this.props.fullscreen) document.webkitCancelFullScreen();
    else this.refs.fullscreen.webkitRequestFullscreen();
  }

  render() {
    return (
      <div className={this._getFullscreenClassName()} ref="fullscreen">{this.props.children}</div>
    );
  }
}

Fullscreen.propTypes = {
  fullscreen: React.PropTypes.bool,
  setFullscreenAction: React.PropTypes.func,
  children: React.PropTypes.arrayOf(React.PropTypes.element)
};

function mapStateToProps(state) {
  return {
    fullscreen: state.playback.fullscreen,
    fullscreenSource: state.playback.fullscreenSource
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFullscreenAction: bindActionCreators(setFullscreen, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fullscreen);
