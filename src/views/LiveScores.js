
import { useEffect, useState } from 'react';
import { data } from '../api/dummy-data';

// import { fetchLiveFixtures } from '../api/fetchData';

 export function LiveScores () {

  // const [data, setData] = useState([]);

  //   const fetchData = async () => {
  //     const result = await fetchLiveFixtures();
  //     setData(result)
  //   }
    
  //   useEffect(() => {
  //     fetchData();
  //   }, []);


    return (
      <div className="content">
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        
          <div className="fixture-table bg-base-100 m-auto">
            <h1 className='bg-gray-100 px-10'>Live matches</h1> 
            {data.response.map((fixture) => (
              <div className="live-fixture">
              <div className="live-league bg-base-200 row">
                <img src={fixture.league.logo} width={35} alt={fixture.league.name}/>
                <p>League: {fixture.league.name}</p>
              </div>
              
              <div className="live-teams row">
                <div className="live-status center py-1">
                  <p className="text-color-green">{fixture.fixture.status.elapsed}'</p>
                </div>
              <div className="teams">
                    <span className="row p-2">
                        <img src={fixture.teams.home.logo} alt={fixture.teams.home.logo} height={25} width={25}></img>
                        <p>{fixture.teams.home.name}</p>
                    </span>
                    <span className="row p-2">
                        <img src={fixture.teams.away.logo} alt={fixture.teams.away.logo} height={25} width={25}></img>
                        <p>{fixture.teams.away.name}</p>
                    </span>
              </div>
              <div>
                <span>
                <p className="p-2 text-right">{fixture.goals.home}</p>
                <p className="p-2">{fixture.goals.away}</p>
                </span>
              </div>
              </div>
              </div>          
          ))}
          </div>
        
      )}
        </div>
    )
  }