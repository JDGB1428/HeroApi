import { NavLink } from "react-router"

export default function Navbar() {
    return (
        <div className="">
            <div>
                
                <nav>
                    <NavLink to='/' className={({ isActive }) => isActive ? '' : ''}>
                        Inicio
                    </NavLink>
                    <NavLink to='/favoritos' className={({ isActive }) => isActive ? '' : ''}>
                        Favoritos
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}
