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
            name: "ORING DISTRIBUIDOR CORSA/CL/LN",
            description: "Origin de regulação para os modelos Corsa, CL, LN.",
            price: 16.00,
            image: OriginImage
        },
        {
            id: 2,
            name: "CALAVERA EXTERIOR VW",
            description: "La CALAVERA EXTERIOR VW GOL 13-18 4 PUERTAS OBSCURA S/FOCO RH MOD.05",
            price: 73.30,
            image: CalaveraExterior
        },
        {
            id: 3,
            name: "ROLAMENTO CORSA/CL/RC/LN/NB RODA TRASEIRA EXT TIMKEN SET-1",
            description: "Rolamento exterior da roda traseira para os modelos Corsa, CL, RC, LN, NB.",
            price: 28.00,
            image: RodamientosImage
        },
        {
            id: 4,
            name: `KIT PISTÃO/VEDANTE 9" EP 1,00`,
            description: "Kit de pistões e vedantes para motores de 9 polegadas.",
            price: 50.32,
            image: PistonImage
        },
        {
            id: 5,
            name: "PARAFUSO PARA LÁPIS DE PLATINA (APENAS BORRACHA) RC/CL/LN 307,00",
            description: "Parafuso para suporte de caneta para os modelos RC, CL, LN.",
            price: 4.75,
            image: TornilloImage
        },
        {
            id: 6,
            name: "SPARK/MT PAINEL LATERAL ESQUERDO 5473 1,00",
            description: "Painel lateral da caixa de velocidades para Spark, modelos MT, lado esquerdo.",
            price: 2.68,
            image: EstoperaImage
        },
        {
            id: 7,
            name: "K-CLUTCH CLUTCH COLAR SPORTAGE 6,00 ",
            description: "Colar de embraiagem para o modelo Sportage.",
            price: 2.82,
            image: kCollarinImage
        },
    ];

    return (
        <section>
            <div className="mx-auto max-w-screen-xl">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Os nossos produtos</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">Explore o nosso catálogo de produtos.</p>
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