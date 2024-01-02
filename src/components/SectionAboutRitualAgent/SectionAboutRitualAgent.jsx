import { Link } from 'react-router-dom';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import AboutRitualAgent from '../../images/AboutRitualAgent/AboutRitualAgent.jpg'
import s from './SectionAboutRitualAgent.module.scss'

const SectionAboutRitualAgent = () => {
    return (
      <section className={s.sectionAboutRitualAgent}>
        <div className={'container ' + s.aboutRitualAgent__container}>
            <img className={s.aboutRitualAgent__decoration} loading="lazy" src={AboutRitualAgent} alt="advantages__decoration" />
                
            <p style={{marginBottom: '20px'}} className='description'>В агентстві “Профритуал” Ви можете замовити допомогу агента ритуальних послуг. Наш похоронний агент може під’їхати 24 години на добу, <b>первинна консультація — безкоштовно</b>. У разі потреби ми можемо надати медичну та психологічну допомогу. Наш агент ритуальних послуг готовий взяти на себе всі бюрократичні формальності, які необхідні для здійснення похоронного процесу.</p>

            <h2 style={{marginBottom: '20px'}} className='title'>Завдання ритуального агента.</h2>
                
            <p style={{marginBottom: '20px'}} className='description'>У спектр завдань спеціаліста входять визначення місця поховання або кремації, допомога у виборі <Link className='links' href="/сoffins">труни</Link> та <Link className='links' href="/ritualaccessories">іншого похоронного приладдя</Link>. У нашій компанії ви можете придбати як труну економ-класу, так і елітну поліровану труну, а також ми можемо виготовити труну за індивідуальним замовленням. Крім того, у нас представлений широкий асортимент іншого приладдя, у тому числі <Link className='links' href="/crosses">хрести на могилу</Link>, <Link className='links' href="/ritualwreath"> вінки з живих та штучних квітів</Link>, композиції на труну та багато іншого.</p>
           
            <h2 style={{marginBottom: '20px'}} className='title'>Агент похоронних послуг</h2>
        
            <blockquote style={{marginBottom: '20px'}} className='blockquote'>Наш агент <b> уважно поставиться</b> до всіх ваших побажань і супроводжуватиме весь процес до закінчення церемонії. Питання транспортування тіла (а також послуги Вантаж 200) ритуальні агенти також беруть на себе. Похоронний процес відбуватиметься відповідно до релігійних поглядів, яких дотримувався покійний. За бажанням клієнта здійснюється виклик священнослужителя.</blockquote>    
            
            <p style={{marginBottom: '20px'}} className='description'>Що стосується наших цін, у нас представлений широкий ціновий діапазон на послуги, тому вони доступні різним верствам населення.</p>
                
            <SectionNeedHelp/>

            <h2 style={{marginTop: '20px'}} className='title'>Наші співробітники приїдуть дуже швидко!</h2>
                
            <p style={{marginBottom: '20px'}} className='description'>Ми надаємо якісні послуги протягом 17 років, і наш досвід, тактовність та делікатність дозволяють нам зменшувати горе людей, які втратили своїх близьких. Взявши на себе більшість турбот з похорону, ми залишаємо час для найголовнішого — для прощання з близьким.</p>
        
            <p className='description'>Кожен з нас розуміє, що у випадку, коли в будинку трапилося лихо, <b>кваліфікована допомога</b> має бути надана негайно. Ритуальний агент від нашої компанії зможе виїхати на ваше прохання якнайшвидше і приступити до надання професійної допомоги та підтримки у скрутну хвилину.</p>
        
        </div>
      </section>
  )
};

export default SectionAboutRitualAgent;
