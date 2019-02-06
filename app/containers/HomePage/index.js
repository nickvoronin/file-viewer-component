/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faCube } from '@fortawesome/free-solid-svg-icons';

import ListItem from 'components/ListItem';
import List from 'components/List';
import Requirements from 'components/Requirements';
import FileViewer from 'components/FileViewer';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  state = {
    selectedFile: null,
  };

  handleFileSelect = e => {
    const selectedFile = this.props.files.find(
      file => file.id === e.currentTarget.dataset.id,
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
                  <FontAwesomeIcon
                    icon={item.type === 'pdf' ? faFilePdf : faCube}
                  />
                  <span style={{ marginLeft: '1em' }}>{item.name}</span>
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
  ],
};

export default HomePage;
