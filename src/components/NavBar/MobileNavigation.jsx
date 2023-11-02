import NavLinks from "./NavLinks";
import s from './NavBar.module.scss'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);
    const hamburgerIcon = <GiHamburgerMenu className={s.hamburgerMenu} aria-label="Меню" onClick={() => setOpen(!open)}/>
    const hamburgerCloseIcon = <AiOutlineClose className={s.hamburgerMenu} aria-label="Закрити меню"onClick={() => setOpen(!open)}/>
    const closeMobileMenu = () => setOpen(false);

    return ( 
        <nav className={s.mobileNavigation}>
            {open ? hamburgerCloseIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} /> }
        </nav>
        
     );
}
 
export default MobileNavigation;