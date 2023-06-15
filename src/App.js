import { Navbar } from "./components/navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Create } from "./pages/create/Create";
import { Buy } from "./pages/buy/Buy";
import { Sell } from "./pages/sell/Sell";

function App() {
  return (
    <div className="App w-full h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/create" Component={Create} />
          <Route path="/buy" Component={Buy} />
          <Route path="/sell" Component={Sell} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
