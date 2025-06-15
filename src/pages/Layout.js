import { Outlet } from "react-router-dom";
import './Layout.css'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  
  useLayoutEffect(() => {
      window.scrollTo(0, 0)
  });
  
  return (
    <>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
};

export default Layout;
