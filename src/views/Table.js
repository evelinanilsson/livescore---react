
import { useEffect, useState } from "react";
import { standings } from "../api/dummy-data-table";
import { fetchLeageTable } from "../api/fetchData";

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
        <div className="bg-base-100 content flex flex-col">
            {standings.length === 0 ? (
                <p>Loading...</p>
            ) : (
                
                <div>League Table
             <div className="intro row bg-base-300">
            <img src={standings.response[0].league.logo}></img>
            <span>
                <h1 className="text-4xl font-semibold">{standings.response[0].league.name}</h1>
                <span className="row">
                    <p>{standings.response[0].league.country}</p>
                    <img src={standings.response[0].league.flag}height={25} width={25}></img>
                </span>
            </span>
            </div>
            <div className="m-auto p-px">
            <table className="table-auto border-spacing-x-0.5">
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
                        <tr key={i}>
                            <td>{item.rank}</td>
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