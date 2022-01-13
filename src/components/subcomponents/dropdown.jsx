import "../../css/menu.scss";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  console.log(props.menu.child.length);
  if (props.menu.child.length > 0) {
    return (
      <div className="dropdown_menu">
        <input
          hidden
          type="radio"
          name="dropdownlist"
          id={"menu_list_" + props.menu.id}
          className="menu_input"
        />
        <label
          htmlFor={"menu_list_" + props.menu.id}
          className="dropdown_menu_name"
        >
          <div>{props.menu.name}</div>
        </label>
        <div className="dropdownlist">
          {props.menu.child.map((sub) => (
            <div className="dropdownitem">
              <Link className="" to={sub.url}>
                {sub.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="menubutton">
        <Link to="" >
          {props.menu.name}
        </Link>
      </div>
    );
  }
};
export default Dropdown;
