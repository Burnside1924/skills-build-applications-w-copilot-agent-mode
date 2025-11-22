
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container py-4">
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <a className="navbar-brand" href="#">Octofit Tracker</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Activities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Teams</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Leaderboard</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Bootstrap Card */}
      <div className="card mb-4">
        <div className="card-body">
          <h1 className="card-title display-4 mb-3">Welcome to Octofit Tracker</h1>
          <p className="card-text">Track your fitness activities, join teams, and compete on the leaderboard!</p>
          <a href="https://reactjs.org" className="btn btn-primary">Learn React</a>
        </div>
      </div>

      {/* Bootstrap Table Example */}
      <h2 className="mb-3">Sample Data Table</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Activity</th>
            <th scope="col">Duration</th>
            <th scope="col">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Running</td>
            <td>30 min</td>
            <td>300</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cycling</td>
            <td>45 min</td>
            <td>400</td>
          </tr>
        </tbody>
      </table>

      {/* Bootstrap Button Example */}
      <button className="btn btn-success me-2">Add Activity</button>
      <button className="btn btn-outline-danger">Delete Activity</button>

      {/* Bootstrap Modal Example (static markup) */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal Title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              This is a Bootstrap modal example.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Form Example */}
      <h2 className="mt-5 mb-3">Add New Activity</h2>
      <form className="mb-4">
        <div className="mb-3">
          <label htmlFor="activityName" className="form-label">Activity Name</label>
          <input type="text" className="form-control" id="activityName" placeholder="Enter activity" />
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Duration (min)</label>
          <input type="number" className="form-control" id="duration" placeholder="Enter duration" />
        </div>
        <div className="mb-3">
          <label htmlFor="calories" className="form-label">Calories Burned</label>
          <input type="number" className="form-control" id="calories" placeholder="Enter calories" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;
