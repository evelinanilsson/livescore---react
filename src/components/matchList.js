import { useState } from "react";
import { Link } from "react-router-dom";

const MatchList = (props) => {
    const fixture = props.fixture;
    const [visible, setVisible] = useState(false)
    

    return (
        <>
            <div className="">
                {fixture.response.length === 0 ? (
                    <div>No Live Matches right now...</div>
                ) : (
                    <div>
                        {fixture.response.map((item) => (
                    // <Link to ={`/match/${item.fixture.id}`} key={item.fixture.id}>
                    <div className="grid grid-cols-12 border-y-2 border-inherit items-center pt-0.5 hover:bg-neutral-100"
                        onClick={() => setVisible(!visible)} 
                    >
                        <div className="">
                            <p>{item.fixture.date.slice(5,10)}</p>
                            <p>{item.fixture.date.slice(11,16)}</p>
                        </div>
                        
                        <div className="col-span-3">
                            <span className="row">
                                <img src={item.teams.home.logo} alt={item.teams.home.logo} height={25} width={25}></img>
                                <p>{item.teams.home.name}</p>
                            </span>
                            <span className="row">
                                <img src={item.teams.away.logo} alt={item.teams.away.logo} height={25} width={25}></img>
                                <p>{item.teams.away.name}</p>
                            </span>
                        </div>
                        <div className="text-center">
                            <p className="text-color-green">{item.fixture.status.elapsed}</p>
                            <p>{item.fixture.status.long}</p>
                        </div>
                        <div className="justify-self-end mr-1">
                            <p>{item.score.fulltime.home}</p>
                            <p>{item.score.fulltime.away}</p>
                        </div>
                        <div className="">
                            <p>({item.score.halftime.home})</p>
                            <p>({item.score.halftime.away})</p>
                        </div>
                       
                        <div className='col-span-2'>
                            <p>{item.league.name}</p>
                            <p>{item.league.country}</p>
                        </div>
                        
                        <div className='col-span-3'>
                            <p>{item.fixture.venue.name}</p>
                            <p>{item.fixture.venue.city}</p>
                        </div>
                    </div>
                    // </Link>
                ))}
                    </div>
                )
                }
                
            </div>
        </>
    );
}

export default MatchList;