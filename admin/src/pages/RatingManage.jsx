import React, {useEffect, useState} from 'react';
import API, {adminHeader} from '../../services/api';

const ManageRating = () => {
   const [ratings, setRatings] = useState([]);

   useEffect(()=>{
      getRatings();
   },[]);

   const getRatings = async()=>{
      let res = await API.get('/rating/all');
      setRatings(res.data.data);
   }

   const deleteRating = async(id)=>{
      await API.delete(`/rating/delete/${id}`);
      getRatings();
   }

   return (
      <div>
         <h2>Ratings</h2>
         {ratings.map(r=>(
            <div key={r._id}>
               {r.movie?.name} - {r.rating}
               <button onClick={()=>deleteRating(r._id)}>Delete</button>
            </div>
         ))}
      </div>
   )
}

export default ManageRating;