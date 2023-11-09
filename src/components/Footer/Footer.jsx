import s from './Footer.module.scss'


const Footer = () => {
    return (
      <footer className={s.footer}>
        <div className={'container ' + s.footer__container}>
                
            <p className={s.footer__description}> © Похоронне бюро - Профритуал 2005-2023 </p>
        
        </div>
      </footer>
  )
};

export default Footer;
