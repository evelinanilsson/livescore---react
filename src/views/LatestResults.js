import { useEffect, useState } from "react";
import { fetchResults } from "../api/fetchData"
import { results } from "../api/dummy-data-results";

export function LatestResults () {

    // const [results, setResults] = useState([])

    // const fetchData = async () => {
    //     const result = await fetchResults();
    //     setResults(result)
    // }

    // useEffect(() => {
    //     fetchData()
    // },[])

    return (
      <div className="content bg-base-100 justify-items-center">
        {results.length === 0 ? (
            <p>Loading...</p>
        ) : (
            <div>Latest Results
      <div className="intro row bg-base-300">
        <img src={results.response[0].league.logo}></img>
        <span>
            <h1 className="text-4xl font-semibold">{results.response[0].league.name}</h1>
            <span className="row">
                <p>{results.response[0].league.country}</p>
                <img src={results.response[0].league.flag}height={25} width={25}></img>
            </span>
        </span>
      </div>
  
    <div className="results">
      {results.response.map((item, i) => (
        <div className="grid grid-cols-1 divide-y ">
          <div className="fixture gap-x-2.5" key={i}>
            <div className="date-time">
                <p>{item.fixture.date.slice(5,10)}</p>
            </div>

            <div className="teams">
              <span className="row ">
                  <img src={item.teams.home.logo} alt={item.teams.home.logo} height={25} width={25}></img>
                  <p>{item.teams.home.name}</p>
              </span>
              <span className="row">
                  <img src={item.teams.away.logo} alt={item.teams.away.logo} height={25} width={25}></img>
                  <p>{item.teams.away.name}</p>
              </span>
            </div>

            <div className="score">
              <p>{item.score.fulltime.home}</p>
              <p>{item.score.fulltime.away}</p>
            </div>
            <div className="score text-right">
              <p>({item.score.halftime.home})</p>
              <p>({item.score.halftime.away})</p>
            </div>
          </div>
        </div>
        ))}
  
        </div>
        </div>
        )}
        

  </div>
    )
  }