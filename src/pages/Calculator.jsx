import { useState } from "react";

function Calculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("1.2");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const calculate = () => {
    setLoading(true);

    setTimeout(() => {
      const h = height / 100;

      const bmi = (weight / (h * h)).toFixed(1);

      let category =
        bmi < 18.5
          ? "Underweight"
          : bmi < 25
          ? "Normal"
          : bmi < 30
          ? "Overweight"
          : "Obese";

      let bmr =
        gender === "male"
          ? 10 * weight + 6.25 * height - 5 * age + 5
          : 10 * weight + 6.25 * height - 5 * age - 161;

      const tdee = bmr * activity;

      setResult({
        bmi,
        category,
        maintenance: Math.round(tdee),
        fatLoss: Math.round(tdee - 400),
        muscleGain: Math.round(tdee + 300),
      });

      setLoading(false);
    }, 900);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>NÜRA CALCULATOR</h1>
      <p style={styles.sub}>Precision body intelligence system</p>

      <div style={styles.layout}>
        {/* FORM */}
        <div style={styles.formCard}>
          <h2 style={styles.section}>Personal Profile</h2>

          {/* AGE */}
          <div style={styles.field}>
            <div style={styles.fancyLabel}>⚡ Age</div>
            <input
              style={styles.input}
              placeholder="Enter your age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          {/* GENDER */}
          <div style={styles.field}>
            <div style={styles.fancyLabel}>🧬 Gender</div>

            <div style={styles.toggleRow}>
              <button
                onClick={() => setGender("male")}
                style={{
                  ...styles.toggle,
                  background: gender === "male" ? "#d4af37" : "#134e4a",
                  color: gender === "male" ? "#0b2f2a" : "#d4af37",
                }}
              >
                Male
              </button>

              <button
                onClick={() => setGender("female")}
                style={{
                  ...styles.toggle,
                  background:
                    gender === "female" ? "#d4af37" : "#134e4a",
                  color: gender === "female" ? "#0b2f2a" : "#d4af37",
                }}
              >
                Female
              </button>
            </div>
          </div>

          {/* WEIGHT */}
          <div style={styles.field}>
            <div style={styles.fancyLabel}>🏋️ Weight</div>
            <input
              style={styles.input}
              placeholder="kg (e.g. 65)"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          {/* HEIGHT */}
          <div style={styles.field}>
            <div style={styles.fancyLabel}>📏 Height</div>
            <input
              style={styles.input}
              placeholder="cm (e.g. 170)"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          {/* ACTIVITY */}
          <div style={styles.field}>
            <div style={styles.fancyLabel}>🔥 Activity Level</div>

            <select
              style={styles.input}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="1.2">🪑 Sedentary (No exercise)</option>
              <option value="1.375">🚶 Light (1–3 days/week)</option>
              <option value="1.55">🏃 Moderate (3–5 days/week)</option>
              <option value="1.725">⚡ Active (6–7 days/week)</option>
            </select>
          </div>

          <button style={styles.button} onClick={calculate}>
            {loading ? "Analyzing body..." : "Generate My Plan"}
          </button>
        </div>

        {/* RESULT */}
        <div style={styles.resultCard}>
          {!result ? (
            <div style={styles.empty}>
              <div style={styles.glow}></div>
              <p>Fill in your details to unlock your plan</p>
            </div>
          ) : (
            <>
              <h2 style={styles.resultTitle}>Your Fitness Profile</h2>

              <div style={styles.grid}>
                <div style={styles.card}>
                  <h3>BMI</h3>
                  <p>{result.bmi}</p>
                  <span>{result.category}</span>
                </div>

                <div style={styles.card}>
                  <h3>Maintenance</h3>
                  <p>{result.maintenance}</p>
                  <span>kcal/day</span>
                </div>

                <div style={styles.card}>
                  <h3>Fat Loss</h3>
                  <p>{result.fatLoss}</p>
                  <span>kcal/day</span>
                </div>

                <div style={styles.card}>
                  <h3>Muscle Gain</h3>
                  <p>{result.muscleGain}</p>
                  <span>kcal/day</span>
                </div>
              </div>

              <div style={styles.badge}>
                🎯 Smart Recommendation based on your body composition
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* 💎 STYLES */
const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px 20px",
    background: "#0b2f2a",
    color: "#fff",
    fontFamily: "sans-serif",
  },

  title: {
    textAlign: "center",
    color: "#d4af37",
    letterSpacing: "4px",
  },

  sub: {
    textAlign: "center",
    color: "#94a3b8",
    marginBottom: "30px",
  },

  layout: {
    display: "flex",
    gap: "30px",
    maxWidth: "1100px",
    margin: "auto",
    flexWrap: "wrap",
  },

  formCard: {
    flex: 1,
    minWidth: "320px",
    padding: "35px",
    borderRadius: "18px",
    background: "#0f3d38",
    border: "1px solid #0f766e",
  },

  section: {
    marginBottom: "20px",
    color: "#d4af37",
  },

  field: {
    marginBottom: "18px",
  },

  fancyLabel: {
    fontSize: "12px",
    letterSpacing: "2px",
    color: "#d4af37",
    marginBottom: "6px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  input: {
    width: "100%",
    padding: "13px",
    borderRadius: "12px",
    border: "1px solid #0f766e",
    background: "#134e4a",
    color: "white",
    outline: "none",
    transition: "0.25s",
  },

  toggleRow: {
    display: "flex",
    gap: "10px",
  },

  toggle: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #d4af37",
    cursor: "pointer",
  },

  button: {
    width: "100%",
    padding: "13px",
    marginTop: "10px",
    borderRadius: "10px",
    background: "#d4af37",
    color: "#0b2f2a",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },

  resultCard: {
    flex: 1,
    minWidth: "320px",
    padding: "30px",
    borderRadius: "18px",
    background: "#0f3d38",
    border: "1px solid #0f766e",
  },

  empty: {
    textAlign: "center",
    marginTop: "90px",
    color: "#94a3b8",
  },

  glow: {
    width: "70px",
    height: "70px",
    margin: "auto",
    borderRadius: "50%",
    background: "radial-gradient(#d4af37, transparent)",
    marginBottom: "10px",
  },

  resultTitle: {
    textAlign: "center",
    color: "#d4af37",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "12px",
  },

  card: {
    padding: "14px",
    borderRadius: "12px",
    background: "#134e4a",
    border: "1px solid #0f766e",
    textAlign: "center",
  },

  badge: {
    marginTop: "15px",
    padding: "12px",
    borderLeft: "4px solid #d4af37",
    background: "#0b2f2a",
    color: "#d4af37",
    borderRadius: "10px",
  },
};

export default Calculator;