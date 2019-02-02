import React, { Component } from 'react';
import STLViewer from 'stl-viewer';

const link = `https://www.positronbohemia.com/_delete_me/Body01.stl`;

/* eslint-disable react/prefer-stateless-function */
class Index extends Component {
  render() {
    return (
      <STLViewer
        url={link}
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

export default Index;
