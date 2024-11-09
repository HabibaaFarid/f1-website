import { Route, Routes } from 'react-router-dom';
import RaceDetailsPage from './pages/RaceDetailsPage';
import SeasonRacesPage from './pages/SeasonRacesPage';
import SeasonsPage from './pages/SeasonsPage';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<SeasonsPage />} />
      <Route path='/season/:seasonId' element={<SeasonRacesPage />} />
      <Route path='/season/:seasonId/:roundId' element={<RaceDetailsPage />} />
    </Routes>
  )

}

export default App;
