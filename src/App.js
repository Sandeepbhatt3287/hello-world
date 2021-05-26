import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'World!!!!!';
   const isLoggedin = true;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          Helo {isLoggedin?name:'world'}
          {!isLoggedin && <p>Hello World</p>}
          {isLoggedin && <p>Hello {name}</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
