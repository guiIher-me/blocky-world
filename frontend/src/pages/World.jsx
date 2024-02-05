/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const World = (props) => {
  return (
    <div>
      <header>
        <h1>World - Welcome to My React App</h1>
        {console.log(props)}
      </header>
      <section>
        <p>
          This is the world page of my React application. Explore and enjoy!
        </p>
      </section>
    </div>
  );
};

World.propTypes = {
  id: PropTypes.string.isRequired,
  // Add more PropTypes for other props if needed
};

export default World;