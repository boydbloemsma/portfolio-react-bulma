import React from 'react';

import './App.scss';

function App() {
  return (

    <div className='App'>

      <section className='section is-medium has-background-light'>
        <div className='container'>
            <h2 className='title'>
              Some of my work:
            </h2>
            <div className='columns'>
                <div className='column has-text-centered'>
                    <h1 className='title'>
                      Clevervideo
                    </h1>
                    <figure className='image is-3-by-1'>
                      <img src='https://bulma.io/images/placeholders/720x240.png' alt='placeholder'/>
                    </figure>
                    <h2 className='subtitle'>
                      A website made for the videoproduction company Clevervideo, which is owned by a friend of mine.<br />
                      This site is not put in production but is rather just made for my portfolio.<br />
                      Made using the PHP framework <a href='http://www.laravel.com' target='_blank' rel='noopener noreferrer'>Laravel </a>
                      and the CSS framework <a href='http://www.bulma.io' target='_blank' rel='noopener noreferrer'>Bulma</a>.<br />
                      <br />
                      Visit here: <a href='/clevervideo' target='_blank' rel='noopener noreferrer'>Clevervideo</a>
                    </h2>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}

export default App;