import React from 'react';
import './Jobs.css';
import { Form } from 'react-bootstrap';
import { Button, Input } from '@material-ui/core';

function Jobs() {
  return (
    <div className="job-container">
      <div className="job-filter-panel">
        <div className="job-filter-first">
          <div className="filter-header">
            <h3 className="title">Filters</h3>
          </div>
          <Form className="filter-content">
            <label>Category</label>
            <div className="multiselect-box">
              <div>
                <Input
                  className="filter-placeholder"
                  placeholder="eg- Sales, Marketing"
                  required
                  type="text"
                ></Input>
              </div>
              <label>Location</label>

              <div>
                <Input
                  className="filter-placeholder"
                  placeholder="eg-Delhi, Mumbai"
                  required
                  type="text"
                ></Input>
              </div>
              <div className="filter-end">
                <label id="wfh">Work from Home</label>
                <label id="oi">Only Internships</label>
                <label id="dmmp">Desired Minimum Monthly Pay</label>
              </div>
            </div>
          </Form>
        </div>
      </div>

      <div className="job-panel-2">
        <div className="job-panel-2-i">
          <div className="panel-middle">
            <div className="job-list">
              <div className="job-box">
                <div className="job-header-title">
                  <h3 className="title-2">
                    Business Development Executive(Only for Female Candidates)
                  </h3>
                  <p className="title-2-i">Easeassist</p>
                </div>
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.nWYs4DJke54ETNJIJ6JeJwHaHZ&pid=Api&P=0&w=191&h=191"
                  className="middle-img" 
                />
              </div>

              <div className="job-body">
                <h3 className="body-start">Remote</h3>
                <h3 className="body-start">0+ years experience</h3>
              </div>
              <p className="body-end">
                Immediate Joining !! Fast Growing Business Solutions Startup is
                looking for passionate Female Business Development Professionals
                who would l...
              </p>
            </div>
            <div className="body-foot">
              <div className="foot-start">
                <h3 className="foot-1">REMOTE</h3>
              </div>
              <div className="foot-start">
                <h3 className="foot-2">Full-Time</h3>
              </div>
              <div className="foot-end">
                <h3 className="foot-3">Apply Now</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="job-panel-2-ii">
          <div className="panel-middle">
            <div className="job-list">
              <div className="job-box">
                <div className="job-header-title">
                  <h3 className="title-2">Customer Care & Events Executive </h3>
                  <p className="title-2-i">Easeassist</p>
                </div>
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.nWYs4DJke54ETNJIJ6JeJwHaHZ&pid=Api&P=0&w=191&h=191"
                  className="middle-img2"
                />
              </div>

              <div className="job-body">
                <h3 className="body-start">Gurugram</h3>
                <h3 className="body-start">1+ years experience</h3>
              </div>
              <p className="body-end">
                Looking for a Customer Centric Professional responsible for
                supporting the design and delivery of the product/Event
                experience for our custo...
              </p>
            </div>
            <div className="body-foot">
              <div className="foot-start">
                <h3 className="foot-1">INOFFICE</h3>
              </div>
              <div className="foot-start">
                <h3 className="foot-2">Full-Time</h3>
              </div>
              <div className="foot-end">
                <h3 className="foot-3">Apply Now</h3>
              </div>
            </div>
          </div>

          <div className="job-panel-2-ii">
            <div className="panel-middle">
              <div className="job-list">
                <div className="job-box">
                  <div className="job-header-title">
                    <h3 className="title-2">Enterprise Sales Manager</h3>
                    <p className="title-2-i">Easeassist</p>
                  </div>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.nWYs4DJke54ETNJIJ6JeJwHaHZ&pid=Api&P=0&w=191&h=191"
                    className="middle-img2"
                  />
                </div>

                <div className="job-body">
                  <h3 className="body-start">Hyderabad/Pune/Banglore/Kochi</h3>
                  <h3 className="body-start">2+ years experience</h3>
                </div>
                <p className="body-end">
                  Resourceful and experienced professional whose primary
                  responsibility is to research and pursue new business leads,
                  work on business proposa...
                </p>
              </div>
              <div className="body-foot">
                <div className="foot-start">
                  <h3 className="foot-1">INOFFICE</h3>
                </div>
                <div className="foot-start">
                  <h3 className="foot-2">Full-Time</h3>
                </div>
                <div className="foot-end">
                  <h3 className="foot-3">Apply Now</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="job-panel-2-ii">
            <div className="panel-middle">
              <div className="job-list">
                <div className="job-box">
                  <div className="job-header-title">
                    <h3 className="title-2">Area Sales Manager </h3>
                    <p className="title-2-i">V4U HR SOLUTIONS.COM</p>
                  </div>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.nWYs4DJke54ETNJIJ6JeJwHaHZ&pid=Api&P=0&w=191&h=191"
                    className="middle-img2"
                  />
                </div>

                <div className="job-body">
                  <h3 className="body-start">
                    Karnataka- Bangalore, Mangalore, Udupi, Hubli, Dharwad,
                    Bellary, Shimoga, Chitradurga, Chikmagalur, Karwar, Haveri,
                    Bidar,Tumkur
                  </h3>
                  <h3 className="body-start">0+ years experience</h3>
                </div>
                <p className="body-end">
                  Top ranked company in edu tech industry
                </p>
              </div>
              <div className="body-foot">
                <div className="foot-start">
                  <h3 className="foot-1">INOFFICE</h3>
                </div>
                <div className="foot-start">
                  <h3 className="foot-2">Full-Time</h3>
                </div>
                <div className="foot-end">
                  <h3 className="foot-3">Apply Now</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="job-panel-2-ii">
            <div className="panel-middle">
              <div className="job-list">
                <div className="job-box">
                  <div className="job-header-title">
                    <h3 className="title-2">Lead Generation</h3>
                    <p className="title-2-i">Easeassist</p>
                  </div>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.nWYs4DJke54ETNJIJ6JeJwHaHZ&pid=Api&P=0&w=191&h=191"
                    className="middle-img2"
                  />
                </div>

                <div className="job-body">
                  <h3 className="body-start">Bangalore, Jodhpur, Pune</h3>
                  <h3 className="body-start">0+ years experience</h3>
                </div>
                <p className="body-end">
                  Looking for an ambitious and dynamic professional with 1-6
                  Years of Experience in Inside Lead Generation/Sales/Business
                  Development for Bang...
                </p>
              </div>
              <div className="body-foot">
                <div className="foot-start">
                  <h3 className="foot-1">INOFFICE</h3>
                </div>
                <div className="foot-start">
                  <h3 className="foot-2">Full-Time</h3>
                </div>
                <div className="foot-end">
                  <h3 className="foot-3">Apply Now</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="job-panel-2-ii">
            <div className="panel-middle">
              <div className="job-list">
                <div className="job-box">
                  <div className="job-header-title">
                    <h3 className="title-2">Project Manager </h3>
                    <p className="title-2-i">Easeassist</p>
                  </div>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.nWYs4DJke54ETNJIJ6JeJwHaHZ&pid=Api&P=0&w=191&h=191"
                    className="middle-img2"
                  />
                </div>

                <div className="job-body">
                  <h3 className="body-start">Raigarh, Chattisgarh</h3>
                  <h3 className="body-start">10+ years experience</h3>
                </div>
                <p className="body-end">
                  A key professional having responsibility of managing a project
                  successfully during its various stages in its life cycle
                  consisting of initia...
                </p>
              </div>
              <div className="body-foot">
                <div className="foot-start">
                  <h3 className="foot-1">INOFFICE</h3>
                </div>
                <div className="foot-start">
                  <h3 className="foot-2">Full-Time</h3>
                </div>
                <div className="foot-end">
                  <h3 className="foot-3">Apply Now</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="job-panel-2-ii">
            <div className="panel-middle">
              <div className="job-list">
                <div className="job-box">
                  <div className="job-header-title">
                    <h3 className="title-2">Engineer Mechanical </h3>
                    <p className="title-2-i">Easeassist</p>
                  </div>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.nWYs4DJke54ETNJIJ6JeJwHaHZ&pid=Api&P=0&w=191&h=191"
                    className="middle-img2"
                  />
                </div>

                <div className="job-body">
                  <h3 className="body-start">Raigarh, Chattisgarh</h3>
                  <h3 className="body-start">5+ years experience</h3>
                </div>
                <p className="body-end"></p>
              </div>
              <div className="body-foot">
                <div className="foot-start">
                  <h3 className="foot-1">INOFFICE</h3>
                </div>
                <div className="foot-start">
                  <h3 className="foot-2">Full-Time</h3>
                </div>
                <div className="foot-end">
                  <h3 className="foot-3">Apply Now</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="job-panel-2-ii">
            <div className="panel-middle">
              <div className="job-list">
                <div className="job-box">
                  <div className="job-header-title">
                    <h3 className="title-2">Operations Internship at Refier</h3>
                    <p className="title-2-i">Easeassist</p>
                  </div>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.nWYs4DJke54ETNJIJ6JeJwHaHZ&pid=Api&P=0&w=191&h=191"
                    className="middle-img2"
                  />
                </div>

                <div className="job-body">
                  <h3 className="body-start">Remote</h3>
                  <h3 className="body-start">0+ years experience</h3>
                </div>
                <p className="body-end">
                  Looking for full-time passouts who are looking to build a
                  career in Operations and Customer Experience
                </p>
              </div>
              <div className="body-foot">
                <div className="foot-start">
                  <h3 className="foot-1">REMOTE</h3>
                </div>
                <div className="foot-start">
                  <h3 className="foot-2">Full-Time</h3>
                </div>
                <div className="foot-end">
                  <h3 className="foot-3">Apply Now</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="job-panel-2-ii">
            <div className="panel-middle">
              <div className="job-list">
                <div className="job-box">
                  <div className="job-header-title">
                    <h3 className="title-2">HR </h3>
                    <p className="title-2-i">Easeassist</p>
                  </div>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.nWYs4DJke54ETNJIJ6JeJwHaHZ&pid=Api&P=0&w=191&h=191"
                    className="middle-img2"
                  />
                </div>

                <div className="job-body">
                  <h3 className="body-start">Remote</h3>
                  <h3 className="body-start">0+ years experience</h3>
                </div>
                <p className="body-end">
                  The Personnel will be responsible for managing the entire HR
                  Functions of Payroll, Compliances, Hiring, Learning, Employee
                  relations, Organi...
                </p>
              </div>
              <div className="body-foot">
                <div className="foot-start">
                  <h3 className="foot-1">INOFFICE</h3>
                </div>
                <div className="foot-start">
                  <h3 className="foot-2">Full-Time</h3>
                </div>
                <div className="foot-end">
                  <h3 className="foot-3">Apply Now</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="job-end-panel">
        <div className="panel-last">
          <div className="panel-last-top">
            <h3>Confused?</h3>
            <h3>We can help you</h3>
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
                marginTop: '10px',
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
}

export default Jobs;
