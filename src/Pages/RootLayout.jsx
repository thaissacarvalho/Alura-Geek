import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";

export default function RootLayout() {
  const location = useLocation();
  const currentPage = location.pathname;
  
  return (
    <>
        <Header page={currentPage}/>
        <Outlet/>
        <Footer/>
    </>
  )
}
