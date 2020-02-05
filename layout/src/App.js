import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import posts from './user';


class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      posts: posts
    };
  }
  
  render(){
    // Version longue
    const posts = this.state.posts;
    // version synthetique
    //const { egorj }  = this.state;
    
    console.log(posts);
  
    return  (
      
      
      
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
         { posts.map(post => (
          <div class="card m-5">
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body text-dark">
              <h5 class="card-title">{post.name}</h5>
              <p class="card-text">{post.age}</p>
              <p class="card-text">{post.genre}</p>
              <a href="#" class="btn btn-primary">En savoir plus</a>
            </div>
          </div>
          ))}

          
          <a className="App-link">
            Learn React
          </a>
        </header>
     
      </div>
      
    
     
    )
    
  }
  
}

export default App;
