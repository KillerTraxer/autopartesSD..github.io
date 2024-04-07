import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Icon } from '@mui/material';
import EstoperaImage from "../assets/Estopera_image.jpg"
import kCollarinImage from "../assets/kCollarin_image.webp"
import OriginImage from "../assets/Origin_image.webp"
import PistonImage from "../assets/Piston_image.webp";
import RodamientosImage from "../assets/Rodamientos_image.webp"
import TornilloImage from "../assets/Tornillo_image.webp";
import useFavoritesStore from '../store/FavoritesStore';
import { useNavigate } from 'react-router-dom';

function Home() {
    //@ts-ignore
    const { favorites, toggleFavorite } = useFavoritesStore();
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: "ORING DISTRIBUIDOR CORSA/CL/LN",
            description: "Oring de distribución para modelos Corsa, CL, LN.",
            price: 1614.00,
            image: OriginImage
        },
        {
            name: "RODAMIENTO CORSA/CL/RC/LN/NB RUEDA TRAS.EXT TIMKEN SET-1",
            description: "Rodamiento para rueda trasera externa de modelos Corsa, CL, RC, LN, NB.",
            price: 28.00,
            image: RodamientosImage
        },
        {
            id: 2,
            name: `KIT PISTON/SELLO 9" EP 1,00`,
            description: "Kit de pistón y sello para motores de 9 pulgadas.",
            price: 12.32,
            image: PistonImage
        },
        {
            id: 3,
            name: "TORNILLO LAPIZ MESETA (SOLO GOMA) RC/CL/LN 307,00",
            description: "Tornillo para lapicero de modelos RC, CL, LN.",
            price: 4.75,
            image: TornilloImage
        },
        {
            id: 4,
            name: "ESTOPERA LATERAL CAJA SPARK/MT IZQ 5473 1,00",
            description: "Estopera lateral para caja de cambios de modelos Spark, MT, izquierda.",
            price: 2.68,
            image: EstoperaImage
        },
        {
            id: 5,
            name: "K-COLLARIN EMBRAGUE SPORTAGE 6,00",
            description: "Collarín de embrague para modelo Sportage.",
            price: 2.82,
            image: kCollarinImage
        },
    ];

    return (
        <section>
            <div className="mx-auto max-w-screen-xl">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Nuestros productos</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">Explora nuestro catalogo de productos.</p>
                </div>

                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {products.map((product, index) => (
                        <div key={index} className="items-center  rounded-lg shadow sm:flex bg-gray-800 border-gray-700 relative">
                            <div className='p-4 h-full w-full'>
                                <img className="rounded-lg object-cover h-full" src={product.image} alt={product.name} />
                            </div>
                            <div className="p-9">
                                <Icon 
                                    component={favorites.some((favorite: any) => favorite.id === product.id) ? FavoriteIcon : FavoriteBorderIcon}
                                    className='absolute text-gray-500 hover:text-gray-300 top-4 right-5 cursor-pointer' 
                                    onClick={() => toggleFavorite(product)}
                                />
                                <h3 className="text-xl font-bold tracking-tight text-white w-72 overflow-hidden text-ellipsis text-nowrap">
                                    {product.name}
                                </h3>
                                <p className="mt-3 mb-4 font-light  text-gray-400">{product.description}</p>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <p className="text-white hover:text-white font-bold">${product.price}</p>
                                    </li>
                                </ul>
                                <div className='text-gray-400 mt-3 hover:text-gray-200 cursor-pointer flex flex-row gap-1 w-fit' onClick={() => navigate('/about', {state: { product }})} >
                                    <p className='font-bold'>Ver</p>
                                    <Icon component={ArrowForwardIcon}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default Home