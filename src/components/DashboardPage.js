import React from 'react';

const DashboardPage = () => (
    <section className="hero is-dark is-large is-bold">
        <div className="hero-body">
            <div className="columns">
                <div className="column is-4 is-offset-2">
                    <div className="container">
                        <h2 className="subtitle">Hi</h2>
                        <h1 className="title is-1">I'm Boyd</h1>
                        <h2 className="subtitle is-2">A web developer</h2>
                    </div>
                </div>
                <div className="column is-4 has-text-centered">
                    <h2 className="subtitle has-text-weight-bold">Languages:</h2>
                    <div className="tags is-centered">
                        <span className="tag">HTML</span>
                        <span className="tag">PHP</span>
                        <span className="tag">CSS</span>
                        <span className="tag">SASS</span>
                        <span className="tag">JS (ES6)</span>
                    </div>
                    <h2 className="subtitle has-text-weight-bold">Frameworks:</h2>
                    <div className="tags is-centered">
                        <span className="tag">BULMA</span>
                        <span className="tag">REACT</span>
                    </div>
                    <h2 className="subtitle has-text-weight-bold">Development tools:</h2>
                    <div className="tags is-centered">
                        <span className="tag">GIT</span>
                        <span className="tag">YARN</span>
                        <span className="tag">NPM</span>
                        <span className="tag">BABEL</span>
                        <span className="tag">WEBPACK</span>
                        <span className="tag">VSCODE</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export { DashboardPage as default };