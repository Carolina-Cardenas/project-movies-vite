
import { BrowserRouter } from "react-router-dom"

import { NavBar } from './components/NavBar';
import { routes } from './components/routes';

export const App = () => {
return (
  <BrowserRouter>
  <NavBar/>
  {routes()}
  </BrowserRouter>
)
}


  //   <Router>
//     <Route path="/" exact>
//       <Movies />
//     </Route>
//     <Route path="/movies/:id">
//       <Detail />
//     </Route>
//   </Router>
 
