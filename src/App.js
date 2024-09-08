import './App.css';
import Routes from './routers';
import { BrowserRouter } from "react-router-dom";
import { Home, Navbar, AboutMe, Portfolio } from './components';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes />
    // </BrowserRouter>
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Home />

        <AboutMe />
        <Portfolio />
      </div>

    </>


  );
}

export default App;
