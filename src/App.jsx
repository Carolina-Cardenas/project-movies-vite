
import { BrowserRouter } from "react-router-dom"
import { NavBar } from './components/NavBar';
import { routes } from './components/routes';

export const App = () => {
return (
  <BrowserRouter>
 
  {routes()}
  </BrowserRouter>
)
}
 
