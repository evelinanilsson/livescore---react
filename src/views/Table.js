
import { useEffect, useState } from "react";
import { standings } from "../api/dummy-data-table";
import { fetchLeageTable } from "../api/fetchData";
import { leagues } from "../api/leaguesObject";
import ChooseLeague from "../components/chooseLeague";
import LeagueIntro from "../components/leagueIntro";

export function CurrentTable () {

    // const [standings, setStandings] = useState([]);

    // const fetchData = async () => {
    //     const result = await fetchLeageTable();
    //     setStandings(result)
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

   
    console.log(standings)

    return (
        <div className="bg-base-100  p-1.5">
            <h1 className="font-semibold">League Table</h1>
            <ChooseLeague leagues={leagues}/>
            {standings.length === 0 ? (
                <p>Loading...</p>
            ) : (
                
            <div>
                <LeagueIntro fixture={standings} />
                <div className="m-auto p-px ">
                <table className="table-md border-spacing-x-1 m-auto ">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Logo</th>
                            <th>Team</th>
                            <th>Wins</th>
                            <th>Loss</th>
                            <th>Draws</th>
                            <th>Games</th>
                            <th>GoalsDiff</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                    {standings.response[0].league.standings[0].map((item, i) => {
                        return (
                            <tr key={i} className="border-y-2 px-1 hover:bg-neutral-100">
                                <td classname="px-1">{item.rank}</td>
                                <td><img src={item.team.logo} alt={item.team.logo} height={25} width={25} /></td>
                                <td>{item.team.name}</td>
                                <td>{item.all.win}</td>
                                <td>{item.all.lose}</td>
                                <td>{item.all.draw}</td>
                                <td>{item.all.played}</td>
                                <td>{item.goalsDiff}</td>
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