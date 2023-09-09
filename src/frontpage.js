import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="ttl1">My Kidfolio</h1>
        <input type="text" value="Enter Name" id="textbox" onclick="takename()"></input>
        <input type="button" value="Learn More" id="infbox" onclick="learnmore()"></input>
      </header>
    </div>
  );
}

export default App;
