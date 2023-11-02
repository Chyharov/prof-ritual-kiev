import { Link } from 'react-scroll';
import { motion } from 'framer-motion'
import s from './NavBar.module.scss'

const NavLinks = (props) => {

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    const getDeviceType = () => {
    const width = window.innerWidth;
    if (width <= 767) {
        return 'mobile';
    } else if (width >= 768 && width <= 1359) {
        return 'tablet';
    } else {
        return 'desktop';
    }
};

    const getOffsetByDeviceType = () => {
        const deviceType = getDeviceType();
        if (deviceType === 'mobile') {
            return -90;
        } else if (deviceType === 'tablet') {
            return -160;
        } else {
            return -180;
        }
    };


    return (
        <div className='container'>
        <ul className={s.menu__list}>

            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.05}}
            className={s.menu__list_item}>
               <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={getOffsetByDeviceType()}
                    duration={500}>
                    ГОЛОВНА
                </Link>
            </motion.li>

            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.10}}
            className={s.menu__list_item}>
                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="сontacts"
                    spy={true}
                    smooth={true}
                    offset={getOffsetByDeviceType()}
                    duration={500}>
                    РИТУАЛЬНІ ПОСЛУГИ
                </Link>
            </motion.li>

            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.20}}
            className={s.menu__list_item} 
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={getOffsetByDeviceType()}
                    duration={500}>
                    РИТУАЛЬНІ ТОВАРИ
                </Link>
            </motion.li>

            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.30}}
            className={s.menu__list_item}>
                <Link
                onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={getOffsetByDeviceType()}
                    duration={500}>
                    ПРО НАС
                </Link>
            </motion.li>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.40}}
            className={s.menu__list_item}>
                <Link
                onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="servicesList"
                    spy={true}
                    smooth={true}
                    offset={getOffsetByDeviceType()}
                    duration={500}>
                    ЦІНИ
                </Link>
                </motion.li>
                 <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.50}}
            className={s.menu__list_item}>
                <Link
                onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="servicesList"
                    spy={true}
                    smooth={true}
                    offset={getOffsetByDeviceType()}
                    duration={500}>
                    КОНТАКТИ
                </Link>
            </motion.li>
            

            </ul>
            </div>
     );
}
 
export default NavLinks;