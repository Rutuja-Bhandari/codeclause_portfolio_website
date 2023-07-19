import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Project from './components/Project';
// import About from './components/About';

const styles={
  body:{
    backgroundColor:"#12023c",
    // backgroundImage: "linear-gradient(120deg, rgb(9, 0, 113), #41005e)",
    margin:'0',
    padding:'0',
    minHeight:'200vh'
  },
  // container:{
  //   display:"inline-flex",
  //   flexDirection:"row",
  //   color:"white"
  // }
}

function App() {
  return (
    <div style={styles.body}>
      <Navbar/>
      <Home/>
      <Skills/>
      <Project/>
      </div>
      

    
  );
}

export default App;
