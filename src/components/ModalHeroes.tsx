import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useAppStore } from "../store/useAppStore";

export default function ModalHeroes() {

    const modal = useAppStore(state => state.modal)
    const select_heroe = useAppStore(state => state.selectHeroe)
    const SelectHeroeExist = useAppStore(state => state.favoriteHeroeExits)
    const handleClickFavorite = useAppStore(state => state.handleClickFavorite)
    const closeModal = useAppStore(state => state.closeModal)

    return (
        
            <Dialog open={modal} as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex items-center justify-center min-h-full p-4">
                        <DialogPanel
                            transition
                            className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-2xl sm:p-6"
                        >
                            <DialogTitle as="h3" className="my-5 text-4xl font-extrabold text-center ">
                                {select_heroe.name}
                                <img className="mx-auto w-96" src={select_heroe.image?.url} alt={`imagen de ${select_heroe.image?.url}`} />
                            </DialogTitle>
                            
                            <div className="my-5 space-y-5">
                                <div>
                                    <p className="font-bold uppercase">Apariencia</p>
                                    <li><span className="font-bold">Genero: </span>{select_heroe.appearance?.gender}</li>
                                    <li><span className="font-bold">Color de cabello: </span>{select_heroe.appearance?.["hair-color"]}</li>
                                    <li><span className="font-bold">Color de ojos: </span>{select_heroe.appearance?.["eye-color"]}</li>
                                    <li><span className="font-bold">Peso: </span>{select_heroe.appearance?.weight[1]}</li>
                                    <li><span className="font-bold">Altura: </span>{select_heroe.appearance?.height[1]}</li>
                                </div>
                                <div>
                                    <p><span className="font-bold">Ocupacion: </span>{select_heroe.work?.occupation}</p>
                                    <p><span className="font-bold">Base: </span>{select_heroe.work?.base}</p>
                                </div>  
                                <div>
                                    <p className="font-bold uppercase">Peliculas o series aparecidas</p>
                                    <p>{select_heroe.connections?.["group-affiliation"]}</p>
                                </div>
                            </div>
                            <div className="flex justify-center gap-4 mx-4 ">
                                <Button
                                    className="w-full p-3 font-bold text-white transition-all bg-gray-700 rounded-md hover:bg-gray-400 "
                                    onClick={closeModal}
                                >
                                    Cerrar
                                </Button>
                                <Button 
                                    className="w-full p-3 font-bold text-white transition-all bg-indigo-800 rounded-md hover:bg-indigo-400"
                                    onClick={()=> handleClickFavorite(select_heroe)}
                                >
                                    {SelectHeroeExist(select_heroe.id) ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
    )
}
