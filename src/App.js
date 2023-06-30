import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Review from "./components/Review";
import Servises from "./components/Servises";
import Sociallink from "./components/Sociallink";

function App() {
  return (
    <div >
      <div>
      <Navbar/>
      <Home/>
      </div>
      <div className="min-h-screen block">
      <Product/>
      </div>
      <div className="min-h-screen block">
      <About/>
      </div>
      <div>
      <Review/>
      </div>
      <div>
      <Servises/>
      </div>
      <Sociallink/>
    </div>
  );
}

export default App;
