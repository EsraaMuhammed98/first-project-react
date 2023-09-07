import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portofolio from './Components/Portofolio/Portofolio';
import Contact from './Components/Contact/Contact';
import Layout from './Components/Layout/Layout';
function App() {
let routers = createBrowserRouter([
  {path:'', element:<Layout/> , children:[
    {index:true, element:<Home/>},
    {path:'about' , element:<About/>},
    {path:'portofolio' , element:<Portofolio/>},
    {path:'contact' , element:<Contact/>}

  ]},
])
return <>
  <RouterProvider router={routers}>
  </RouterProvider>
  </>
}

export default App;
