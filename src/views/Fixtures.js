
import { fetchLeagueFixtures } from '../api/fetchData';
import { useEffect, useState } from 'react';
import { fixture } from '../api/dummy-data-fixture';
import { Link, useNavigate } from 'react-router-dom';
import MatchList from '../components/matchList';
import LeagueIntro from '../components/leagueIntro';


export function ComingFixtures () {

    // const navigate = useNavigate();
    // const onClick = () => {
    //     navigate(`match/${item.fixture.id}`)
    // }

    // const [fixture, setFixtures] = useState([])

    // const fetchData = async () => {
    //   const result = await fetchLeagueFixtures();
    //   setFixtures(result)
    // }
    
    // useEffect(() => {
    //   fetchData();
    // }, []);

    function ChooseLeague() {
    
        const [league, setLeague] = useState("39")
        
        const leagues = [
            {
            title: "Premier League",
            id: "39"
        }, 
        {
            title: "Serie A",
            id: "135"
        },
        {
            title: "La Liga",
            id: "140"
        }
        ]
        console.log(leagues)
        console.log(league)
            return (
                <div>
                    <p>Choose league</p>
                    <select 
                    onChange={(e) => setLeague(e.target.id)}
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
        <div className="content bg-base-100">
            <ChooseLeague />
        {fixture.length === 0 ? (
            <p>loading</p>
        ) : (
            <>
                <LeagueIntro fixture={fixture} title="Coming Fixtures"/>
                <MatchList fixture={fixture} />
            </>
        )}
            

        </div>
    )
}