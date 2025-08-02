import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";

// create router with JSX Route elements
const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />} >
      <Route path="/" element={<HomePage />} >

      </Route>
    </Route>
));

function App() {
  return (
    // replace below with a Router Provider
        <RouterProvider router={ appRouter } />
  );
}

export default App;
