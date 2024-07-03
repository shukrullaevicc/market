import axios from './api';
import './App.css';
import RouteController from './routes';
import Nav from './components/nav/Nav';
import { useLocation } from 'react-router-dom';

function App() {
  const {pathname} = useLocation();
  return (
    <>
      {
        pathname.includes("/auth") || pathname.includes("/not-found") ? <></> : <Nav/> 
      }
      <RouteController/>
    </>
  )
}

export default App