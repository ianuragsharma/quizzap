import "./navbar.css";
import { useEffect, useState } from "react";
import { useGlobal } from "../../context/GlobalContext";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
const Navbar = () => {
  const { handleReset } = useGlobal();
  const { user, logout } = useAuth();
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    localStorage.getItem("userName")
      ? setUserName(localStorage.getItem("userName"))
      : setUserName(user?.displayName);
  }, [user]);
  return (
    <>
      <nav className="nav-container flex-row">
        <div className="flex-row">
          <Link to="/">
            <h4 className="fw-500 nav-heading" onClick={handleReset}>
              Quizzap
              <img
                className="image-responsive brand-img"
                src="favicon.png"
                alt=""
              />
            </h4>
          </Link>
        </div>
        <input
          name="name"
          type="text"
          className="input-area text-base ml-3 "
          placeholder="Search for Quizzes"
        />
        <ul className="flex-row nav-items">
          <li>
            {user ? (
              `Hi ${userName}`
            ) : (
              <Link to="/login">
                <div className="badge badge-icon ">
                  <i className="fa-solid fa-user text-brand"></i>
                </div>
              </Link>
            )}
          </li>
          <li>
            {user && (
              <button
                className="btn btn-outlined-secondary text-sm ml-2"
                onClick={logout}
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Navbar };
