import React from "react";
import Following from "./following";


class App extends React.Component {
  state = {
    Login:"",
    id:"",
    node_id:"",
    avatar_url:"",
  };


  componentDidMount() {
  
    fetch(`https://api.github.com/users/codecookride`)
    .then(res => res.json())
      .then (info =>{
        console.log(info);
        this.setState({ Login: info.login , id:info.id.toString(), node_id:info.node_id, avatar_url:info.avatar_url});
      })
  };

  render() {
    return (
      <div>
      <div className="App">
        <img src={this.state.avatar_url} alt="ohno"/>
        <h1>{this.state.Login}</h1>
        <h2>{this.state.id}</h2>
        <h3>{this.state.node_id}</h3>
      </div>
      <div>
        <Following/>
      </div>
      </div>
    );
  }
}

export default App;
