import React, {useEffect, useState} from 'react';
import API from './API';

const listmovie = () => {
   const [movies, setMovies] = useState([]);

   useEffect(()=>{
      getMovies();
   },[]);

   const getMovies = async()=>{
      let res = await API.get('/movie/all');
      setMovies(res.data.data);
   }

   const rateMovie = async(id, rating)=>{
      await API.post('/rating/add', {
         movie: id,
         user: "guest",
         rating
      });
      alert("Rated");
   }

   return (
      <div className="container">
         <h2>Movies</h2>

         {movies.map(m=>(
            <div key={m._id}>
               <img src={m.image} width="150"/>
               <h3>{m.name}</h3>
               <p>Cast: {m.cast}</p>
               <p>OTT: {m.ott}</p>

               <button onClick={()=>rateMovie(m._id, 5)}>⭐ 5</button>
            </div>
         ))}
      </div>
   )
}

export default listmovie;