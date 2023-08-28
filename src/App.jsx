import { Home,Categories } from './pages'
import { Routes, Route } from "react-router-dom";
import { Header,Footer } from "./components";
 
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
