import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { BsChevronDown } from 'react-icons/bs'
import { BsChevronUp } from 'react-icons/bs'
import s from './NavBar.module.scss'

const NavLinks = (props) => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showRitualGoodsSubMenu, setshowRitualGoodsSubMenu] = useState(false);

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }


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
                    to="/">
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
                    to="/ritualservices">
                    РИТУАЛЬНІ ПОСЛУГИ
                    </Link>
                    {showSubMenu ? (
                        <BsChevronUp 
                            className={s.menu__list_itemIcon}
                            onClick={() => setShowSubMenu(!showSubMenu)} />
                    ) : (
                        <BsChevronDown 
                            className={s.menu__list_itemIcon}
                            onClick={() => setShowSubMenu(!showSubMenu)} />
                    )}
                </motion.li>
                {showSubMenu && (

                <ul>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.10}}
                        className={s.menu__list_itemSubMenu}>
                            <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/ritualagent">Виклик ритуального агента</Link>
                    </motion.li>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.15}}
                        className={s.menu__list_itemSubMenu}>
                            <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/funeralorganization">Організація похорон</Link>
                    </motion.li>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.20}}
                        className={s.menu__list_itemSubMenu}>
                            <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/cremation">Кремація</Link>
                    </motion.li>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.25}}
                        className={s.menu__list_itemSubMenu}>
                            <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/hearse">Автокатафалк</Link>
                    </motion.li>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.30}}
                        className={s.menu__list_itemSubMenu}>
                            <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/cargo">Вантаж 200</Link>
                    </motion.li>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.35}}
                        className={s.menu__list_itemSubMenu}>
                            <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/mortuaryservices">Послуги моргу</Link>
                    </motion.li>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.40}}
                        className={s.menu__list_itemSubMenu}>
                            <Link onClick={() => props.isMobile && props.closeMobileMenu()}>Поминальні Обіди</Link>
                    </motion.li>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.45}}
                        className={s.menu__list_itemSubMenu}>
                            <Link onClick={() => props.isMobile && props.closeMobileMenu()}>Оформлення документів</Link>
                    </motion.li>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{ delay: 0.50 }}
                        className={s.menu__list_itemSubMenu}>
                            <Link onClick={() => props.isMobile && props.closeMobileMenu()}>Ритуальна зала</Link>
                    </motion.li>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.55}}
                        className={s.menu__list_itemSubMenu}>
                            <Link onClick={() => props.isMobile && props.closeMobileMenu()}>Музичний супровід</Link>
                    </motion.li>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{ delay: 0.60 }}
                        className={s.menu__list_itemSubMenu}>
                            <Link onClick={() => props.isMobile && props.closeMobileMenu()}>Винесення тіла</Link>
                    </motion.li>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.65}}
                        className={s.menu__list_itemSubMenu}>
                            <Link onClick={() => props.isMobile && props.closeMobileMenu()}>Відспівування померлого</Link>
                    </motion.li>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.70}}
                        className={s.menu__list_itemSubMenu}>
                            <Link onClick={() => props.isMobile && props.closeMobileMenu()}>Санобробка приміщень</Link>
                    </motion.li>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.75}}
                        className={s.menu__list_itemSubMenu}>
                            <Link onClick={() => props.isMobile && props.closeMobileMenu()}>Виготовлення фотопортрету</Link>
                    </motion.li>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{ delay: 0.80 }}
                        className={s.menu__list_itemSubMenu}>
                            <Link onClick={() => props.isMobile && props.closeMobileMenu()}>Супровід медперсоналом</Link>
                    </motion.li>
                    
                </ul>
                )}

            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.20}}
            className={s.menu__list_item}>
            <Link
                onClick={() => props.isMobile && props.closeMobileMenu()}
                className={s.menu__list_link}
                to="/ritualgoods">
                РИТУАЛЬНІ ТОВАРИ
            </Link>
            {showRitualGoodsSubMenu ? (
                <BsChevronUp 
                    className={s.menu__list_itemIcon}
                    onClick={() => setshowRitualGoodsSubMenu(!showRitualGoodsSubMenu)} />
            ) : (
                <BsChevronDown 
                    className={s.menu__list_itemIcon}
                    onClick={() => setshowRitualGoodsSubMenu(!showRitualGoodsSubMenu)} />
            )}
        </motion.li>
                {showRitualGoodsSubMenu && (
                <ul>
                    <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.10}}
            className={s.menu__list_itemSubMenu}><Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}>Вінки</Link></motion.li>
                    <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.15}}
            className={s.menu__list_itemSubMenu}><Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}>Труни</Link></motion.li>
                    <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.20}}
            className={s.menu__list_itemSubMenu}><Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}>Хрести</Link></motion.li>
                    <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.25}}
            className={s.menu__list_itemSubMenu}><Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}>Пам'ятники</Link></motion.li>
                    <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.30}}
            className={s.menu__list_itemSubMenu}><Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}>Приладдя</Link></motion.li>
                </ul>
                )}
                
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.30}}
            className={s.menu__list_item}>
                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="/about">
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
                    to="/price">
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
                    to="/contacts">
                    КОНТАКТИ
                </Link>
            </motion.li>
            

            </ul>
            </div>
     );
}
 
export default NavLinks;