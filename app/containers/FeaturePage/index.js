/*
 * FeaturePage
 *
 * List project requirements
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import Requirements from 'components/Requirements';

export default class FeaturePage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta name="description" content="File viewer requirements" />
        </Helmet>
        <Requirements />
      </div>
    );
  }
}
