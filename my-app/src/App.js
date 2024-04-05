import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">

      <Header></Header>
      <h1>Hello</h1>
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default App;
