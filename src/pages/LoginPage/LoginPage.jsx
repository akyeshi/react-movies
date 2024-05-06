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
      <p>Please pick a username:</p>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}