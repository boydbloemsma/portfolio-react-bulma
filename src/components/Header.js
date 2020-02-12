import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';

export const Header = () => (
    <nav className='navbar is-dark' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
            <h1 className='is-size-4'>
                <Link className='navbar-item has-text-success' to='/'>
                    <p className='has-text-weight-bold'>Boyd</p>Bloemsma
                </Link>
            </h1>
        </div>

        <div className='navbar-menu'>
            <div className='navbar-end'>

                <div className='navbar-item'>
                    <div className='field is-grouped'>
                        <p className='control'>
                            <Link className='has-text-success' to='/'>
                                Dashboard
                            </Link>
                        </p>
                        <p className='control'>
                            <Link className='has-text-success' to='/about'>
                                About
                            </Link>
                        </p>
                    </div>
                </div>

                <div className='navbar-item'>
                    <div className='field is-grouped'>
                        <p className='control'>
                            <a className='has-text-success' href='https://github.com/boydbloemsma' target='_blank' rel='noopener noreferrer'>
                                Github
                            </a>
                        </p>
                    </div>
                </div>

                <div className='navbar-item'>
                    <p className='control'>
                        <Link className='button is-success is-rounded' to='/contact'>
                            Contact <FaPaperPlane />
                        </Link>
                    </p>    
                </div> 

            </div>
        </div>
    </nav>
);

export { Header as default };