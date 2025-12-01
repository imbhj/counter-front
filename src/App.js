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
        <Route path='*' element={<>404! 페이지가 없는데요?</>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
