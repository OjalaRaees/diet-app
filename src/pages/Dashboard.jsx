import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Dashboard() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setUserEmail(auth.currentUser?.email);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div style={styles.container}>


      {/* HERO SECTION */}
      <div style={styles.hero}>
  
  <h1 style={styles.heroTitle}>
    YOUR PERSONAL
  </h1>

  <h2 style={styles.heroSubtitle}>
    diet architect
  </h2>

  <p style={styles.heroTagline}>
    Track. Transform. Thrive.
  </p>

  <p style={styles.email}>{userEmail}</p>

</div>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    background: "#0b2f2a",
    color: "#f1f5f9",
    fontFamily: "sans-serif",
  },

  /* HERO */
  hero: {
  height: "70vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
},

heroTitle: {
  fontSize: "52px",
  fontWeight: "900",
  letterSpacing: "3px",
  textTransform: "uppercase",
  background: "linear-gradient(270deg, #d4af37, #ffffff, #0f3d38)",
  backgroundSize: "600% 600%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "gradientMove 6s ease infinite",
  margin: "0",
  fontFamily: "Impact, 'Arial Black', sans-serif",
},

heroSubtitle: {
  fontSize: "28px",
  fontStyle: "italic",
  fontWeight: "500",
  color: "#d4af37",
  marginTop: "8px",
  textTransform: "lowercase",
},

heroTagline: {
  fontSize: "16px",
  fontWeight: "600",
  marginTop: "12px",
  color: "#94a3b8",
  letterSpacing: "1px",
},
};



export default Dashboard;