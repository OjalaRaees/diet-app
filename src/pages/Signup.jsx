import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("User created:", userCredential);
      alert("Signup successful!");

      // optional redirect
      window.location.href = "/";

    } catch (error) {
      console.log(error.message);
      alert("Signup failed: " + error.message);
    }
  };

  return (
  <div className="container">
    <div className="card">
      <h1>Create Account</h1>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Sign Up</button>
    </div>
  </div>
   );
}

export default Signup;