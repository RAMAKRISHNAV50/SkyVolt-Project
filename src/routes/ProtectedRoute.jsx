import { useNavigate, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  if (isLoggedIn !== "true") {
    return <Navigate to="/login" />;
  }

  if (allowedRole && role !== allowedRole) {
    return (
      <div style={styles.blocked}>
        <h2>🚫 Access Denied</h2>
        <p>You don’t have permission to access this dashboard.</p>

        <button
          style={styles.btn}
          onClick={() =>
            navigate(role === "admin" ? "/admin-dashboard" : "/client-dashboard")
          }
        >
          Go Back to Your Dashboard
        </button>
      </div>
    );
  }

  return children;
};

const styles = {
  blocked: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f1f5f9",
    color: "#0f172a",
    textAlign: "center"
  },
  btn: {
    marginTop: 20,
    padding: "10px 20px",
    borderRadius: 8,
    border: "none",
    background: "#22c55e",
    color: "#fff",
    cursor: "pointer"
  }
};

export default ProtectedRoute;
