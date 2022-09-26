import React from 'react';
import './Contact.css';
import { Button, Input } from '@material-ui/core';

const Contact = () => {
  return (
    <div className="contact-us">
      <div className='contact-panel'>
        <div className="panel-last">
          <div className="panel-last-top">
            <h2>Connect With Us</h2>
          </div>
          <div className="panel-last-down">
            <div className="down-first">
              <label>FullName</label>
              <div className="multiselect-box">
                <span
                  aria-live="polite"
                  aria-atomic="false"
                  aria-relevant="additions text"
                  class="css-7pg0cj-a11yText"
                ></span>
                <div>
                  <Input
                    className="filter-placeholder"
                    style={{ width: '100%' }}
                    placeholder="John Doe"
                    required
                    type="text"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="down-second">
              <label>Email</label>

              <div className="multiselect-box">
                <span
                  aria-live="polite"
                  aria-atomic="false"
                  aria-relevant="additions text"
                  class="css-7pg0cj-a11yText"
                ></span>
                <div>
                  <Input
                    className="filter-placeholder"
                    style={{ width: '100%' }}
                    placeholder="Email"
                    required
                    type="email"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="down-third">
              <label>Mobile Number</label>

              <div className="down-number">
                <div>
                  <Input
                    className="filter-placeholder"
                    placeholder="+91"
                    style={{ width: '45px' }}
                    required
                    type="number"
                  >
                    ...
                  </Input>
                </div>
                <div>
                  <Input
                    className="filter-placeholder"
                    style={{ width: '115%', marginLeft: '10px' }}
                    required
                    type="number"
                  >
                    ...
                  </Input>
                </div>
              </div>
            </div>

            <Button
              variant="contained"
              style={{
                background: '#111',
                color: 'white',
                border: 'px solid #111',
                width: '100%',
                marginTop: '20px',
                marginBottom: '10px',
              
              }}
              onClick={() => {
                alert('Successfully Logged In');
              }}
            >
              Submit
            </Button>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;
