import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login/index";
import Home from "./pages/Home/index";

function App() {
  return (
    <div className="App">

      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/listar-tarefa' element={<ListarTarefa /> }/>
          <Route path='/login' element={<Login /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
