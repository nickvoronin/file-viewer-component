import React from 'react';
import examplePicture from 'images/example.png';

const Requirements = () => (
  <section>
    <h3>File Viewer Component</h3>
    <figure>
      <img
        src={examplePicture}
        alt="Example showing the GMail file viewer interface."
        style={{ width: '100%' }}
      />
      <figcaption>
        Build a React component that takes a URL to a file and displays it if it
        can. Similar to the Gmail viewer.
      </figcaption>
    </figure>
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
  </section>
);

export default Requirements;
