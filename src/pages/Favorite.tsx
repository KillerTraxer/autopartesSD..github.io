import { Icon } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import useFavoritesStore from "../store/FavoritesStore";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Favorite() {
    //@ts-ignore
    const { favorites, toggleFavorite } = useFavoritesStore();
    const navigate = useNavigate();

    return (
        <section>
            <div className="mx-auto max-w-screen-xl flex flex-col justify-center items-center">
                <div className='flex cursor-pointer w-fit justify-end items-start self-start' onClick={() => navigate("/")}>
                    <Icon component={ArrowBackIcon} sx={{ width: "20px" }} />
                    <p className='font-medium ml-1'>Volver</p>
                </div>
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-10 justify-center items-center flex flex-col">
                    <h2 className="mb-0 text-4xl tracking-tight font-extrabold text-gray-900">Lista de Favoritos</h2>
                </div>

                {favorites.length > 0 ? (
                    favorites.map((favorite: any, index: any) => (
                        <div key={index} className="items-center rounded-lg shadow sm:flex bg-[#0e3465] border-gray-700 relative mb-5">
                            <div className='p-4 h-full w-full'>
                                <img className="rounded-lg object-cover h-32 w-32" src={favorite.image} alt={favorite.name} />
                            </div>
                            <div className="p-8">
                                <Icon
                                    component={FavoriteIcon}
                                    className='absolute text-[#ef4444] hover:text-red-400 top-4 right-5 cursor-pointer' 
                                    onClick={() => toggleFavorite(favorite)}
                                />
                                <h3 className="text-xl font-bold tracking-tight text-white w-72 overflow-hidden text-ellipsis text-nowrap">
                                    {favorite.name}
                                </h3>
                                <p className="mt-3 mb-4 font-light  text-gray-400">${favorite.price} USD</p>
                                <div className='text-gray-400 mt-3 hover:text-gray-200 cursor-pointer flex flex-row gap-1 w-fit' onClick={() => navigate('/about', { state: { product: favorite, backTo: true } })} >
                                    <p className='font-bold'>Ver</p>
                                    <Icon component={ArrowForwardIcon} />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="font-light text-gray-500 lg:mb-8 sm:text-xl">Sin favoritos...</p>
                )}
                
            </div>
        </section>
    )
}

export default Favorite