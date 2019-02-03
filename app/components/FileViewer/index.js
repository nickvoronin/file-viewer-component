import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import PDFViewer from '../PDFViewer';
import STLViewer from '../STLViewer';
import OBJViewer from '../OBJViewer';
import Button from '../Button';

const Icon = styled.span`
  outline: none;
  border-bottom: 1px dotted #999;
`;

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
    <Modal
      size="lg"
      isOpen
      toggle={onClose}
      dialogClassName="modal-90w"
      aria-labelledby="ModalHeader"
    >
      <ModalHeader
        closeButton
        onHide={onClose}
        style={{
          flexDirection: 'row-reverse',
        }}
      >
        <Button>Download</Button>
        <Icon>{file.type}</Icon>
        <span style={{ width: 'auto' }}>{file.name}</span>
      </ModalHeader>
      <ModalBody>
        <Viewer file={file} />
      </ModalBody>
    </Modal>
  );
};

FileViewer.propTypes = {
  file: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FileViewer;
