import "./navbar.css";
import { useGlobal } from "../../context/GlobalContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { handleReset } = useGlobal();
  return (
    <>
      <nav className="nav-container flex-row">
        <div className="flex-row ">
          <Link to="/">
            <h4 className="fw-500 nav-heading" onClick={() => handleReset()}>
              Quizzap
              <img
                className="image-responsive brand-img"
                src="favicon.png"
                alt=""
              />{" "}
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
