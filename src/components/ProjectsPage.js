import React from 'react';

const ProjectsPage = () => (
    <section className="section is-large">
        <div className="container">
            <div className="columns">
                <div className="column is-3">
                    <h1 className="title">Latest work:</h1>
                    <p>In my free time I have worked on several personal projects including this portfolio. Here are a few examples:</p>
                </div>
                <div className="column is-3 is-offset-1">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image">
                                <img src="images/redux-react.png" alt="React and React Logo" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4 className="subtitle">Expensify Web App</h4>
                                <p>Web application build with React, Redux, and Firebase that makes it easy to track your expenses.</p>
                            </div>
                            <div className="tags">
                                <span className="tag">React</span>
                                <span className="tag">Redux</span>
                                <span className="tag">Firebase</span>
                                <span className="tag">Jest</span>
                                <span className="tag">Enzyme</span>
                                <span className="tag">HTML</span>
                                <span className="tag">Sass</span>
                            </div>
                            <div className="buttons has-addons is-centered">
                                <a href="https://boyd-expensify-app.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="button is-primary is-outlined">Live</a>
                                <a href="https://github.com/boydbloemsma/expensify-app" target="_blank" rel="noopener noreferrer" className="button is-primary is-outlined">Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-3">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image">
                                <img src="images/ReactLogo.png" alt="React Logo" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4 className="subtitle">Indecision Web App</h4>
                                <p>Web application build with React that makes hard decisions for you.</p>
                            </div>
                            <div className="tags">
                                <span className="tag">React</span>
                                <span className="tag">HTML</span>
                                <span className="tag">Sass</span>
                            </div>
                            <div className="buttons has-addons is-centered">
                                <a href="https://boyd-indecision-app.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="button is-primary is-outlined">Live</a>
                                <a href="https://github.com/boydbloemsma/indecision-app" target="_blank" rel="noopener noreferrer" className="button is-primary is-outlined">Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export { ProjectsPage as default };