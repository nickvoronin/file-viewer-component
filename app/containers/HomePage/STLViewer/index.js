import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Viewer from 'stl-viewer';

/* eslint-disable react/prefer-stateless-function */
class STLViewer extends Component {
  render() {
    return (
      <Viewer
        url={this.props.file.url}
        width={400}
        height={400}
        modelColor="#B92C2C"
        backgroundColor="#EAEAEA"
        rotate
        orbitControls
      />
    );
  }
}

STLViewer.propTypes = {
  file: PropTypes.object.isRequired,
};

export default STLViewer;
