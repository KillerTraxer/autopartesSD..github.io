import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Icon, IconButton, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useState, useEffect } from 'react';
import useCartStore from '../store/cartStore';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function SideMenu({ children }: { children: any }) {
    useEffect(() => {
        initMercadoPago('TEST-dea5798c-8f7f-43ad-9447-40d56577012a', { locale: "en-US" });
    }, []);

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    //@ts-ignore
    const { cartItems, removeFromCart, getTotalPrice } = useCartStore();
    const [preferenceId, setPreferenceId] = useState(null);

    const calculateSubtotal = () => {
        //@ts-ignore
        const subtotal = cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
        return subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const toggleDrawer = (open: any) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    const createPreference = async () => {
        try {
            const items = cartItems.map((item: any) => ({
                title: item.name,
                quantity: parseInt(item.quantity),
                unit_price: parseInt(item.price),
                // currency_id: "MXN",
            }));

            const response = await axios.post("https://project-ecommerce-server.onrender.com/create_preference", { items });

            const { id } = response.data;
            return id
        } catch (error) {
            console.log(error);
        }
    }

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }
    }

    useEffect(() => {
        if (!open) {
            setPreferenceId(null);
        }
    }, [open]);

    const handleProfileMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    //@ts-ignore
    const handleProfileMenuClose = () => {
        setAnchorEl(null);
    };

    const handleFavorite = () => {
        setAnchorEl(null);
        navigate("/favorite");
    };

    const handleShop = () => {
        setAnchorEl(null);
        navigate("/purchases");
    };


    const list = () => (
        <Box
            sx={{ width: 300, background: "white", height: "100vh", color: "black", p: 4 }}
            role="presentation"
            // onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Typography sx={{ fontWeight: "bold" }}>{cartItems.length} produtos</Typography>
            <hr className="my-3 border-gray-800" />

            <List sx={{ padding: 0, mb: 2 }}>
                {cartItems.length > 0 ? (
                    cartItems.map((item: any, index: any) => (
                        <div key={index}>
                            <ListItem>
                                <div className='flex flex-col -ml-3 relative'>
                                    <p className='text-[13px] font-bold'>{item.name}</p>
                                    <p className='text-[13px]'>{item.quantity} x ${item.price} USD</p>
                                </div>
                                <img src={item.image} className='w-20 h-20 -mr-5 object-cover' />
                                <IconButton
                                    className='icon-button'
                                    sx={{ position: "absolute", top: -2, right: -15, backgroundColor: "#fff" }}
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <HighlightOffIcon sx={{ width: "15px", height: "15px" }} />
                                </IconButton>
                            </ListItem>
                            {index < cartItems.length - 1 && <hr className="my-1 border-[#e7e7e7]" />}
                        </div>
                    ))
                ) : (
                    <Typography className='text-center text-gray-500'>Não existem artigos no seu carrinho</Typography>
                )
                }
            </List>

            {cartItems.length > 0 && (
                <>
                    <hr className="my-3 border-gray-800" />

                    <div className='flex flex-row justify-between'>
                        <p className='font-bold'>TOTAL:</p>
                        <p className='font-bold'>${calculateSubtotal()} USD</p>
                    </div>

                    <div>
                        {preferenceId !== null ? (
                            <div className='-ml-5'>
                                <Wallet initialization={{ preferenceId: preferenceId }} />
                            </div>
                        ) : (
                            <button
                                className="flex py-2.5 px-5 mt-5 font-medium w-full text-center items-center justify-center focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-[#be0f34] text-white border-gray-600 hover:text-white hover:bg-[#ad142f]"
                                onClick={handleBuy}
                            >
                                Finalizar a compra
                            </button>
                        )}
                    </div>
                </>
            )}

        </Box>
    );

    //@ts-ignore
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

    return (
        <>
            <header className="antialiased">
                <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-[#0e3465]">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex justify-start items-center">
                            <div className="flex mr-4 cursor-default">
                                <img src="https://flowbite.s3.amazonaws.com/logo.svg" className="mr-3 h-8" alt="FlowBite Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Autopartes de Santiago</span>
                            </div>
                            <div className='relative mt-1 ml-5' onClick={() => navigate('/')}>
                                <p className={`text-xl ${pathname === '/' ? 'text-gray-200' : 'text-gray-400'} hover:text-gray-200 cursor-pointer`}>Início</p>
                            </div>
                            <div className='relative mt-1 ml-5' onClick={() => navigate('/info')}>
                                <p className={`text-xl ${pathname === '/info' ? 'text-gray-200' : 'text-gray-400'} hover:text-gray-200 cursor-pointer`}>Sobre nós</p>
                            </div>
                        </div>
                        <div className="flex items-center lg:order-2 gap-1">
                            <button type="button" className="p-2 mr-1  rounded-lg   text-white hover:text-white hover:bg-blue-900 focus:ring-4  focus:ring-gray-600" onClick={handleProfileMenuOpen}>
                                <span className="sr-only">View profile</span>
                                <Icon component={PersonIcon} />
                            </button>
                            <Menu
                                id="profile-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleProfileMenuClose}
                                MenuListProps={{
                                    'aria-labelledby': 'profile-button',
                                }}
                            >
                                <MenuItem onClick={handleFavorite} className='gap-2'>
                                    <Icon component={FavoriteIcon}/>
                                    <p>Favoritos</p>
                                </MenuItem>
                                <MenuItem onClick={handleShop} className='gap-2'>
                                    <Icon component={ShoppingCartIcon }/>
                                    <p>Loja</p>
                                </MenuItem>
                            </Menu>
                            <button onClick={toggleDrawer(true)} type="button" className="flex flex-row p-2 mr-1  rounded-lg  text-white hover:text-white hover:bg-blue-900 focus:ring-4  focus:ring-gray-600">
                                <span className="sr-only">View cart</span>
                                <Icon component={ShoppingBagIcon} />
                                <Typography sx={{ marginTop: "3px", marginLeft: "4px" }}>{totalItems}</Typography>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>


            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>

            <main className={`mt-10`}>
                {children}
            </main>
        </>
    )
}

export default SideMenu