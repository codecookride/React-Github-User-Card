import React from "react";


class Following extends React.Component {
  state = {
    info:[]
  };


  componentDidMount() {
  
    fetch(`https://api.github.com/users/codecookride/following`)
    .then(res => res.json())
      .then (info =>{
        console.log(info);
          this.setState({info:info});
      })
  };

  render() {
   
    console.log(this.state)
    return (
        <div>
           
        {this.state.info.map(card => {
           return(
         <div>
        <img src={card.avatar_url} alt="ohno"/>
        <h1>{card.login}</h1>
        <h2>{card.id}</h2>
        <h3>{card.node_id}</h3>
      </div>)
    })}
    </div>
    );
  }
}

export default Following;
