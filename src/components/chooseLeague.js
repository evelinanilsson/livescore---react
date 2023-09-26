import { useState } from "react";

const ChooseLeague = (props) => {

    const leagues = props.leagues;

    const [league, setLeague] = useState(leagues[0].id)
    
          return (
            
              <div>
                  <select 
                  className="select select-bordered w-full max-w-xs"
                  onChange={(e) => setLeague(leagues.find((element) => e.target.value === element.id))}
                  placeholder ="Choose league">
                      <option value="" disabled selected>Choose League</option>
                      {leagues.map((data) => (
                          <option value={data.id}>{data.title}</option>
                      ))}
                  </select>
              </div>
          )
}

export default ChooseLeague;