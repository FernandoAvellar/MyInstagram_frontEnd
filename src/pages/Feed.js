import React, { Component } from 'react';
import api from '../services/api'

import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

export default class Feed extends Component {
  state = {
    feed: [],
  }

  async componentDidMount() {
    const response = await api.get('posts')
    this.setState({ feed: response.data })
  }

  handleLike = async id => {
    await api.post(`/posts/${id}/like`)
  }

  render() {
    return (
      <section id="post-list">
        {this.state.feed.map(post => (
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
              </div>

              <strong>{post.likes} curtidas</strong>

              <p>
                {post.description}
                <span>{post.hashtags}</span>
              </p>
            </footer>
          </article>
        ))}
      </section>
    )
  }
}