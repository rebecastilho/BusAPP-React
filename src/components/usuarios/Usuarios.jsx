import React, { Component } from 'react';
import '../App.css';
import objeto from '../usuarios.json';
import Post from './Usuario';

class Usuarios extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usuarios: objeto.posts,
      nome : "",
      email : ""
    }

    this._excluirPost = this._excluirPost.bind(this)
  }

  _excluirPost(id) {
    var newPosts = this.state.posts.filter((post) => {
      return post.id != id;
    })

    this.setState({ posts: newPosts })
  }

  _salvarPost(){
    var newId = this.state.posts[this.state.posts.length-1].id+1
    var newPost =  {
      id : newId,
      titulo : this.state.titulo,
      url : this.state.url
    }

    var posts = this.state.posts
    posts.push(newPost)

    this.setState({
      posts : posts,
      titulo : "",
      url : ""
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.posts.map((post, i) =>
            <Post
              key={i}
              id={post.id}
              url_imagem={post.url}
              titulo={post.titulo}
              _excluirPost={this._excluirPost}
            />

          )
        }
        <div>
        <span>Titulo</span>
        <input value ={this.state.titulo} onChange={(e) => {
          this.setState({titulo : e.target.value})
         }}>
         </input>
        </div>

        <div>
        <span>URL</span>
        <input value ={this.state.url} onChange={(e) => {
          this.setState({url : e.target.value})
         }}>
         </input>
        </div>

        <button class='btn btn-primary' onClick={() => { this._salvarPost() }} > Salvar </button>

      </div>
    );


  }
}

export default Posts;