import { useState } from "react";




export const fetchLiveFixtures = async () => {
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '0aeb4c7aa69d1abb30f937088476c576',
		    'X-RapidAPI-Host': 'v3.football.api-sports.io'
	    },
    };

    const result = fetch('https://v3.football.api-sports.io//fixtures?live=all',
    options
    )
    .then((response) => response.json())
    .then((response) => {
        return response;
    })
    .catch((err) => console.error(err));

    return result;
}

export const fetchLeagueFixtures = async (currentDate, comingDate) => {

    console.log(currentDate)
    console.log(comingDate)

    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '0aeb4c7aa69d1abb30f937088476c576',
		    'X-RapidAPI-Host': 'v3.football.api-sports.io'
	    },
    };

    const result = fetch(`https://v3.football.api-sports.io/fixtures?from=${currentDate}&to=${comingDate}&season=2023&league=39`,
    options
    )
    .then((response) => response.json())
    .then((response) => {
        return response;
    })
    .catch((err) => console.error(err));

    return result;
}

// export async function fetchLeagueFixtures () {
//     let result = await fetch("https://v3.football.api-sports.io/fixtures?from=2023-09-17&to=2023-09-25&season=2023&league=39", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "v3.football.api-sports.io",
//             "x-rapidapi-key": "0aeb4c7aa69d1abb30f937088476c576"
//         }
//     })
//     let fixtures = await result.json();
//     return fixtures;
// }

export const fetchLeageTable = async () => {
    const result =
    fetch("https://v3.football.api-sports.io/standings?league=39&season=2023", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "0aeb4c7aa69d1abb30f937088476c576"
	}
})
    .then((response) => response.json())
    .then((response) => {
        return response;
    })
    .catch((err) => console.error(err));

    return result;
}

export const fetchResults = async (league) => {
    const result = fetch("https://v3.football.api-sports.io/fixtures?from=2023-09-16&to=2023-09-18&season=2023&league=" + league, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
		    "x-rapidapi-key": "0aeb4c7aa69d1abb30f937088476c576"
        }
    })

    .then((response) => response.json())
    .then((response) => {
        return response;
    })
    .catch((err) => console.error(err));

return result;
}