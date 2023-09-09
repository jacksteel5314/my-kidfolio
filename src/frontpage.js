import './frontpage.css';

function frontpage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="ttl1">My Kidfolio</h1>
        <img class="img1" src="https://clipart-library.com/images/rcnKKqndi.png" width="150" height="150"></img>
        <div>
          <input type="text" placeholder="Enter Name" id="textbox" minlength="2" maxlength="15"></input>
          <button id="infbox" onclick="start()">
            Start
          </button>
        </div>
        <div class="container">
          <button type="submit" id="infbox" onclick="openPopup()">
            Learn More
          </button>
        </div>
      </header>
    </div>
  );
}
let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup");
}

function closePopup(){
  popup.classList.remove("open-popup");
}

export default frontpage;
