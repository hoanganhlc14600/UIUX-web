import "../css/dashboard.scss";
import { Link } from "react-router-dom";
const Dashboard = (props) => {

  return (
    <div className="dashboard">
     <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>

        <img src="http://localhost:3000/dashboard.png" alt="" srcset="" />
    </div>
  );
};
export default Dashboard;