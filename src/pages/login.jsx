import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // LOGIN
  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in:", user);
      alert("Login successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  // SIGNUP
  const handleSignup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", user);
      alert("Account created!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <div className="card">

        <h1>{isLogin ? "Login" : "Create Account"}</h1>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {isLogin ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handleSignup}>Sign Up</button>
        )}

        {/* TOGGLE TEXT */}
        <p
          style={{
            marginTop: "12px",
            textAlign: "center",
            cursor: "pointer",
            color: "#38bdf8"
          }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
        </p>

      </div>
    </div>
  );
}

export default Auth;