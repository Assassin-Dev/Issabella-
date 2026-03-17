import { useState } from "react";
import { useForm } from "react-hook-form";

function Auth() {
  const [mode, setMode] = useState("sign up");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(`${mode} form data:`, data);
    alert(`Form submitted! Check console for data.`);
  };

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