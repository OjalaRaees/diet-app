import { useEffect, useState } from "react";
import Auth from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Calculator from "./pages/Calculator";
import "./styles.css";

import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("auth");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) setPage("dashboard");
      else setPage("auth");
    });

    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setPage("auth");
  };

  if (loading) return <h2 style={{ color: "white" }}>Loading...</h2>;

  return (
    <div>

      {/* NAVBAR */}
      <div style={styles.navbar}>

  {/* LEFT */}
  <h1 style={styles.logo}>NÜRA</h1>

  {/* RIGHT */}
  <div style={styles.navLinks}>

    <span onClick={() => setPage("dashboard")} style={styles.link}>
      Dashboard
    </span>

    <span onClick={() => setPage("calculator")} style={styles.link}>
      Calculator
    </span>

    <button style={styles.logout} onClick={handleLogout}>
      Logout
    </button>

  </div>

</div>

      {/* PAGES */}
      {page === "auth" && <Auth />}

      {page === "dashboard" && user && <Dashboard />}

      {page === "calculator" && user && <Calculator />}

    </div>
  );
}

const styles = {
  
  navbar: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 30px",
  background: "#0b2f2a",
  borderBottom: "1px solid #0f766e",
  position: "sticky",
  top: 0,
  zIndex: 1000,
},

logo: {
  fontSize: "24px",
  fontWeight: "bold",
  letterSpacing: "4px",
  background: "linear-gradient(270deg, #d4af37, #ffffff, #0f3d38)",
  backgroundSize: "600% 600%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "gradientMove 6s ease infinite",
},

navLinks: {
  display: "flex",
  alignItems: "center",
  gap: "22px",
},

link: {
  cursor: "pointer",
  color: "#e5e7eb",
  fontSize: "15px",
  fontWeight: "500",
  transition: "0.2s",
},

logout: {
  padding: "8px 14px",
  background: "#d4af37",
  color: "#0b2f2a",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.2s",
},
};

export default App;