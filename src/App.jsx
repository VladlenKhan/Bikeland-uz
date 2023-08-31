import { Home, Categories, Dilers, Post, Blog, Work, BlogOpen } from "./pages";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header, Footer } from "./components";
import React, { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/dilers" element={<Dilers />} />
        <Route path="/post" element={<Post />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blogopen" element={<BlogOpen />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
