import { faCaretDown, faCaretRight, faCartShopping, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import FunStartLogo from '../assets/logo-funstart.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Header = () => {

    const [isFocused, setIsFocused] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0);
    const [rotateNavbar, setRotateNavbar] = useState(false);
    const { name, logout } = useAuth();


    const handleFocus = () => {
        setIsFocused(true)
    };

    const handleBlur = () => {
        setIsFocused(false)
    };

    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setRotateNavbar(true);
            } else {
                setRotateNavbar(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const getFirstName = (fullName: string | null) => {
        if (fullName && typeof fullName === 'string') {
            const slices = fullName.split(' ');
            return slices[0];
        }
        return '';
    };


    return(
        <header id='header'>
            <div className={`header-info ${rotateNavbar ? 'border-shadow' : ''}`}>
                <div className="container justify-between" >
                    <div className='img-container'>
                        <Link to="/">
                            <img id='logo-funstart' src={FunStartLogo}></img>
                            <h1 id='logo-title'>FunStart Games</h1>
                        </Link>
                    </div>
                    <div className={`search-container ${isFocused ? 'focused' : ''}`}>
                        <FontAwesomeIcon icon={faSearch} className='search-icon' />
                        <input
                            type="text"
                            placeholder="Pesquisar..."
                            className='search-bar'
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className='user-info'>
                        <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
                        <p className='user-text'>
                            Olá, {getFirstName(name) ? getFirstName(name) : 'visitante'}!
                            <span>Minha conta <FontAwesomeIcon icon={faCaretDown} /></span>
                        </p>
                        <div className='user-dropdown flex-column'>
                            {
                                typeof name === 'string' ? 
                                (
                                    <>
                                        <button>Minha conta</button>
                                        <div className='divisor-container'>
                                            <div></div>
                                            <span className='divisor-span'> ou </span>
                                            <div></div>
                                        </div>
                                        <p className="logout-text" onClick={logout}>Sair</p>
                                    </>
                                    
                                    
                                    
                                ) : 
                                (
                                <>
                                    <Link to="/auth/login">
                                        <button>
                                            <span>
                                                Entrar
                                            </span>
                                            <FontAwesomeIcon icon={faCaretRight} />
                                        </button>
                                    </Link>
                                    <div className='divisor-container'>
                                        <div></div>
                                        <span className='divisor-span'> ou </span>
                                        <div></div>
                                    </div>
                                    <p> 
                                        Cliente novo? <Link to="/auth/register">Cadastre-se </Link>
                                    </p>
                                </>
                                )
                            }
                        </div>
                    </div>
                    {
                        name && 
                        <div className="cart-container"> 
                            <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
                        </div>
                    }

                </div>
            </div>
            <Navbar rotate={rotateNavbar} />
        </header>
    );
}