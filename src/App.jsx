import './Styles/reset.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './Styles/styles.module.css';

function App() {
  return <RouterProvider router={router} />
}

export default App;
