import { BrowserRouter, Route, Routes } from 'react-router'
import Layouts from '../layouts/Layouts'
import IndexPages from '../pages/IndexPages'
import FavoritePages from '../pages/FavoritePages'

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Layouts/>}>
                <Route path='/' element={<IndexPages/>}/>
                <Route path='/favoritos' element={<FavoritePages/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
