import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children, backendStatus }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar backendStatus={backendStatus} />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
