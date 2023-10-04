export const fetchLiveFixtures = async () => {
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '0aeb4c7aa69d1abb30f937088476c576',
		    'X-RapidAPI-Host': 'v3.football.api-sports.io'
	    },
    };

    const response = await fetch('https://v3.football.api-sports.io//fixtures?live=all',
    options);
    const result = await response.json();
    return result;
}

export const fetchLeagueFixtures = async (currentDate, comingDate, league) => {
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '0aeb4c7aa69d1abb30f937088476c576',
		    'X-RapidAPI-Host': 'v3.football.api-sports.io'
	    },
    };

    const response = await fetch(`https://v3.football.api-sports.io/fixtures?from=${currentDate}&to=${comingDate}&season=2023&league=${league}`,
    options);
    const result = await response.json();
    return result;
}


export const fetchLeageTable = async (league) => {
    const response = await fetch(`https://v3.football.api-sports.io/standings?league=${league}&season=2023`, 
    {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "0aeb4c7aa69d1abb30f937088476c576"
        }
    });
    const result = await response.json();
    return result;
}

export const fetchResults = async (currentDate, previousDate, league) => {
    const response = await fetch(`https://v3.football.api-sports.io/fixtures?from=${previousDate}&to=${currentDate}&season=2023&league=${league}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
		    "x-rapidapi-key": "0aeb4c7aa69d1abb30f937088476c576"
        }
    });

    const result = await response.json();
    return result;
}