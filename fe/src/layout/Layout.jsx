import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
