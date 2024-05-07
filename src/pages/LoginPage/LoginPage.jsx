import { useState } from 'react';

export default function LoginPage({ setUser }) {

  const [userData, setUserData] = useState({
    name: ''
  });
  function handleSubmit(e) {
    e.preventDefault();
    setUser(userData.name);
  }

  return (
    <div className="login-container">
      <div className="login-text-area">
        <h3>You Are in the Theater, Please Turn Off All Your Devices and Enjoy the Show!</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
              required
              />
          </div>
          <button className="login-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}