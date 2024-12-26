import { NavLink, useLocation } from "react-router"
import Search from "./Search"
import SuperHeroe from '../../src/assets/heroes/SuperHeroe.jpg'
import { useMemo } from "react"

export default function Navbar() {
    const {pathname} = useLocation();
    const ishome = useMemo(() => pathname === '/', [pathname])
    return (
        <div className="py-5 shadow-md">
            <div className="container mx-auto">
                <div className="flex items-center justify-between ">
                    <img src={SuperHeroe} alt="" className="w-52 h-52" />
                    <nav className="flex items-center gap-5">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold uppercase text-indigo-800 transition-all' : 'font-bold uppercase'}>
                            Inicio
                        </NavLink>
                        <NavLink to='/favoritos' className={({ isActive }) => isActive ? 'font-bold uppercase text-indigo-800 transition-all' : 'font-bold uppercase'}>
                            Favoritos
                        </NavLink>
                    </nav>
                </div>
                {
                    ishome && (
                        <Search />
                    )
                }
            </div>
        </div>
    )
}
