import React from 'react';

const AboutPage = () => (
    <section className="section is-large">
        <div className="container">
            <div className="columns">
                <div className="column is-6 is-offset-3 has-text-centered">
                    <h1 className="title">About me</h1>
                    <figure className="image container is-128x128">
                        <img className="is-rounded" src="images/boyd.jpg" alt="Boyd Bloemsma" />
                    </figure>
                    <h2 className="subtitle">
                        Hi, I'm Boyd a Dutch web developer. I have been interested in technology for as long as I can remember.
                        It started with building my own computers and fixing electronic devices for my family,
                        later on I got more into programming and studied Application Development.
                    </h2>
                </div>
            </div>
        </div>
    </section>
);

export { AboutPage as default };