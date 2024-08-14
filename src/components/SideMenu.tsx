import PersonIcon from '@mui/icons-material/Person';
import { Icon } from '@mui/material';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

function SideMenu({ children }: { children: any }) {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);

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


    return (
        <>
            <header className="antialiased">
                <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-[#0e3465]">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex justify-start items-center">
                            <div className="flex mr-4 cursor-default">
                                <img src="https://flowbite.s3.amazonaws.com/logo.svg" className="mr-3 h-8" alt="FlowBite Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Autopartes de Santiago Durango</span>
                            </div>
                            <div className='relative mt-1 ml-5' onClick={() => navigate('/')}>
                                <p className={`text-xl ${pathname === '/' ? 'text-gray-200' : 'text-gray-400'} hover:text-gray-200 cursor-pointer`}>Inicio</p>
                            </div>
                            <div className='relative mt-1 ml-5' onClick={() => navigate('/info')}>
                                <p className={`text-xl ${pathname === '/info' ? 'text-gray-200' : 'text-gray-400'} hover:text-gray-200 cursor-pointer`}>Sobre nosotros</p>
                            </div>
                            <div className='relative mt-1 ml-5' onClick={() => navigate('/ubi')}>
                                <p className={`text-xl ${pathname === '/ubi' ? 'text-gray-200' : 'text-gray-400'} hover:text-gray-200 cursor-pointer`}>Ubicación</p>
                            </div>
                            <div className='relative mt-1 ml-5' onClick={() => navigate('/contact')}>
                                <p className={`text-xl ${pathname === '/contact' ? 'text-gray-200' : 'text-gray-400'} hover:text-gray-200 cursor-pointer`}>Contacto</p>
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
                                    <Icon component={FavoriteIcon} />
                                    <p>Favoritos</p>
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </nav>
            </header>

            <main className={`mt-10`}>
                {children}
            </main>
        </>
    )
}

export default SideMenu