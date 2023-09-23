
import { useEffect, useState } from 'react';
import { data } from '../api/dummy-data';
import { Link } from 'react-router-dom';
import MatchList from '../components/matchList';


// import { fetchLiveFixtures } from '../api/fetchData';

 export function LiveScores () {

  // const [data, setData] = useState([]);

  //   const fetchData = async () => {
  //     const result = await fetchLiveFixtures();
  //     setData(result)
  //   }
    
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

    return (
      <div className="content bg-base-100">
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
       
        <MatchList fixture={data} title="Live Fixtures"/>
         
      )}
        </div>
    )
  }