import './App.css';
import {Routes, Route} from "react-router-dom";
import AllComponents from "./Components/AllComponents";
// import Testing from "./Components/Testing.jsx"
import NextPage from './Components/NextPage';
// import { BrowserRouter } from 'react-router-dom';
// import Arts, { display } from './Components/Arts';


function App() {
  return (
  
    <Routes>
        <Route path="/" element={<AllComponents />}></Route>
        <Route path="nextpage" element={<NextPage />}></Route>
    
    </Routes>
    
  );
}

export default App;
