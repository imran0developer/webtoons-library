import './App.css';
import { Route, Routes,  } from 'react-router-dom';
import WebtoonDetail from './pages/WebtoonDetail/WebtoonDetail';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';

function App() {
  return (
    <main>
      <Routes>

        <Route index element={<Home/>} />
        <Route exact path='home' element={<Home/>} />
        <Route path='webtoon/:id' element={<WebtoonDetail/>} />
        <Route path='favourites' element={<Favorites/>} />
        <Route path='auth/login' element={<Login/>} />
        <Route path='auth/register' element={<Register/>} />

      </Routes>


      
    </main>
  );
}

export default App;
