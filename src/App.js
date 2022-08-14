import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/Navbar/AppNavbar';
import TimetableRouter from './components/router/TimetableRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppLoaderModalContainer from './components/generic/AppLoaderModal.container';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <AppLoaderModalContainer />
      <ToastContainer
      // position='top-right'
      // autoClose={5000}
      // hideProgressBar={false}
      // newestOnTop={false}
      // closeOnClick
      // rtl={false}
      // pauseOnFocusLoss
      // draggable
      // pauseOnHover
      />
      <TimetableRouter />
    </BrowserRouter>
  );
}

export default App;
