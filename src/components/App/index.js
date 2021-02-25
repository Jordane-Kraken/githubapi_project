// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';

// == Import
import './styles.css';
// == Import components
import SearchBar from 'src/components/SearchBar';
import ReposResults from 'src/components/ReposResults';
import Message from 'src/components/Message';

// == Composant
const App = () => {
  const[repos, setRepos] = useState([]);
  const[loading, setLoading] = useState(false);
  const[inputSearch, setInputSearch] = useState('');
  // message
  const [message, setMessage] = useState('Bienvenue !');
  const [displayMessage, setDisplayMessage] = useState(false);

  const makeSearch = () => {
    setLoading(true);
    axios.get(`https://api.github.com/search/repositories?q=${inputSearch}&sort=stars&order=desc&page=1&per_page=9`)
    .then((response) => {
        setRepos(response.data.items);
        setMessage(`La recherche a retourné ${response.data.total_count} résultats`);
        setDisplayMessage(true);
      })
      .catch((error) => {
        setMessage('Une erreur s\'est produite, ré-essayez dans quelques minutes');
        setDisplayMessage(true);
      })
      .finally(() => {
        setLoading(false);
      });
    setLoading(true);
  };

  const hideMessage = () => {
    setDisplayMessage(false);
  };

  return (
    <div className="app">
      <SearchBar
        manageSubmit={makeSearch}
        setInputSearch={setInputSearch}
        inputSearch={inputSearch}
      />
      {displayMessage && <Message message={message} hideMessage={hideMessage} />}
      <ReposResults repos={repos} />
      {loading && (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
    </div>
  );
};

// == Export
export default App;
