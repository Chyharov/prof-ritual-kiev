import Logo from '../Logo/Logo'
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={'container ' + s.header__padding}>
        <Logo />
        
      </div>
    </header>
  )
};

export default Header;
