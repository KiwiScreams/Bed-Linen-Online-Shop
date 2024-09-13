import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/footer/Footer";
import Header from "./components/shared/header/Header";
import Home from "./pages/home/Home";
import NotFound from "./pages/not found/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
