import logo from './logo.svg';
import './App.css';
import LayoutComp from './App Layout/layout';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes/Router';

const App = () => {
  return (
     <div className="App">
    <BrowserRouter>
<LayoutComp>
<Router/>
</LayoutComp>
</BrowserRouter>
    </div>
  );
}

export default App;
