import './App.css';
import Intro from './components/intro/intro';
import About from './components/about/about'
import ProductList from './components/productList/productList';
import Contact from './components/contact/contact';
 
function App() {
  return (
    <div className="App">
      <div>
       <Intro/>
       <About/>
       <ProductList/>
       <Contact/>
      </div>
    </div>
  );
}

export default App;
