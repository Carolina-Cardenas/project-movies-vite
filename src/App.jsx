import { BrowserRouter } from "react-router-dom";
import { routes } from "./components/routes";

export const App = () => {
  return <BrowserRouter>{routes()}</BrowserRouter>;
};
