
import { fetchLeagueFixtures } from '../api/fetchData';
import { useEffect, useState } from 'react';
import { fixture } from '../api/dummy-data-fixture';


export function ComingFixtures () {


    // const [fixture, setFixtures] = useState([])

    // const fetchData = async () => {
    //   const result = await fetchLeagueFixtures();
    //   setFixtures(result)
    // }
    
    // useEffect(() => {
    //   fetchData();
    // }, []);
    
    return (
        <div className="content bg-base-100">
        {fixture.length === 0 ? (
            <p>loading</p>
        ) : (
            <div>Coming Fixtures
            <div className="intro row bg-base-300">
            <img src={fixture.response[0].league.logo}></img>
            <span>
                <h1 className="text-4xl font-semibold">{fixture.response[0].league.name}</h1>
                <span className="row">
                    <p>{fixture.response[0].league.country}</p>
                    <img src={fixture.response[0].league.flag}height={25} width={25}></img>
                </span>
            </span>
            </div>
        
        <div className="coming-fixtures justify-items-center">
            {fixture.response.map((item, i) => (
                <div className="fixture gap-x-2.5 " key={i}>
                    <div className="date-time">
                        <p>{item.fixture.date.slice(5,10)}</p>
                        <p>{item.fixture.date.slice(11,16)}</p>
                    </div>

                <div className="teams mx-8">
                    <span className="row">
                        <img src={item.teams.home.logo} alt={item.teams.home.logo} height={25} width={25}></img>
                        <p>{item.teams.home.name}</p>
                    </span>
                    <span className="row">
                        <img src={item.teams.away.logo} alt={item.teams.away.logo} height={25} width={25}></img>
                        <p>{item.teams.away.name}</p>
                    </span>
                </div>
                <div className='mr-px'>
                    <p>{item.fixture.venue.name}</p>
                    <p>{item.fixture.venue.city}</p>
                </div>

                </div>
            ))}
        </div>
        </div>
        )}
            

        </div>
    )
}