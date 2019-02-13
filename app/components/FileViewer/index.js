import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileDownload,
  faPrint,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import PDFViewer from './PDFViewer';
import STLViewer from './STLViewer';
import OBJViewer from './OBJViewer';

const FileViewer = ({ file, onClose }) => {
  let Viewer = null;
  switch (file.type) {
    case 'pdf':
      Viewer = PDFViewer;
      break;
    case 'stl':
      Viewer = STLViewer;
      break;
    case 'obj':
      Viewer = OBJViewer;
      break;
    default:
      Viewer = () => 'Not supported format';
  }
  return (
    <div>
      <Modal
        size="lg"
        show
        onHide={onClose}
        dialogClassName="modal-90w"
        aria-labelledby="File content"
      >
        <Modal.Header>
          <header
            style={{
              height: '3em',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div>
              <Button outline onClick={onClose}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
            </div>
            <div>
              <h3>
                {file.name}.{file.type}
              </h3>
            </div>
            <div>
              <Button outline onClick={() => window.open(file.url)}>
                <FontAwesomeIcon icon={faFileDownload} />
              </Button>{' '}
              <Button outline onClick={() => window.print()}>
                <FontAwesomeIcon icon={faPrint} />
              </Button>
            </div>
          </header>
        </Modal.Header>
        <Modal.Body>
          <Viewer file={file} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

FileViewer.propTypes = {
  file: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FileViewer;
