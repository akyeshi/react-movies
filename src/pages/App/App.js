import { useState }  from 'react'; 
import { Routes, Route } from 'react-router-dom'; 
import LoginPage from '../LoginPage/LoginPage';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorsListPage from '../ActorsListPage/ActorsListPage';


function App() {
  const [user, setUser] = useState(null); 

  return (
    <>
      { user ? (
      <>
        <NavBar user={user} />
        <Routes>
          <Route path="/movies" element={<MoviesListPage />}></Route>
          <Route path="/movies/:movieName" element={<MovieDetailPage />}></Route>
          <Route path="actors" element={<ActorsListPage />}></Route>
        </Routes>
      </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </>
  );
}

export default App;
