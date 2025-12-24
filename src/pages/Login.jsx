
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client"); // 🔑 ROLE TOGGLE
  const [error, setError] = useState("");
  const navigate = useNavigate();

  /* AUTO LOGIN */
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const savedRole = localStorage.getItem("role");

    if (isLoggedIn === "true") {
      if (savedRole === "admin") navigate("/admin-dashboard");
      if (savedRole === "client") navigate("/client-dashboard");
    }
  }, [navigate]);

  const handleLogin = () => {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (u) =>
        u.email === email &&
        u.password === password &&
        u.role === role
    );

    if (!validUser) {
      setError(
        "Invalid credentials or role mismatch. Please select correct role."
      );
      return;
    }

    /* SAVE SESSION */
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", validUser.email);
    localStorage.setItem("role", validUser.role);

    /* REDIRECT */
    if (validUser.role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/client-dashboard");
    }
  };

  return (
    <div className="auth-bg d-flex justify-content-center align-items-center min-vh-100">
      <div className="card auth-card shadow-lg border-0 col-md-4">
        <div className="card-body p-4">
          <h3 className="text-center fw-bold text-success mb-3 auth-title">
            Login
          </h3>

          {/* 🔑 ROLE BUTTONS */}
          <div className="d-flex mb-3">
            <button
              className={`btn w-50 ${
                role === "admin" ? "btn-success" : "btn-outline-success"
              }`}
              onClick={() => setRole("admin")}
            >
              Admin
            </button>

            <button
              className={`btn w-50 ms-2 ${
                role === "client" ? "btn-success" : "btn-outline-success"
              }`}
              onClick={() => setRole("client")}
            >
              Client
            </button>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <input
            type="email"
            className="form-control auth-input mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control auth-input mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="btn btn-success auth-btn w-100"
            onClick={handleLogin}
          >
            Login as {role}
          </button>

          <p className="text-center mt-3">
            New user?{" "}
            <span
              className="text-primary fw-bold signup-link"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </p>

          {/* DEMO INFO */}
          {/* <div className="text-muted small mt-3 text-center">
            <p className="mb-1">
              Admin → <b>admin@gmail.com / admin123</b>
            </p>
            <p className="mb-0">
              Client → <b>client@gmail.com / client123</b>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Login;
