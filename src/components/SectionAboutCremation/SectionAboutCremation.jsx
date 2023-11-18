import AboutCremation from '../../images/Cremation/Cremation.jpg'
import s from './SectionAboutCremation.module.scss'



const SectionAboutCremation = () => {
    return (
      <section className={s.sectionAboutCremation}>
        <div className={'container ' + s.aboutCremation__container}>
                <img className={s.aboutCremation__decoration} loading="lazy" src={AboutCremation} alt="hero__decoration" />
                
                <p className={s.aboutCremation__description}>Профритуал надає послуги кремації у місті Київ. Кремація є відносно новою послугою в Україні, але за даними статистики 45% померлих було кремовано у місті Київ минулого року. Кремація це складний процес, до якого потрібно правильно підготуватися, щоби все пройшло добре.</p>

                <h2 className={s.aboutCremation__title}>Як виконується кремація у місті Київ</h2>

                <p className={s.aboutCremation__description}>Она производится, если человек еще при жизни высказал в своем завещании, что не хочет, чтобы его после Вона робиться, якщо людина ще за життя висловила у своєму заповіті, що не хоче, щоб її після смерті ховали, а хоче, щоб її тіло було перетворено на порох. Також така процедура проводиться за бажанням родичів мертвої людини.</p>

                <p className={s.aboutCremation__description}><b>Які необхідні документи для кремації.</b> Кремування можливе лише за наявності наступних документів:</p>

                <ul className={s.aboutCremation__list}>
                    <li className={s.aboutCremation__list}><p className={s.aboutCremation__description}>Свідоцтво про смерть</p></li>
                    <li className={s.aboutCremation__list}><p className={s.aboutCremation__description}>Корінець довідки про причину смерті</p></li>
                    <li className={s.aboutCremation__list}><p className={s.aboutCremation__description}>Паспорт замовника</p></li>
                    <li className={s.aboutCremation__list}><p className={s.aboutCremation__description}>Отримати урну може тільки та людина, на яку оформлювалася послуги кремації</p></li>
                </ul>

                <p className={s.aboutCremation__description}>Документація дуже педантична, при помилці на вас може чекати відмова. Звернувшись за послугою кремації в <b>Профритуал</b> ви уникнете такого неприємного сюрпризу.</p>
        </div>
      </section>
  )
};

export default SectionAboutCremation;
