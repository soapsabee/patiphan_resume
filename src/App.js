import './App.css';
import Routes from './routers';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>

  );
}

export default App;
