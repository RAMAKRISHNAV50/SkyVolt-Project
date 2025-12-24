import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import logo from "../assets/logo-png.png"
const colors = ["#22c55e", "#38bdf8", "#facc15", "#a855f7"];

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userEmail = localStorage.getItem("userEmail");

  const [titleColor, setTitleColor] = useState(colors[0]);
  const [showEmail, setShowEmail] = useState(false);

  /* 🔁 Change title color every 10 seconds */
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setTitleColor(colors[index]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg skyvolt-navbar px-4 shadow-sm">
      
      {/* LEFT: LOGO + TITLE */}
      <div className="d-flex align-items-center gap-2 skyvolt-brand">
        <img
          src={logo}
          alt="SkyVolt Logo"
          className="skyvolt-logo"
        />

        <h4
          className="skyvolt-title m-0"
          style={{ color: titleColor }}
        >
          SKYVOLT
        </h4>
      </div>

      {/* TOGGLER */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#skyvoltNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* CENTER MENU */}
      <div
        className="collapse navbar-collapse justify-content-center"
        id="skyvoltNav"
      >
        <ul className="navbar-nav gap-4 text-center">
          {["/", "/about", "/contact"].map((path, index) => (
            <li className="nav-item" key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `nav-link skyvolt-link ${isActive ? "active-link" : ""}`
                }
              >
                {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
              </NavLink>
            </li>
          ))}

          {isLoggedIn && (
            <li className="nav-item">
              <NavLink
                to="/admin-dashboard"
                className={({ isActive }) =>
                  `nav-link skyvolt-link ${isActive ? "active-link" : ""}`
                }
              >
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="d-flex align-items-center gap-3 position-relative">
        {!isLoggedIn ? (
          <>
            <button
              className="btn btn-outline-info"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="btn btn-warning"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </>
        ) : (
          <div
            className="user-area d-flex align-items-center gap-2"
            onMouseEnter={() => setShowEmail(true)}
            onMouseLeave={() => setShowEmail(false)}
          >
            <FaUserCircle className="user-icon" />

            {showEmail && (
              <div className="user-email">
                {userEmail}
              </div>
            )}

            <FaSignOutAlt
              className="logout-icon"
              title="Logout"
              onClick={handleLogout}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
