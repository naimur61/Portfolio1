import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Routes } from './Components/Routes/Routes';

function App() {
  return (
    <RouterProvider router={Routes} />
  );
}

export default App;
