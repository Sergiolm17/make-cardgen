import PropTypes from "prop-types";
import "./App.css";
import Shapes from "./components/shapes/shapes";

function App({ headline, backgroundImage }) {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        padding: "60px",
      }}
    >
      <div
        style={{
          padding: "10px",
          width: "100%",
          height: "100%",
          border: "2px solid black",
          borderRadius: "80px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1>{headline}</h1>
      </div>

      <div className="shape-container" style={{ opacity: 0.5 }}>
        <Shapes />
      </div>
    </div>
  );
}

App.propTypes = {
  headline: PropTypes.string,
  showLogos: PropTypes.string,
  backgroundImage: PropTypes.string,
};

App.defaultProps = {
  headline: "Banda de música de la escuela secundaria",
  backgroundImage: "",
};

export default App;
