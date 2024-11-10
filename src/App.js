import { Route, Routes } from 'react-router-dom';
import RaceDetailsPage from './pages/RaceDetailsPage';
import SeasonRacesPage from './pages/SeasonRacesPage';
import SeasonsPage from './pages/SeasonsPage';
import './App.css';
import { CarIcon } from './utils/icons';


function App() {
  return (
    <>
      <header className="flex justify-between items-center h-[100px] bg-red-600 px-6 md:px-12 lg:px-24 shadow-lg">
        <p className="text-white text-3xl font-bold tracking-wide">Formula 1</p>
        <div className="flex items-center space-x-4">
          <CarIcon />
        </div>
      </header>
      <Routes>
        <Route path='/' element={<SeasonsPage />} />
        <Route path='/season/:seasonId' element={<SeasonRacesPage />} />
        <Route path='/season/:seasonId/:roundId' element={<RaceDetailsPage />} />
      </Routes>
    </>
  )

}

export default App;
