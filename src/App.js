import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Recommendation from "./components/Recommendation";
const styles = {
  body: {
    backgroundColor: "#12023c",
    margin: "0",
    padding: "0",
    minHeight: "200vh",
  },
};

function App() {
  return (
    <div style={styles.body}>
      <Navbar />
      <Home />
      <Skills />
      <Project />
      <Recommendation/>
    </div>
  );
}

export default App;
