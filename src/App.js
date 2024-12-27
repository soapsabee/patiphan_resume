import './App.css';
import Routes from './routers';
import { BrowserRouter } from "react-router-dom";
import { Home, Navbar, AboutMe, Portfolio , Contact} from './components';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes />
    // </BrowserRouter>
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Home />
        <Portfolio />
        <Contact/> 
        {/* <AboutMe /> */}
        {/* <AboutMe />
        <Portfolio />
        <Contact/> */}
      </div>

    </>


  );
}

export default App;
