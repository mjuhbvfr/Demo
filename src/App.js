import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import Home from './components/Home';
import GlobalStyle, { Row, Section, Text } from './globalStyles';





function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element ={<Home />}/>
        <Route path="/additem" element={<AddItem />} />
        <Route path="/itemlist" element={<ItemList/>} />
  {/* <Route path="/about" /> */}
      </Routes>
    </Router>
  );
}

export default App;
