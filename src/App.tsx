import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BackgroundContainer } from './components/Background/styles'
import Routes from './routes'

function App() {
  return (
    <BackgroundContainer>
      <Routes />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BackgroundContainer>
  );
}

export default App;
