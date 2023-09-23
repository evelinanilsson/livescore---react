import { useEffect, useState } from "react";
import { fetchResults } from "../api/fetchData"
import { results } from "../api/dummy-data-results";
import { Link } from "react-router-dom";
import MatchList from "../components/matchList";
import LeagueIntro from "../components/leagueIntro";

export function LatestResults () {

  
    // const [results, setResults] = useState([])

    // const fetchData = async () => {
    //     const result = await fetchResults(league);
    //     setResults(result)
    // }

    // useEffect(() => {
    //     fetchData()
    // },[])

    function ChooseLeague() {
      const leagues = [
        {
        title: "Premier League",
        id: 39
    }, 
    {
        title: "Serie A",
        id: 135
    },
    {
        title: "La Liga",
        id: 140
    }
    ]
    
    const [league, setLeague] = useState(leagues[0].id)
    console.log(league)
      
          return (
              <div>
                  <p>Choose league</p>
                  <select 
                  onChange={(e) => setLeague(leagues.find((element) => e.target.value === element.id))}
                  placeholder ="Choose league">
                      <option value="" disabled selected>Choose League</option>
                      {leagues.map((data) => (
                          <option value={data.id}>{data.title}</option>
                      ))}
                  </select>
              </div>
          )
      }
    return (
      <div className="content bg-base-100 justify-items-center">
        <ChooseLeague />
        {results.length === 0 ? (
            <p>Loading...</p>
        ) : (
          <>
          <LeagueIntro fixture={results} title="Latest Results" />
          <MatchList fixture={results}  />
          </>
        )}
        

  </div>
    )
  }