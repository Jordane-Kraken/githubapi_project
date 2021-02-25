// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// == Import SCSS

import './reposResults.scss';

import Repo from './Repo';

const ReposResults = ({ repos }) => (
  <Card.Group>
    {repos.map((item) => (
      <Repo key={item.id} {...item} />
    ))}
  </Card.Group>
);

// == Proptypes
ReposResults.propTypes = {
  repos: PropTypes.arrayOf( 
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};


// == Export
export default ReposResults;
