import "./App.css";
import Items from "./Components/Items";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import { ItemDetails } from "./Components/ItemDetails";
import { useLocation } from "react-router-dom";
function App() {
  return (
    <div
      className="App"
      // style={{
      //   width: "1000px",
      //   height: "1000px",
      // }}
    >
      <Nav />
      <Routes>
        <Route path="/" element={<Items />} />
        {/* <Route path="/src/Components/Items.jsx" element={<Items />} /> */}
        <Route path="product/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
