// App.jsx
import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 class="jammingTitle">Ja<span className='spanTitle'>mmm</span>ing</h1>
        <SearchBar />
        {/* Outros componentes vão aqui */}
      </div>
    );
  }
}

export default App;
