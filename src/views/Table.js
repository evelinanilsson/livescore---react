import { useEffect, useState } from "react";
import { standings } from "../api/dummy-data-table";
import { fetchLeageTable } from "../api/fetchData";
import { leagues } from "../components/leaguesObject";
import LeagueIntro from "../components/leagueIntro";

export function CurrentTable () {

    const [standings, setStandings] = useState([]);
    const [league, setLeague] = useState(leagues[0].id)

    const fetchData = () => {
        fetchLeageTable(league).then((result) => setStandings(result));
    }

    useEffect(() => {
        fetchData();
    }, [league]);

   
    function changeLeague(e) {
        setLeague(e.target.value)
       }

    return (
        <div className="bg-base-100">
            <h1 className="font-semibold">League Table</h1>
            <div>
                <select 
                    onChange={changeLeague}
                    className="select select-bordered w-full max-w-xs">
                    <option value="" disabled selected>Choose League</option>
                    {leagues.map((input) => (
                        <option key={input.id} value={input.id}>{input.title}</option>
                    ))}
                </select>
            </div>

            {standings.length === 0 ? (
                <p>Loading...</p>
            ) : (
                
            <div>
                <LeagueIntro fixture={standings} />
                <div className="m-auto p-px ">
                    <table className="table-md m-auto">
                        <thead>
                            <tr className="bg-neutral text-white">
                                <th>#</th>
                                <th>Logo</th>
                                <th>Team</th>
                                <th className="hidden md:table-cell">Wins</th>
                                <th className="hidden md:table-cell">Loss</th>
                                <th className="hidden md:table-cell">Draws</th>
                                <th>Games</th>
                                <th className="hidden md:table-cell">GoalsDiff</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                        {standings.response[0].league.standings[0].map((item, i) => {
                            return (
                                <tr key={i} className="border-y-2 px-1 hover:bg-neutral-100">
                                    <td className="px-1">{item.rank}</td>
                                    <td><img src={item.team.logo} alt={item.team.logo} height={25} width={25} /></td>
                                    <td>{item.team.name}</td>
                                    <td className="hidden md:table-cell">{item.all.win}</td>
                                    <td className="hidden md:table-cell">{item.all.lose}</td>
                                    <td className="hidden md:table-cell">{item.all.draw}</td>
                                    <td >{item.all.played}</td>
                                    <td className="hidden md:table-cell">{item.goalsDiff}</td>
                                    <td>{item.points}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            )}
        </div>
    )   
  }