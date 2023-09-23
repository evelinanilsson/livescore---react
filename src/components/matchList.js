import { Link } from "react-router-dom";

const MatchList = (props) => {
    const fixture = props.fixture;
    

    return (
        <>
            <div className="coming-fixtures justify-items-center">
                {fixture.response.map((item) => (
                    <Link to ={`/match/${item.fixture.id}`} key={item.fixture.id}>
                    <div className="fixture gap-x-2.5 ">
                        <div className="date-time">
                            <p>{item.fixture.date.slice(5,10)}</p>
                            <p>{item.fixture.date.slice(11,16)}</p>
                        </div>
                        <div className="live-status center py-1">
                            <p className="text-color-green">{item.fixture.status.elapsed}'</p>
                            <p>{item.fixture.status.long}</p>
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
                        <div className="score">
                            <p>{item.score.fulltime.home}</p>
                            <p>{item.score.fulltime.away}</p>
                        </div>
                        <div className="score text-right">
                            <p>({item.score.halftime.home})</p>
                            <p>({item.score.halftime.away})</p>
                        </div>
                        <div>
                            <p>{item.league.name}</p>
                            <p>{item.league.country}</p>
                        </div>
                        <div className='mr-px'>
                            <p>{item.fixture.venue.name}</p>
                            <p>{item.fixture.venue.city}</p>
                        </div>

                    </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default MatchList;