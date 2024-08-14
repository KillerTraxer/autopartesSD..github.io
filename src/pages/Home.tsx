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
import CalaveraExterior from "../assets/calaveraExterior.jpg";
import useFavoritesStore from '../store/FavoritesStore';
import { useNavigate } from 'react-router-dom';

function Home() {
    //@ts-ignore
    const { favorites, toggleFavorite } = useFavoritesStore();
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: "ANILLO DE DISTRIBUCIÓN CORSA/CL/LN",
            description: "Anillo de regulación para los modelos Corsa, CL, LN.",
            price: 16.00,
            image: OriginImage
          },
          {
            id: 2,
            name: "CALAVERA EXTERIOR VW",
            description: "CALAVERA EXTERIOR VW GOL 13-18 4 PUERTAS DARK S/FOCO RH MOD.05",
            price: 73.30,
            image: CalaveraExterior
          },
          {
            id: 3,
            name: "RODAMIENTO CORSA/CL/RC/LN/NB RUEDA TRASERA EXT TIMKEN SET-1",
            description: "Rodamiento exterior de la rueda trasera para los modelos Corsa, CL, RC, LN, NB.",
            price: 28.00,
            image: RodamientosImage
          },
          {
            id: 4,
            name: `KIT PISTÓN/SELLOS 9" EP 1,00`,
            description: "Kit de pistones y sellos para motores de 9 pulgadas.",
            price: 50.32,
            image: PistonImage
          },
          {
            id: 5,
            name: "TORNILLO PARA LÁPIZ DE PLATINO (SOLO GOMA) RC/CL/LN 307,00",
            description: "Tornillo para soporte de bujía para los modelos RC, CL, LN.",
            price: 4.75,
            image: TornilloImage
          },
          {
            id: 6,
            name: "SPARK/MT PANEL LATERAL IZQUIERDO 5473 1,00",
            description: "Panel lateral de la caja de cambios para Spark, modelos MT, lado izquierdo.",
            price: 2.68,
            image: EstoperaImage
          },
          {
            id: 7,
            name: "K-CLUTCH EMBRAGUE COLLAR SPORTAGE 6,00 ",
            description: "Collar de embrague para el modelo Sportage.",
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
                        <div key={index} className="items-center  rounded-lg shadow sm:flex bg-[#0e3465] border-gray-700 relative">
                            <div className='p-4 h-full w-full'>
                                <img className="rounded-lg object-cover h-full" src={product.image} alt={product.name} />
                            </div>
                            <div className="p-9">
                                <Icon 
                                    component={favorites.some((favorite: any) => favorite.id === product.id) ? FavoriteIcon : FavoriteBorderIcon}
                                    className='absolute text-[#ef4444] hover:text-red-400 top-4 right-5 cursor-pointer' 
                                    onClick={() => toggleFavorite(product)}
                                />
                                <h3 className="text-xl font-bold tracking-tight text-white w-72 overflow-hidden text-ellipsis text-nowrap">
                                    {product.name}
                                </h3>
                                <p className="mt-3 mb-4 font-light  text-gray-400">{product.description}</p>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <p className="text-white hover:text-white font-bold">${product.price} USD</p>
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