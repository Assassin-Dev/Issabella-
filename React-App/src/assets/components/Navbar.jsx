import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <Link to="/" className="nav-brand">
          IssaBella
        </Link>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/checkout">Cart</Link>
        </div>

        <div className="navbar-auth">
          {user ? (
            <div className="navbar-user">
              <img
                src={
                  user.photoURL || user.avatar || "https://api.dicebear.com/7.x/initials/svg?seed=guest"
                }
                alt="profile"
                className="nav-avatar"
              />
              <span className="nav-email">{user.email}</span>
              <button onClick={logout} className="btn-logout">
                Logout
              </button>
            </div>
          ) : (
            <div className="navbar-auth-links">
              <Link to="/auth" className="btn-primary">Login</Link>
              <Link to="/auth" className="btn-secondary">Sign Up</Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;