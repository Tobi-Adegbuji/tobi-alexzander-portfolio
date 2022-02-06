import "./App.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import SliderSection from "./SliderSection";



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Banner />
        <SliderSection/>
      </div>
    </div>
  );
}

export default App;
