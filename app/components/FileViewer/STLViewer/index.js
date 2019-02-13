import React from 'react';
import PropTypes from 'prop-types';
import Viewer from 'stl-viewer';

function STLViewer(props) {
  return (
    <Viewer
      url={props.file.url}
      lightY={0.4}
      lightZ={1}
      lightX={-0.3}
      width={760}
      height={400}
      modelColor="#2ba6ef"
      backgroundColor="black"
      rotate={false}
      orbitControls
    />
  );
}

STLViewer.propTypes = {
  file: PropTypes.object.isRequired,
};

export default STLViewer;
