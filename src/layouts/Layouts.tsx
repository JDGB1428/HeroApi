import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import ModalHeroes from "../components/ModalHeroes";

export default function Layouts() {
  return (
    <>
      <Navbar/>
      <main className="container mx-auto mt-10">
        <Outlet/>
      </main>
      <ModalHeroes/>
    </>
  )
}
