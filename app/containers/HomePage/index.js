/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import Button from 'components/Button';
import List from 'components/List';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import PDFViewer from './PDFViewer';
import STLViewer from './STLViewer';
import OBJViewer from './OBJViewer';

const Requirements = () => (
  <React.Fragment>
    <h3>File Viewer Component</h3>
    <p>
      Build a React component that takes a URL to a file and displays it if it
      can. Similar to the Gmail viewer.
    </p>
    <strong>Requirements</strong>
    <ul>
      <li>Semi-transparent backdrop with file content centered.</li>
      <li>
        Top bar with file name in top left and download button in the top right.
      </li>
      <li>
        Show friendly error message if it cannot display the file or there was
        an error retrieving or parsing it with the option to download the file.
      </li>
      <li>
        Viewers for first pass would be:
        <ul>
          <li>PDF – using Mozilla’s fully JS PDF Viewer</li>
          <li>STL – Using THREE.js</li>
          <li>OBJ – Using THREE.js</li>
        </ul>
      </li>
    </ul>
  </React.Fragment>
);

const FileViewer = ({ file = {}, onClose = () => {} }) => {
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
      return null;
  }
  return (
    <div>
      <Button type="button" onClick={onClose}>
        Close me
      </Button>
      <Viewer file={file} />
    </div>
  );
};

FileViewer.propTypes = {
  file: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  state = {
    selectedFile: null,
  };

  handleFileSelect = e => {
    const selectedFile = this.props.files.find(
      file => file.id === e.target.dataset.id,
    );
    this.setState({ selectedFile });
  };

  unselectFile = () => this.setState({ selectedFile: null });

  render() {
    return (
      <article>
        <Helmet>
          <title>File Viewer Component</title>
          <meta
            name="description"
            content="React component that takes a URL to a file and displays it if it can."
          />
        </Helmet>
        <List
          items={this.props.files}
          component={({ item }) => (
            <ListItem
              item={
                <button
                  type="button"
                  data-id={item.id}
                  onClick={this.handleFileSelect}
                >
                  {item.name}
                </button>
              }
            />
          )}
        />
        {this.state.selectedFile && (
          <FileViewer
            file={this.state.selectedFile}
            onClose={this.unselectFile}
          />
        )}
        <Requirements />
      </article>
    );
  }
}

HomePage.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['obj', 'stl', 'pdf']).isRequired,
    }),
  ),
};

HomePage.defaultProps = {
  files: [
    {
      id: '1',
      url: 'https://www.positronbohemia.com/_delete_me/led.obj',
      name: 'LED TV',
      type: 'obj',
    },
    {
      id: '2',
      url: 'https://www.positronbohemia.com/_delete_me/flask-cors.pdf',
      name: 'Flask CORS documentation',
      type: 'pdf',
    },
    {
      id: '3',
      url: 'https://www.positronbohemia.com/_delete_me/Body01.stl',
      name: 'Truck part',
      type: 'stl',
    },
  ],
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
