import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

import Header from '../components/Header';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import ProjectsPage from '../components/ProjectsPage';
import Footer from '../components/Footer';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/about" component={AboutPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </Router>
);

export { AppRouter as default };