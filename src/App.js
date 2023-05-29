import logo from './logo.svg'; // logo for deli
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Burbank Deli Market</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Burbank Deli & Market!
        </p>
        
      </header>
    </div>
  );
}

export default App;
