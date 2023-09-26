import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


export function MatchDetails() {

    const params = useParams();

    const matchID = params.matchID;

    // const results = data.response.filter((match) => {
    //   return match.fixture.id == matchID
    // })

  return (
    <div className='bg-base-100'>MatchDetails {params.matchID}
    <p></p>
    </div>
  )
}
