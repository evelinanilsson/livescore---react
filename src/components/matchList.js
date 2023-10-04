import { useState } from "react";
import { Link } from "react-router-dom";

const MatchList = (props) => {
    const fixture = props.fixture;
    
    return (
        <>
            <div className="">
                {fixture.response.length === 0 ? (
                    <div>No Live Matches right now...</div>
                ) : (
                    <div>
                        <div className="grid grid-cols-8 md:grid-cols-12 bg-neutral text-white">
                            <p>Date</p>
                            <p className="col-span-3">Teams</p>
                            <p className="text-center">Match status</p>
                            <span>
                                <p className="text-center">Score</p>
                                <p className="justify-self-end text-center">FT</p>
                            </span>
                            <span className="text-center">
                                <p>Score</p>
                                <p className="justify-self-end">HT</p>
                            </span>
                            <p className='col-span-2 invisible md:visible'>League</p>
                            <p className='col-span-3 invisible md:visible'>Venue</p>
                        </div>
                    
                        {fixture.response.map((item, i) => (
                        <div key={i} className="grid grid-cols-8 md:grid-cols-12 border-y-2 border-inherit items-center pt-0.5 hover:bg-neutral-100">
                            <div className="">
                                <p>{item.fixture.date.slice(5,10)}</p>
                                <p>{item.fixture.date.slice(11,16)}</p>
                            </div>
                            
                            <div className="col-span-3">
                                <span className="row">
                                    <img src={item.teams.home.logo} alt={item.teams.home.logo} height={25} width={25}></img>
                                    <p className="">{item.teams.home.name}</p>
                                </span>
                                <span className="row py-1">
                                    <img src={item.teams.away.logo} alt={item.teams.away.logo} height={25} width={25}></img>
                                    <p className="">{item.teams.away.name}</p>
                                </span>
                            </div>
                            <div className="text-center">
                                <p className="text-green-500">{item.fixture.status.elapsed}</p>
                                <p>{item.fixture.status.long}</p>
                            </div>
                            <div div className="text-center">
                                <p>{item.score.fulltime.home}</p>
                                <p>{item.score.fulltime.away}</p>
                            </div>
                            <div className="text-center">
                                <p>({item.score.halftime.home})</p>
                                <p>({item.score.halftime.away})</p>
                            </div>
                        
                            <div className='col-span-2 invisible md:visible'>
                                <p>{item.league.name}</p>
                                <p>{item.league.country}</p>
                            </div>
                            
                            <div className='col-span-3 invisible md:visible'>
                                <p>{item.fixture.venue.name}</p>
                                <p>{item.fixture.venue.city}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default MatchList;