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
import List from 'components/List';
import Requirements from 'components/Requirements';
import FileViewer from 'components/FileViewer';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  state = {
    selectedFile: this.props.files[3],
  };

  handleFileSelect = e => {
    const selectedFile = this.props.files.find(
      file => file.id === e.target.dataset.id,
    );
    this.setState({ selectedFile });
  };

  unselectFile = () => {
    this.setState({ selectedFile: null });
  };

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
        <Requirements />
        {this.state.selectedFile && (
          <FileViewer
            file={this.state.selectedFile}
            onClose={this.unselectFile}
            show={Boolean(this.state.selectedFile)}
          />
        )}
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
    {
      id: '4',
      url: '',
      name: 'Nicolai Voronin CV',
      type: 'docx',
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
