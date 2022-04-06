import "./navbar.css";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="nav-container flex-row">
        <div className="flex-row ">
          <Link to="/">
            <h4 className="fw-500 nav-heading">
              Quizzap
              <img className="image-responsive brand-img" src="favicon.png" alt="" />{" "}
            </h4>
          </Link>
        </div>

        <input
          name="name"
          type="text"
          className="input-area text-base "
          placeholder="Search for Quizzes"
        />
        <ul className="flex-row">
          <li>
            <Link to="/login">
              <div className="badge badge-icon ">
                <i className="fa-solid fa-user text-brand"></i>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Navbar };
