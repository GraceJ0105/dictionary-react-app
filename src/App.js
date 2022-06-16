import "./styles.css";
import Dictionary from "./Dictionary.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container mt-5 card">
      <div className="App">
        <Dictionary defaultWord="travel" />
      </div>
      <footer>
        Coded by Grace Johnson, open source on{" "}
        <a
          href="https://github.com/GraceJ0105/dictionary-react-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHUB
        </a>
      </footer>
    </div>
  );
}
