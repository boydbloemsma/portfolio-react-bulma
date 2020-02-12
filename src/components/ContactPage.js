import React from 'react';

const Contact = () => {
    return (
        <div className='Contact'>

            <section className='section is-small has-background-dark'>
                <div className='container'>
                    <h1 className='title has-text-success has-text-centered'>Contact</h1>
                    <div className='columns'>
                        <div className='column is-6 is-offset-3'>
                            <div className='columns is-multiline'>
                                <div className='column'>
                                    <div className='field'>
                                        <label className='label has-text-success'>Name:</label>
                                        <div className='control'>
                                            <input className='input' type='text' />
                                        </div>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className='field'>
                                        <label className='label has-text-success'>Email:</label>
                                        <div className='control'>
                                            <input className='input' type='text' />
                                        </div>
                                    </div>
                                </div>
                                <div className='column is-full'>
                                    <div className='field'>
                                        <label className='label has-text-success'>Message:</label>
                                        <div className='control'>
                                            <textarea className='textarea has-fixed-size ' name='message'></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export { Contact as default };