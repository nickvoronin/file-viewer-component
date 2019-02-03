import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ObjViewer } from 'react-obj-viewer';

/* eslint-disable react/prefer-stateless-function */
class OBJViewer extends Component {
  render() {
    const { file } = this.props;
    if (!file) return null;
    return (
      <ObjViewer
        model={file.url}
        width={400}
        height={400}
        axis
        boundingBox={false}
      />
    );
  }
}

OBJViewer.propTypes = {
  file: PropTypes.object.isRequired,
};

export default OBJViewer;
