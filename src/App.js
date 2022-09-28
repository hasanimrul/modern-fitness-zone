import logo from './logo.svg';
import './App.css';
import Packages from './Component/Packages/Packages';
import Header from './Component/Header/Header';

function App() {
  

  
  return (
    <div className="App">
      <Header></Header>
      <h2>Select your package</h2>
      <Packages></Packages>
      
    </div>
  );
}



export default App;
