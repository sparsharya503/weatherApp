import { Routes,Route } from 'react-router-dom';
import './App.css';
import WeatherPage from './pages/WeatherPage';
import HomePage from './pages/HomePage';
import NavbarComponent from './components/NavbarComponent';
function App() {
  return (
    <>
    <NavbarComponent />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/weather" element={<WeatherPage />} />
    </Routes>
    </>
  );
}

export default App;
