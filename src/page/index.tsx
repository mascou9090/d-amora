import { Header } from "../shared/components/Header"
import  { Footer } from '../shared/components/Footer';
import { Outlet } from "react-router-dom";

export const Page = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
