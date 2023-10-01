import './App.css';
import { useEffect, useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LiveScores } from './views/LiveScores';
import { ComingFixtures } from './views/Fixtures';
import { LatestResults } from './views/LatestResults';
import { CurrentTable } from './views/Table';
import { data } from './api/dummy-data';
import { results } from './api/dummy-data-results';
import Navbar from './components/navbar';
import Footer from './components/Footer';


function GetTodaysDate () {
  const today = new Date();
  const todayString = today.toISOString().slice(0, 10);
  
  return todayString;
}
  
function GetForwardDate () {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  const dateString = date.toISOString().slice(0, 10);
  
  return dateString;
}
  
function GetBackwardsDate () {
  const before = new Date();
  before.setDate(before.getDate() - 7);
  const beforeString = before.toISOString().slice(0, 10);
  
  return beforeString;
}

function App() {

  const [currentDate, setCurrentDate] = useState(GetTodaysDate())
  const [previousDate, setPreviousDate] = useState(GetBackwardsDate())
  const [comingDate, setComingDate] = useState(GetForwardDate())

  return (
    <div className="App w-full md:w-[700px] lg:w-[800px] m-auto">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route element={<LiveScores />} index />
          <Route element={<ComingFixtures currentDate={currentDate} comingDate={comingDate} />} path="fixtures"/>
          <Route element={<LatestResults currentDate={currentDate} previousDate={previousDate}/> } path="results" />
          <Route element={<CurrentTable /> } path="table"/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

    
  