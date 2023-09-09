import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="ttl1">My Kidfolio</h1>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fclipart-library.com%2Fmoney-bag-picture.html&psig=AOvVaw3QNCdOJtiWlSHmBHHcA5d7&ust=1694316480674000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMDupvHKnIEDFQAAAAAdAAAAABAl"></img>
        <input type="text" value="Enter Name" id="textbox" onclick="takename()"></input>
        <input type="button" value="Learn More" id="infbox" onclick="learnmore()"></input>
      </header>
    </div>
  );
}

export default App;
