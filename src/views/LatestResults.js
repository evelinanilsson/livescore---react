import { useEffect, useState } from "react";
// import { fetchResults } from "../api/fetchData"
import { results } from "../api/dummy-data-results";
import { Link } from "react-router-dom";
import MatchList from "../components/matchList";
import LeagueIntro from "../components/leagueIntro";
import { leagues } from "../components/leaguesObject";



export function LatestResults ({currentDate, previousDate}) {

    // const [league, setLeague] = useState(leagues[0].id)
    // const [results, setResults] = useState([])
    

    // const fetchData = async () => {
    //     const result = await fetchResults(currentDate, previousDate, league);
    //     setResults(result)
    // }

    // useEffect(() => {
    //     fetchData();
    // },[league])
  

    // function changeLeague(e) {
    //   setLeague(e.target.value)
    //  }
   
    return (
      <div className="content bg-base-100 justify-items-center p-1.5"> 
        <h1 className="font-semibold">Latest Results</h1>
        <div>
          <select 
              // onChange={changeLeague}
              className="select select-bordered w-full max-w-xs">
              <option value="" disabled selected>Choose League</option>
              {leagues.map((input) => (
                  <option value={input.id}>{input.title}</option>
              ))}
          </select>
        </div>
        {results.length === 0 ? (
            <p>Loading...</p>
        ) : (
          <>
          <LeagueIntro fixture={results} />
          <MatchList fixture={results}  />
          </>
        )}
        

  </div>
    )
  }