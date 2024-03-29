import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import Item from "./components/Item.js"
function App() {
  return (
      <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage/>}></Route>
<Route path="/item/:id" element={<Item/>}></Route>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
