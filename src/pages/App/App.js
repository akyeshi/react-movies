import { useState }  from 'react'; 
import LoginPage from '../LoginPage/LoginPage';
import './App.css';


function App() {
  const [user, setUser] = useState(null); 

  return (
    <div className="App">
      <h1>React Movies</h1>
      <LoginPage />

    </div>
  );
}

export default App;
