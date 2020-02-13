import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <section className="section is-large">
        404 - <Link to="/">Go home</Link>
    </section>
);

export default NotFoundPage;