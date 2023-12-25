import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { BsChevronDown } from 'react-icons/bs'
import { BsChevronUp } from 'react-icons/bs'
import s from './NavBar.module.scss'

const NavLinks = (props) => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showRitualGoodsSubMenu, setshowRitualGoodsSubMenu] = useState(false);
    const [showPhoneMenu, setShowPhoneMenu] = useState(false);

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }


    return (
        <div className='container'>
        <ul className={s.menu__list}>

            <Link onClick={() => props.isMobile && props.closeMobileMenu()} className={s.menu__list_link} to="/">
                <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.05}}
                className={s.menu__list_item}>ГОЛОВНА</motion.li>
            </Link>

                
            <div className={s.navContainer}>
                    
            <Link onClick={() => props.isMobile && props.closeMobileMenu()} className={s.menu__list_link} to="/ritualservices">
                <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.10}}
                className={s.menu__list_item}>РИТУАЛЬНІ ПОСЛУГИ</motion.li>
            </Link>
                    {showSubMenu ? (
                        <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.10}}
                        className={s.menu__list_item}><BsChevronUp 
                        className={s.menu__list_itemIcon}
                        onClick={() => setShowSubMenu(!showSubMenu)} /></motion.li>
                        ) : (
                        <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.10}}
                        className={s.menu__list_item}><BsChevronDown 
                        className={s.menu__list_itemIcon}
                        onClick={() => setShowSubMenu(!showSubMenu)} /></motion.li>
                        )}
            </div>
                
                {showSubMenu && (

                <ul>
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/ritualagent">
                        <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.10}}
                        className={s.menu__list_itemSubMenu}>Виклик ритуального агента
                        </motion.li>
                    </Link>
                        
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/funeralorganization">
                        <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.15}}
                        className={s.menu__list_itemSubMenu}>Організація похорон
                        </motion.li>
                    </Link>
                        
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/cremation">
                        <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.20}}
                        className={s.menu__list_itemSubMenu}>Кремація
                        </motion.li>
                    </Link>
                    
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/hearse">
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.25}}
                        className={s.menu__list_itemSubMenu}>Автокатафалк
                    </motion.li>
                    </Link>
                        
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/cargo">
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.30}}
                        className={s.menu__list_itemSubMenu}>Вантаж 200
                    </motion.li>
                    </Link>
                        
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/mortuaryservices">    
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.35}}
                        className={s.menu__list_itemSubMenu}>Послуги моргу
                    </motion.li>
                    </Link>
                    
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/memorialdinners">
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.40}}
                        className={s.menu__list_itemSubMenu}>Поминальні Обіди
                    </motion.li>
                    </Link>
                            
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/documentsforfuneral">
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.45}}
                        className={s.menu__list_itemSubMenu}>
                            Оформлення документів для похорону
                    </motion.li>
                    </Link>
                        
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/ritualhall">
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{ delay: 0.50 }}
                        className={s.menu__list_itemSubMenu}>Ритуальна зала
                    </motion.li>
                    </Link>
                        
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/musicalaccompanimen">
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.55}}
                        className={s.menu__list_itemSubMenu}>Музичний супровід
                    </motion.li>
                    </Link>
                            
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/removalbody">
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{ delay: 0.60 }}
                        className={s.menu__list_itemSubMenu}>
                            Винесення тіла
                    </motion.li>
                    </Link>
                        
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/requiemservicebypriest">
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.65}}
                        className={s.menu__list_itemSubMenu}>Відспівування померлого
                    </motion.li>
                    </Link>
                        
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/sanitationofpremises">
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.70}}
                        className={s.menu__list_itemSubMenu}>Санобробка приміщень
                    </motion.li>
                    </Link>
                        
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/makingfuneralportrait">
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.75}}
                        className={s.menu__list_itemSubMenu}>Виготовлення фотопортрету
                    </motion.li>
                    </Link>
                        
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/funeralescortbymedicalpersonnal">
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{ delay: 0.80 }}
                        className={s.menu__list_itemSubMenu}>Супровід медперсоналом
                    </motion.li>
                    </Link>
                </ul>
                )}
            
            <div className={s.navContainer}> 

            <Link onClick={() => props.isMobile && props.closeMobileMenu()} className={s.menu__list_link} to="/ritualgoods">
                <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.20}}
                className={s.menu__list_item}>РИТУАЛЬНІ ТОВАРИ</motion.li>
            </Link>
                
            {showRitualGoodsSubMenu ? (
                <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.20}}
                className={s.menu__list_item}><BsChevronUp 
                    className={s.menu__list_itemIcon}
                    onClick={() => setshowRitualGoodsSubMenu(!showRitualGoodsSubMenu)} /></motion.li>
            ) : (
                <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.20}}
                className={s.menu__list_item}><BsChevronDown 
                    className={s.menu__list_itemIcon}
                    onClick={() => setshowRitualGoodsSubMenu(!showRitualGoodsSubMenu)} /></motion.li>
            )}
            </div>   
                
                {showRitualGoodsSubMenu && (
                
            <ul>
            <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/ritualwreath">
                <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.10}}
                className={s.menu__list_itemSubMenu}>Вінки
                </motion.li>
            </Link>
            

            <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/сoffins">
                <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.15}}
                className={s.menu__list_itemSubMenu}>Труни
                </motion.li>
            </Link>
                
            <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/crosses">
                <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.20}}
                className={s.menu__list_itemSubMenu}>Хрести
                </motion.li>
            </Link>

            <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/ritualmonuments">
                    <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.25}}
                    className={s.menu__list_itemSubMenu}>Пам'ятники
                    </motion.li>
            </Link>
                    
            <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="/ritualaccessories">
                <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.30}}
                className={s.menu__list_itemSubMenu}>Приладдя
                </motion.li>
            </Link>
            </ul>
            )}
                
            <Link onClick={() => props.isMobile && props.closeMobileMenu()} className={s.menu__list_link} to="/about">
                <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.30}}
                className={s.menu__list_item}>ПРО НАС
                </motion.li>
            </Link>

            <Link onClick={() => props.isMobile && props.closeMobileMenu()} className={s.menu__list_link} to="/price"> 
                <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.40}}
                className={s.menu__list_item}>ЦІНИ
                </motion.li>
            </Link>
                
            <Link onClick={() => props.isMobile && props.closeMobileMenu()} className={s.menu__list_link} to="/contacts">
                <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.50}}
                className={s.menu__list_item}>КОНТАКТИ
                </motion.li>
            </Link>
                
    <div className={s.navContainerPhone}> 

            
            
                <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.60}}
                className={s.menu__list_item}>
                    <div className={s.phoneNumbersContainer}>
                        <p className={s.phoneNumberDescription}>Цілодобово 24/7</p>
                        <a href="tel:+380442090261"><p className={s.phoneNumberNavBar}>+38 (044) 209-02-61</p></a>
                    </div>  
                </motion.li>
           
                    
            {showPhoneMenu ? (
                <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.20}}
                className={s.menu__list_item}><BsChevronUp 
                    className={s.menu__list_itemIcon}
                    onClick={() => setShowPhoneMenu(!showPhoneMenu)} /></motion.li>
            ) : (
                <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.20}}
                className={s.menu__list_item}><BsChevronDown 
                    className={s.menu__list_itemIcon}
                    onClick={() => setShowPhoneMenu(!showPhoneMenu)} /></motion.li>
            )}
    </div>   
                
                {showPhoneMenu && (
                
            <ul className={s.phoneNumbersList}>

                <a href="tel:+380670112160">
                    <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.15}}
                    className={s.menu__list_itemSubMenuPhones}>+38 (067) 011-21-60
                    </motion.li>
                </a>

                <a href="tel:+380939040707">
                    <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.20}}
                    className={s.menu__list_itemSubMenuPhones}>+38 (093) 904-07-07
                    </motion.li>
                </a>
            </ul>
            )}

        </ul>
        </div>
    );
}
 
export default NavLinks;