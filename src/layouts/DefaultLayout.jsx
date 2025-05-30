import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
export default function DefaultLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-secondary">Footer</footer>
    </>
  );
}
