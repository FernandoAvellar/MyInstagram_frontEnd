import React, { Component } from 'react';
import api from '../services/api'
import io from 'socket.io-client'

import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'
import trash from '../assets/trash.svg'

export default class Feed extends Component {
  state = {
    feed: [],
  }

  async componentDidMount() {
    this.registerToSocket()
    const response = await api.get('posts')
    this.setState({ feed: response.data })
  }

  /* Backend envia 3 tipos de mensagens via websocket 
    (post, like e delete) Ao receber a mensagem com o  
    novo Post colocamos a mesma na primeira posição do 
                    feed de posts */

  registerToSocket = () => {
    const socket = io('http://localhost:8080')

    socket.on('post', newPost => {
      this.setState({ feed: [newPost, ...this.state.feed] })
    })

    socket.on('like', newLike => {
      this.setState({
        feed: this.state.feed.map(post =>
          post._id === newLike._id ? newLike : post
        )
      })
    })

    socket.on('delete', deletedPost => {
      this.setState({
        feed: this.state.feed.filter(post =>
          post._id !== deletedPost._id
        )
      })
    })
  }

  handleLike = async id => {
    await api.post(`/posts/${id}/like`)
  }

  handleDelete = async id => {
    console.log(id)
    await api.delete(`/posts/${id}`)
  }

  render() {
    return (
      <section id="post-list" >
        {
          this.state.feed.map(post => (
            <article key={post._id}>
              <header>
                <div className="user-info">
                  <span>{post.author}</span>
                  <span className="place">{post.place}</span>
                </div>
                <img src={more} alt="Mais" />
              </header>

              <img src={`http://localhost:8080/Files/${post.image}`} alt={post.description} />

              <footer>
                <div className="actions">
                  <button onClick={() => this.handleLike(post._id)}>
                    <img src={like} alt='Botão para curtir o Post' />
                  </button>
                  <img src={comment} alt='Botão para adicionar comentário ao Post' />
                  <img src={send} alt='Botão para compartilhar o Post' />
                  <button onClick={() => this.handleDelete(post._id)}>
                    <img src={trash} alt='Botão para apagar o Post' />
                  </button>
                </div>

                <strong>{post.likes} curtidas</strong>

                <p>
                  {post.description}
                  <span>{post.hashtags}</span>
                </p>
              </footer>
            </article>
          ))
        }
      </section>
    )
  }
}