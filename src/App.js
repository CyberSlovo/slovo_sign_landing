import logo from './logo.svg';
import roman from './roman.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={roman} className="App-logo" alt="logo" />
        <p>
          Edit and save your live.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          SLOVO SIGN
        </a>
      </header>
    </div>
  );
}

export default App;
