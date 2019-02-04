import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Viewer from 'stl-viewer';

/* eslint-disable react/prefer-stateless-function */
class STLViewer extends Component {
  render() {
    return (
      <Viewer
        url={this.props.file.url}
        width={760}
        height={400}
        modelColor="#2ba6ef"
        backgroundColor="#EAEAEA"
        rotate={false}
        orbitControls
      />
    );
  }
}

STLViewer.propTypes = {
  file: PropTypes.object.isRequired,
};

export default STLViewer;
