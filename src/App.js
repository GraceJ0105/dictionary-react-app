import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container card Dictionary-App">
        <Dictionary defaultWord="travel" />
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
    </div>
  );
}
