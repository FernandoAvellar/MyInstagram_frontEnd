import React, { Component } from 'react';

import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

export default class Feed extends Component {
  render() {
    return (
        <section id="post-list">
          <article>
            <header>
              <div className="user-info">
                <span>Fernando Avellar Júnior</span>
                <span className="place">Santa Rita do Sapucaí</span>
              </div>
              <img src={more} alt="Mais"/>
            </header>

            <img src="http://localhost:8080/Files/SurfandoEmFamilia.jpg" alt='Surfando em família' />

            <footer>
              <div className="actions">
                <img src={like} alt=''/>
                <img src={comment} alt=''/>
                <img src={send} alt=''/>
              </div>

              <strong>900 curtidas</strong>

              <p>
                Surfando em família!
                <span>#familia #aquarioSP</span>
              </p>
            </footer>
          </article>

          <article>
            <header>
              <div className="user-info">
                <span>Fernando Avellar</span>
                <span className="place">Santa Rita do Sapucaí</span>
              </div>
              <img src={more} alt="Mais"/>
            </header>

            <img src="http://localhost:8080/Files/SurfandoEmFamilia.jpg" alt='Surfando em família' />

            <footer>
              <div className="actions">
                <img src={like} alt=''/>
                <img src={comment} alt=''/>
                <img src={send} alt=''/>
              </div>

              <strong>900 curtidas</strong>

              <p>
                Surfando em família!
                <span>#familia #aquarioSP</span>
              </p>
            </footer>
          </article>
        </section>
    )
  }
}