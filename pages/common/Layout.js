// import {Header, Nav, Footer} from "./layouts";
import Nav from "./layouts/Nav";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

export default function Layout({ children }){
  return (
    <>
        <Header/>
        <Nav/>
            <main>{children}</main>
        <Footer/>
    </>
  );
}