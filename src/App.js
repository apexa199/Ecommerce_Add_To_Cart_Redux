import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Headers from './componants/Headers';
import Product from './componants/Product';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Headers />
    <Routes>
      <Route path='/' element={<Product/>}/>

     
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
