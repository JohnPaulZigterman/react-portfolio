import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { validateEmail } from '../utils/helpers';



function Contact() {
  const [state, handleSubmit] = useForm('my-token');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  if (state.succeeded) {
    return (
      <div>
        <h1>Contact Page</h1>
        <p>
          Thank you for reaching out! You may or may not hear back from me shortly, or in a while.
        </p>
      </div>
    );
  }

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const valid = validateEmail(e.target.value);
      if (!valid) {
        setErrorMessage('Your email is not right!');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage('Please input something at least!');
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div className='card col-6'>
      <div className='card-header'>
      <h1>Contact Page</h1>
      </div>
      <div className='card-body'>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className='field'>
            <label className='label' htmlFor='name'>Name</label>
            <input id='name' className='input' type='text' name='name' defaultValue={name} onBlur={handleChange} />
          </div>
          <div className='field'>
            <label className='label' htmlFor='email'>Email Address</label>
            <input id='email' className='input' type='email' defaultValue={email} onBlur={handleChange} />
          </div>
          <div className="field">
            <label className="label" htmlFor="message">Message</label>
            <textarea className="textarea" id="message" rows="3" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className="is-danger">{errorMessage}</p>
            </div>
          )}
          <button className="button is-medium is-primary is-fullwidth" data-testid="button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );

  }

export default Contact;