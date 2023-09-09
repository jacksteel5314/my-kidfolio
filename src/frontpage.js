import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="ttl1">My Kidfolio</h1>
        <img class="img1" src="https://clipart-library.com/images/rcnKKqndi.png" width="150" height="150"></img>
        <div>
          <input type="text" value="Enter Name" id="textbox"></input>
          <input type="button" value="Start" id="infbox" onclick="start()"></input>
        </div>
        <input type="button" value="Learn More" id="infbox" onclick="learnmore()"></input>
      </header>
    </div>
  );
}

export default App;
