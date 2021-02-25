// == Import npm
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Input, Form } from 'semantic-ui-react';

// == Import SCSS

import './searchBar.scss';

// import logo

import logoGithub from '../../assets/images/logo-github.png';

const SearchBar = ({ manageSubmit, setInputSearch, inputSearch }) => {
  // https://fr.reactjs.org/docs/hooks-reference.html#useref
  const refInput = useRef(null);
  // focus on input
  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/focus
    refInput.current.focus();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    manageSubmit();
  }

  return (
    <header className="searchBar">
      <div className="searchBar__divImg">
        <img src={logoGithub} alt="logoGithub" className="searchBar__logo" />
      </div>
      <div className="searchBar__divForm">
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <Input
              ref={refInput}
              className="searchBar__input"
              icon='search'
              iconPosition='left'
              placeholder='Chercher un repository Github'
              value={inputSearch}
              onChange={(event) => {
                setInputSearch(event.target.value);
              }}
            />
          </Form.Field>
        </Form>
      </div>
    </header>
  );
};

// == Proptypes
SearchBar.propTypes = { // mes props sont de type...
  manageSubmit: PropTypes.func.isRequired,
  setInputSearch: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
};

// == Export
export default SearchBar;
