import "./styles.css";
import Dictionary from "./Dictionary.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container mt-5 card">
      <div className="App">
        <Dictionary />
      </div>
      <footer>Coded by Grace Johnson, open source on GitHUB</footer>
    </div>
  );
}
