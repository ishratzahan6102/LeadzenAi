import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

function App() {
  return (
    <div className="text-neutral bg-accent font-mono font-medium">
      <div className=' max-w-[1300px] mx-auto'>
      <RouterProvider router={router}>
        </RouterProvider>
       
      </div>
       
    </div>
  );
}

export default App;
