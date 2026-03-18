import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

function Auth() {
  const [mode, setMode] = useState("sign up");
  const { signup, login, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();

  // ✅ Handle email/password submit
  async function onSubmit(data) {
    setError("");
    try {
      if (mode === "sign up") {
        await signup(data.email, data.password);
        alert("Sign up successful!");
      } else {
        await login(data.email, data.password);
        alert("Login successful!");
      }
    } catch (err) {
      console.error(err);

      // ✅ Show Firebase errors
      if (err.code === "auth/email-already-in-use") {
        alert("This email is already in use. Please login or use a different email.");
      } else if (err.code === "auth/user-not-found") {
        alert("No user found with this email. Please sign up first.");
      } else if (err.code === "auth/wrong-password") {
        alert("Incorrect password. Try again.");
      } else if (err.code === "auth/invalid-email") {
        alert("Invalid email format.");
      } else if (err.code === "auth/weak-password") {
        alert("Password should be at least 6 characters.");
      } else {
        alert(err.message);
      }
    }
  }

  // ✅ Google login
  async function handleGoogleLogin() {
    try {
      await googleLogin();
      alert("Google login successful!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">{mode === "sign up" ? "Sign UP" : "Login"}</h1>

          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="form-input"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="error">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="form-input"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                  maxLength: { value: 12, message: "Password must be less than 12 characters" },
                })}
              />
              {errors.password && <span className="error">{errors.password.message}</span>}
            </div>

            <button className="btn-for-signup" type="submit">
              {mode === "sign up" ? "Sign UP" : "Login"}
            </button>
          </form>

          <button className="btn-google" onClick={handleGoogleLogin} style={{ marginTop: "1rem" }}>
            Continue with Google
          </button>

          <div className="auth-switch">
            {mode === "sign up" ? (
              <p>
                Already have an account?{" "}
                <span className="auth-link" onClick={() => setMode("login")}>Login</span>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <span className="auth-link" onClick={() => setMode("sign up")}>Sign Up</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;