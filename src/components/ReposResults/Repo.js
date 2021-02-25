import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const Repo = ({ owner, name, description, html_url }) => (
  <Card style={{ border: 'solid 0.5em', borderRadius: '20px' }} className="repos">
    <Card.Content className="repos__content">
      <Image
        src={owner.avatar_url}
        className="repos__img"
      />
      <Card.Header className="repos__tile">{name}</Card.Header>
      <Card.Meta className="repos__subtitle">{owner.login}</Card.Meta>
      <Card.Description className="repos__description">
        {description}
      </Card.Description>
      <Card.Meta className="repos__link"><a href={html_url} style={{ textDecoration: 'underline' }}>Voir le repo</a></Card.Meta>
    </Card.Content>
  </Card>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string,
  html_url: PropTypes.string.isRequired,
};

Repo.defaultProps = {
  description: '',
};

export default Repo;
