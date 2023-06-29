import { Navbar } from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Create } from "./pages/Create";
import { Buy, Explore } from "./pages/Explore";
import { Sell } from "./pages/Sell";
import { Product } from "./pages/Product";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="App w-full h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/create" Component={Create} />
          <Route path="/explore" Component={Explore} />
          <Route path="/sell" Component={Sell} />
          <Route path="/product" Component={Product} />
          <Route path="/profile" Component={Profile} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
