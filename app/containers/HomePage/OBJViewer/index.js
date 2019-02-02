import React, { Component } from 'react';
import { ObjViewer } from 'react-obj-viewer';

class OBJViewer extends Component {
  state = {
    model: 'https://www.positronbohemia.com/_delete_me/led.obj',
  };

  render() {
    return (
      <ObjViewer
        model={this.state.model}
        width={400}
        height={400}
        axis
        boundingBox={false}
      />
    );
  }
}

export default OBJViewer;
