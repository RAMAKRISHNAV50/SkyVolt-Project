import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("client"); // default client
  const [error, setError] = useState("");

  const navigate = useNavigate();

  /* VALIDATIONS */
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

  const handleSignup = () => {
    setError("");

    if (name.length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!isValidPassword(password)) {
      setError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
      );
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.email === email)) {
      setError("User already registered. Please login.");
      return;
    }

    const newUser = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <div className="auth-bg d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg border-0 col-md-4">
        <div className="card-body p-4">
          <h3 className="text-center fw-bold text-warning mb-3">
            Create Account
          </h3>

          {error && <div className="alert alert-danger">{error}</div>}

          {/* NAME */}
          <input
            className="form-control mb-3"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />

          {/* EMAIL */}
          <input
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* PASSWORD WITH EYE ICON */}
          <div className="position-relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control pe-5"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                top: "50%",
                right: "15px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "18px",
              }}
              title={showPassword ? "Hide Password" : "Show Password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* ROLE BUTTONS */}
          <div className="d-flex gap-3 mb-3">
            <button
              type="button"
              className={`btn w-50 ${
                role === "client" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setRole("client")}
            >
              Client
            </button>

            <button
              type="button"
              className={`btn w-50 ${
                role === "admin" ? "btn-danger" : "btn-outline-danger"
              }`}
              onClick={() => setRole("admin")}
            >
              Admin
            </button>
          </div>

          <small className="text-muted d-block mb-3">
            Password must contain uppercase, lowercase, number & special character
          </small>

          <button className="btn btn-warning w-100" onClick={handleSignup}>
            Register
          </button>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <span
              className="text-primary fw-bold"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
