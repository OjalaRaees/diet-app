import Auth from "./pages/login";
import app from "./firebase";
import Signup from "./pages/Signup";
import "./styles.css";
console.log("Firebase connected:", app);
function App() {
  return (
    <div>
        <Auth />
        
    </div>



  );
}

export default App;