import { useLocation, useNavigate } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Icon, Snackbar, Alert } from '@mui/material';
import useFavoritesStore from '../store/FavoritesStore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import useCartStore from '../store/cartStore';


function Information() {
    const navigate = useNavigate();
    const location = useLocation();
    const product = location?.state ? location?.state?.product : null;
    const backTo = location?.state ? location?.state?.backTo : false;
    //@ts-ignore
    const { favorites, toggleFavorite } = useFavoritesStore();
    const [quantity, setQuantity] = useState(1);
    //@ts-ignore
    const { addToCart } = useCartStore();
    const [open, setOpen] = useState(false);

    const increment = () => {
        setQuantity(prevQuantity => prevQuantity < 99 ? prevQuantity + 1 : prevQuantity);
    };

    const decrement = () => {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : prevQuantity);
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setOpen(true);
    };

    //@ts-ignore
    const handleClose = (event: SyntheticEvent<Element, Event> | Event, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false); // Ocultar el Snackbar
    };

    return (
        <section>
            <div className="max-w-screen-2xl px-4 mx-auto 2xl:px-0 mt-14 relative">
                <div className='flex cursor-pointer w-fit' onClick={() => { if (backTo) { navigate("/favorite") } else { navigate('/') } }}>
                    <Icon component={ArrowBackIcon} sx={{ width: "20px" }} />
                    <p className='font-medium ml-1'>Voltar à</p>
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
                                {favorites.includes(product) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                            </p>

                            <div className="flex items-center justify-center border border-black rounded-lg w-24">
                                <IconButton onClick={decrement} disabled={quantity <= 1} sx={{ marginRight: "-12px" }}>
                                    <HorizontalRuleIcon sx={{ width: "15px" }} />
                                </IconButton>
                                <input
                                    type='number'
                                    className='border-0 text-center'
                                    onChange={(e: any) => setQuantity(e.target.value)}
                                    value={quantity}
                                    max={99}
                                    min={1}
                                    readOnly
                                />
                                <IconButton onClick={increment} disabled={quantity >= 99} sx={{ marginLeft: "-12px" }}>
                                    <AddIcon sx={{ width: "15px" }} />
                                </IconButton>
                            </div>

                            <p
                                className="text-white mt-4 sm:mt-0  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800 flex items-center justify-center"
                                role="button"
                                onClick={handleAddToCart}
                            >
                                <svg
                                    className="w-6 h-6 -ms-2 me-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                    />
                                </svg>

                                Adicionar ao carrinho
                            </p>
                        </div>

                        <hr className="my-6 md:my-8 border-gray-800" />

                        <p className="mb-6text-gray-400">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>

            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Produto adicionado ao carrinho
                </Alert>
            </Snackbar>
        </section>
    )
}

export default Information