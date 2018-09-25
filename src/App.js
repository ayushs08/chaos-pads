import React from 'react';
import './app.css';

const keys = ["q","w","e","r","a","s","d","f","h","j","k","l","z","x","c","v"];

class App extends React.Component {

  componentDidMount() {
    document.addEventListener("keypress", event => this.handleKeyboard(event))
  }

  componentWillMount() {
    document.removeEventListener("keypress", event => this.handleKeyboard(event))
  }

  handleKeyboard(event) {
    document.querySelectorAll(".machine__pad").forEach(function(pad) {
      pad.classList.remove("active")
    })
    if(keys.indexOf(event.key) !== -1) {
      document.getElementById(event.key).classList.add("active")
    }
  }

  render() {

    return (
      <div className="machine">
        {
          keys.map(key => (
            <div class="machine__pad" id={key} key={key}>
              <span>{key}</span>
            </div>
          ))
        }
      </div>
    )
  }
}

export default App;