import { BrowserRouter, Route, Routes } from 'react-router'
import Layouts from '../layouts/Layouts'
import IndexPages from '../pages/IndexPages'
import FavoritePages from '../pages/FavoritePages'
import DetailHeroes from '../components/ModalHeroes'

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Layouts/>}>
                <Route path='/' element={<IndexPages/>}/>
                <Route path='/:id' element={<DetailHeroes/>}/>
                <Route path='/favoritos' element={<FavoritePages/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
