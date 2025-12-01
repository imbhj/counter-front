import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import Counter from "./pages/Counter";
import Header from "./layouts/Header";

const App = () => {  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
