import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Navbar2 from "./navbar/navbar2";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen border-2">
      <Navbar2 />
      <div style={{ height: "93vh" }} className="w-full">
        <main className="h-full w-full overflow-auto flex flex-col items-center bg-black">
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
