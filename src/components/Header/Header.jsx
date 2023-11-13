import Logo from '../Logo/Logo'
import s from './Header.module.scss';
import NavBar from 'components/NavBar/NavBar';

const Header = ( {color} ) => {
  return (
    <header className={s.header}>
      <div className={'container ' + s.header__container}>
        <Logo />

        <NavBar color={color} />
      </div>


    </header>
  )
};

export default Header;
