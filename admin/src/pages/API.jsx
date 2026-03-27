import axios from 'axios';

const API = axios.create({
   baseURL: "http://localhost:5000/api"
});

// admin header (for admin routes)
export const adminHeader = {
   headers: {
      adminkey: "12345"
   }
};

export default API;