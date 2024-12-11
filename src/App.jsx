import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import Routers from './router/Routers';


function App() {

  return (
    <>
      <h1 className="bg-white">
        <AuthContextProvider> 
          <Routers /> 
        </AuthContextProvider>
      </h1>
    </>
  )
}

export default App
