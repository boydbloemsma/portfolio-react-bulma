import React from 'react';

import { FiGithub } from 'react-icons/fi';
import { FaPaperPlane } from 'react-icons/fa';

function Navbar() {
    return (
        <div className='Navbar'>

            <nav className='navbar is-primary is-fixed-top' role='navigation' aria-label='main navigation'>
                <div className='navbar-brand'>
                    <h1 className='is-size-4'>
                        <a className='navbar-item has-text-success' href='https://boydbloemsma.com'>
                        <p className='has-text-weight-bold'>Boyd</p>Bloemsma
                        </a>
                    </h1>
                
                    <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false'>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                </div>

                <div className='navbar-menu'>
                    <div className='navbar-end'>

                        <div className='navbar-item'>
                            <div className='field is-grouped'>
                                <p className='control'>
                                    <a className='button is-success is-rounded' href='' target='_blank' rel='noopener noreferrer'>
                                        Contact <FaPaperPlane />
                                    </a>
                                </p>
                                <p className='control'>
                                    <a className='button is-success is-rounded' href='https://github.com/boydbloemsma' target='_blank' rel='noopener noreferrer'>
                                        Github <FiGithub /> 
                                    </a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;