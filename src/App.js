import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Writer from './Writer';
import Post from "./Post";
import postStorage from "./PostStorage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    postStorage.subscribe(this);
  }

  componentWillUnmount() {
    postStorage.unsubscrtibe(this);
  }
  redner() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Blockchain PostSave</h1>
        </header>
        <div>
          <Writer />
          <div>
            {
              Object
              .keys(this.state.posts)
              .map(key => <Post post={this.state.posts[key]} />)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
