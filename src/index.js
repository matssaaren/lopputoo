import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ScrollToTop from './components/ScrollToTop';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
