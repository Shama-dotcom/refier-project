import './LogIn.css';

function LogIn() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src="https://tse4.mm.bing.net/th?id=OIP.vGt0Cz2Qv8NQMWu2mFAO2gHaGJ&pid=Api&P=0&w=187&h=155" className='profile-img'/>
            </div>
          </div>
          <div>
            <h1>Login Here</h1>
            <div>
              <input type="text" placeholder="user name" className="name" />
            </div>
            <div className="second-input">
              <input type="password" placeholder="user name" className="name" />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>

            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
