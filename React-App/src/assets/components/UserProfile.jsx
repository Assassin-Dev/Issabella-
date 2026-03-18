import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function UserProfile() {
  const { user, logout } = useContext(AuthContext);

  if (!user) return null;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img
        src={user.avatar}
        alt="profile"
        width="40"
        height="40"
        style={{ borderRadius: "50%" }}
      />

      <span>{user.email}</span>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserProfile;