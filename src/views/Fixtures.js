
import { fetchLeagueFixtures } from '../api/fetchData';
import { useEffect, useState } from 'react';
import { fixture } from '../api/dummy-data-fixture';
import { Link, useNavigate } from 'react-router-dom';
import MatchList from '../components/matchList';
import LeagueIntro from '../components/leagueIntro';
import { leagues } from "../api/leaguesObject";
import ChooseLeague from '../components/chooseLeague';


export function ComingFixtures ({currentDate, comingDate}) {

    const [league, setLeague] = useState(leagues[0].id)
    // const [fixture, setFixtures] = useState([])

    // const fetchData = async () => {
    //   const result = await fetchLeagueFixtures(currentDate, comingDate);
    //   setFixtures(result)
    // }
    
    // useEffect(() => {
    //   fetchData();
    // }, []);

    // function changeLeague(e) {
    //   setLeague(e.target.value)
    //   fetchData()
     
    //   console.log(league)
    // }
    
       
    return (
        <div className="content bg-base-100 p-1.5">
            <h1 className="font-semibold ">Coming Fixtures</h1>
            
            <div className="">
            <select 
                // onChange={changeLeague}
                className="select select-bordered w-full max-w-xs p-px  ">
                <option value="" disabled selected>Choose League</option>
                {leagues.map((input) => (
                    <option value={input.id}>{input.title}</option>
                ))}
            </select>
            </div>
        {fixture.length === 0 ? (
            <p>loading</p>
        ) : (
            <>
                <LeagueIntro fixture={fixture} />
                <MatchList fixture={fixture} />
            </>
        )}
            

        </div>
    )
}