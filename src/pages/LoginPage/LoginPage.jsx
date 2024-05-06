import { useState } from 'react'; 

export default function LoginPage() {
  return (
    <div className="login-container">
      <form>
        <label>Username</label>
        <input 
          type="text"
          name="name"
          // value={}
          // onChange={}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}