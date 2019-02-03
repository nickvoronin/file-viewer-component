import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import PropTypes from 'prop-types';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
//   pdfjs.version
// }/pdf.worker.js`;

class PDFViewer extends Component {
  state = {
    numPages: null, // eslint-disable-line react/no-unused-state
    pageNumber: 1, // eslint-disable-line react/no-unused-state
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
    const { file } = this.props;
    return (
      <Document
        file={{
          url: file.url,
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

PDFViewer.propTypes = {
  file: PropTypes.object.isRequired,
};

export default PDFViewer;
