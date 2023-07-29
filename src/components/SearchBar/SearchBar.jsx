import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <input
          className="input"
          placeholder="Digite uma música, álbum ou artista..."
        />
        <button className="SearchButton">
          Buscar <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    );
  }
}

export default SearchBar;
