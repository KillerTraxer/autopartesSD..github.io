import { useLocation, useNavigate } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Icon } from '@mui/material';
import useFavoritesStore from '../store/FavoritesStore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Information() {
    const navigate = useNavigate();
    const location = useLocation();
    const product = location?.state ? location?.state?.product : null;
    const backTo = location?.state ? location?.state?.backTo : false;
    //@ts-ignore
    const { favorites, toggleFavorite } = useFavoritesStore();

    return (
        <section>
            <div className="max-w-screen-2xl px-4 mx-auto 2xl:px-0 mt-14 relative">
                <div className='flex cursor-pointer w-fit' onClick={() => { if (backTo) { navigate("/favorite") } else { navigate('/') } }}>
                    <Icon component={ArrowBackIcon} sx={{ width: "20px" }} />
                    <p className='font-medium ml-1'>Volver</p>
                </div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-4">
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                        <img className="w-full block" src={product.image} alt={product.name} />
                    </div>

                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        <h1
                            className="text-xl font-semibold text-gray-900 sm:text-2xl"
                        >
                            {product.name}
                        </h1>
                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <p
                                className="text-2xl font-extrabold text-gray-900 sm:text-3xl"
                            >
                                ${product.price} USD
                            </p>
                        </div>

                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            <p
                                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium  focus:outline-none  rounded-lg border focus:z-10 focus:ring-4  focus:ring-gray-700 bg-[#be0f34] text-white border-gray-600 hover:text-white hover:bg-[#ad142f]"
                                role="button"
                                onClick={() => toggleFavorite(product)}
                            >
                                <Icon component={favorites.some((favorite: any) => favorite.id === product.id) ? FavoriteIcon : FavoriteBorderIcon} style={{ width: "20px", marginRight: "4px" }} />
                                {favorites.includes(product) ? "Quitar de favoritos" : "Añadir a favoritos"}
                            </p>
                        </div>

                        <hr className="my-6 md:my-8 border-gray-800" />

                        <p className="mb-6text-gray-400">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Information