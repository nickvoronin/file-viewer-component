import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import PropTypes from 'prop-types';

class PDFViewer extends Component {
  state = {
    pageNumber: 21,
    error: null,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  onLoadError = () => {
    this.setState({ error: 'Failed to load PDF file.' });
  };

  render() {
    const { file } = this.props;
    const { error, pageNumber, numPages } = this.state;
    if (error) {
      return error;
    }
    return (
      <Document
        file={{
          url: file.url,
        }}
        onLoadSuccess={this.onDocumentLoadSuccess}
        onSourceError={this.onLoadError}
        onLoadError={this.onLoadError}
        options={{ cMapUrl: 'cmaps/', cMapPacked: true }}
      >
        <Page pageNumber={pageNumber || numPages} />
      </Document>
    );
  }
}

PDFViewer.propTypes = {
  file: PropTypes.object.isRequired,
};

export default PDFViewer;
