import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Pushpa 2",
      rating: 8.5,
      cast: "Allu Arjun, Rashmika",
      ott: "Netflix",
      releaseDate: "2025-01-15",
      image:""
    },
    {
      id: 2,
      name: "Jawan",
      rating: 9.0,
      cast: "Shah Rukh Khan, Nayanthara",
      ott: "Amazon Prime",
      releaseDate: "2023-09-07"
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    rating: "",
    cast: "",
    ott: "",
    releaseDate: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addMovie = () => {
    setMovies([...movies, { ...form, id: Date.now() }]);
    setForm({
      name: "",
      rating: "",
      cast: "",
      ott: "",
      releaseDate: ""
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🎬 Movie Ranking System</h2>

      {/* Form */}
      <div className="card p-4 mb-4">
        <h4>Add Movie</h4>
        <div className="row">
          <div className="col-md-4">
            <input className="form-control mb-2" name="name" placeholder="Movie Name" value={form.name} onChange={handleChange}/>
          </div>

          <div className="col-md-2">
            <input className="form-control mb-2" name="rating" placeholder="Rating" value={form.rating} onChange={handleChange}/>
          </div>

          <div className="col-md-3">
            <input className="form-control mb-2" name="cast" placeholder="Cast" value={form.cast} onChange={handleChange}/>
          </div>

          <div className="col-md-3">
            <input className="form-control mb-2" name="ott" placeholder="OTT Platform" value={form.ott} onChange={handleChange}/>
          </div>

          <div className="col-md-3">
            <input type="date" className="form-control mb-2" name="releaseDate" value={form.releaseDate} onChange={handleChange}/>
          </div>

          <div className="col-md-2">
            <button className="btn btn-primary w-100" onClick={addMovie}>Add</button>
          </div>
        </div>
      </div>

      {/* Movie Table */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Rating ⭐</th>
            <th>Cast</th>
            <th>OTT</th>
            <th>Release Date</th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie.id}>
              <td>{index + 1}</td>
              <td>{movie.name}</td>
              <td>{movie.rating}</td>
              <td>{movie.cast}</td>
              <td>{movie.ott}</td>
              <td>{movie.releaseDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;