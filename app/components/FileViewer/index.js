import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileDownload,
  faPrint,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import PDFViewer from '../PDFViewer';
import STLViewer from '../STLViewer';
import OBJViewer from '../OBJViewer';

const ModalHeader = ({ file, onClose }) => (
  <header
    style={{
      backgroundColor: '#050b1b',
      height: '3em',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <div>
      <Button outline onClick={onClose}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
    </div>
    <div>
      <h3 style={{ color: 'white', fontSize: '14px' }}>
        {file.name}.{file.type}
      </h3>
    </div>
    <div>
      <Button outline>
        <FontAwesomeIcon icon={faFileDownload} />
      </Button>{' '}
      <Button outline>
        <FontAwesomeIcon icon={faPrint} />
      </Button>
    </div>
  </header>
);

ModalHeader.propTypes = {
  file: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

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
  if (!Viewer) return null;
  return (
    <div>
      <Modal
        size="lg"
        isOpen
        toggle={onClose}
        dialogClassName="modal-90w"
        aria-labelledby="ModalHeader"
        external={<ModalHeader file={file} onClose={onClose} />}
      >
        <ModalBody>
          <Viewer file={file} />
        </ModalBody>
      </Modal>
    </div>
  );
};

FileViewer.propTypes = {
  file: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FileViewer;
