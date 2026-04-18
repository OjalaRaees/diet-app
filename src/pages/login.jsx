import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // LOGIN
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in:", userCredential.user);
      alert("Login successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  // SIGNUP
  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
      });

      console.log("User created:", user);
      alert("Account created!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1 className="auth-title">
          {isLogin ? "Welcome Back to NÜRA" : "Join NÜRA"}
        </h1>

        <input
  type="email"
  placeholder="Enter your email"
  onChange={(e) => setEmail(e.target.value)}
  style={styles.input}
/>

<input
  type="password"
  placeholder="Create a strong password"
  onChange={(e) => setPassword(e.target.value)}
  style={styles.input}
/>

        {isLogin ? (
          <button className="auth-button" onClick={handleLogin}>
            Login
          </button>
        ) : (
          <button className="auth-button" onClick={handleSignup}>
            Sign Up
          </button>
        )}

        <p className="auth-toggle" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
        </p>

      </div>
    </div>
  );
}
const styles = {
  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    borderRadius: "10px",
    border: "1px solid #0f766e",
    background: "#0f3d38",
    color: "#f1f5f9",
    outline: "none",
  }
};

export default Auth;