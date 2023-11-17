import AboutRitualAgent from '../../images/AboutRitualAgent/AboutRitualAgent.jpg'
import s from './SectionAboutRitualAgent.module.scss'

const SectionAboutRitualAgent = () => {
    return (
      <section className={s.sectionAboutRitualAgent}>
        <div className={'container ' + s.aboutRitualAgent__container}>
            <img className={s.aboutRitualAgent__decoration} loading="lazy" src={AboutRitualAgent} alt="advantages__decoration" />
                
            <p className={s.aboutRitualAgent__description}>В агентстві “Профритуал” Ви можете замовити допомогу агента ритуальних послуг. Наш похоронний агент може під’їхати 24 години на добу, <b>первинна консультація — безкоштовно</b>. У разі потреби ми можемо надати медичну та психологічну допомогу. Наш агент ритуальних послуг готовий взяти на себе всі бюрократичні формальності, які необхідні для здійснення похоронного процесу.</p>

            <h2 className={s.aboutRitualAgent__title}>Завдання ритуального агента.</h2>
                

            <p className={s.aboutRitualAgent__description}>У спектр завдань спеціаліста входять визначення місця поховання або кремації, допомога у виборі <a className={s.aboutRitualAgent__link} href="/">труни</a> та <a className={s.aboutRitualAgent__link} href="/">іншого похоронного приладдя</a>. У нашій компанії ви можете придбати як труну економ-класу, так і елітну поліровану труну, а також ми можемо виготовити труну за індивідуальним замовленням. Крім того, у нас представлений широкий асортимент іншого приладдя, у тому числі <a className={s.aboutRitualAgent__link} href="/">хрести на могилу</a>, <a className={s.aboutRitualAgent__link} href="/"> вінки з живих та штучних квітів</a>, композиції на труну та багато іншого.</p>
        
                
            <h2 className={s.aboutRitualAgent__title}>Агент похоронних послуг</h2>
        
            <blockquote className={s.aboutRitualAgent__blockquote}>Наш агент <b> уважно поставиться</b> до всіх ваших побажань і супроводжуватиме весь процес до закінчення церемонії. Питання транспортування тіла (а також послуги Вантаж 200) ритуальні агенти також беруть на себе. Похоронний процес відбуватиметься відповідно до релігійних поглядів, яких дотримувався покійний. За бажанням клієнта здійснюється виклик священнослужителя.</blockquote>    
            
            <p className={s.aboutRitualAgent__description}>Що стосується наших цін, у нас представлений широкий ціновий діапазон на послуги, тому вони доступні різним верствам населення.</p>
                
        </div>
      </section>
  )
};

export default SectionAboutRitualAgent;
