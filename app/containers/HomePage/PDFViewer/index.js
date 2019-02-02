import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
//   pdfjs.version
// }/pdf.worker.js`;

class Index extends Component {
  state = {
    numPages: null, // eslint-disable-line react/no-unused-state
    pageNumber: 1, // eslint-disable-line react/no-unused-state
    url: 'https://www.positronbohemia.com/_delete_me/flask-cors.pdf',
  };

  // eslint-disable-next-line no-unused-vars
  onDocumentLoadSuccess = ({ numPages }) => {
    // console.log('onDocumentLoadSuccess');
    // console.log(numPages);
    // this.setState({ numPages });
  };

  // eslint-disable-next-line no-unused-vars
  onLoadError = e => {
    // console.log('onLoadError', e);
  };

  // eslint-disable-next-line no-unused-vars
  onSourceError = e => {
    // console.log('onSourceError', e);
  };

  render() {
    return (
      <Document
        file={{
          url: this.state.url,
        }}
        onLoadSuccess={this.onDocumentLoadSuccess}
        onSourceError={this.onSourceError}
        onSourceSuccess={() => console.log('Document source retrieved!')}
        onLoadError={this.onLoadError}
        options={{ cMapUrl: 'cmaps/', cMapPacked: true }}
      >
        <Page pageNumber={21} />
      </Document>
    );
  }
}

export default Index;
