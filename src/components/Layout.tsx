import { Outlet } from "react-router-dom";
import Header from "./Header";
import BottomNav from "./BottomNav";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-16">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;