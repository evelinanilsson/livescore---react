const LeagueIntro = (props) => {
    const fixture = props.fixture;

    return (
        <div className="intro row bg-base-300 mt-1">
            <img src={fixture.response[0].league.logo}></img>
            <span className="ml-2">
                <h1 className="text-4xl font-semibold">{fixture.response[0].league.name}</h1>
                <span className="row">
                    <p>{fixture.response[0].league.country}</p>
                    <img src={fixture.response[0].league.flag}height={25} width={25}></img>
                </span>
            </span>
        </div>
    )
}

export default LeagueIntro;