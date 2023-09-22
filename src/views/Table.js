// import { fetchLeageTable } from "../api/fetchData";
import { useEffect } from "react";
import { table } from "../api/dummy-data-table";

export function CurrentTable () {

    console.log(table)
    const standing = table.response;
    console.log(standing)
    
    console.log(standing[0])
    const standings = standing[0].league.standings[0]
    console.log(standings)
    
    const league = standing[0].league
    console.log(league)
    //   const fetchData = async () => {
    //   const table = await fetchLeageTable();
    //   console.log(table)
    // }

    // useEffect(() => {
    //   fetchData();
    // });
    return (
        <div className="bg-base-100 content flex flex-col">
            <div>League Table</div>
             <div className="intro row bg-base-300">
            <img src={league.logo}></img>
            <span>
                <h1 className="text-4xl font-semibold">{league.name}</h1>
                <span className="row">
                    <p>{league.country}</p>
                    <img src={league.flag}height={25} width={25}></img>
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
                {standings.map((item, i) => {
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
    )   
  }