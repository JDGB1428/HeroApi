import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useAppStore } from "../store/useAppStore";

export default function ModalHeroes() {

    const modal = useAppStore(state => state.modal)
    const select_heroe = useAppStore(state => state.selectHeroe)
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
                            
                            <div className="my-5">  
                                <p>{select_heroe.work?.occupation}</p>
                                <p>{select_heroe.work?.base}</p>
                            </div>
                            <div className="flex justify-center gap-4 mx-4 ">
                                <Button
                                    className="w-full p-3 font-bold text-white transition-all bg-gray-700 rounded-md hover:bg-gray-400 "
                                    onClick={closeModal}
                                >
                                    Cerrar
                                </Button>
                                <Button className="w-full p-3 font-bold text-white transition-all bg-indigo-800 rounded-md hover:bg-indigo-400">
                                    Agregar a favoritos
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
    )
}
