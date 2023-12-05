import HeroDecoration from '../../images/Hero/HeroDecoration.png'
import s from './SectionHero.module.scss'

const SectionHero = () => {
    return (
      <section className={s.sectionHero}>
        <div className={'container ' + s.hero__container}>
            <h1 className={s.hero__title}>Проф Ритуал</h1>
                <img className={s.hero__decoration} loading="lazy" src={HeroDecoration} alt="hero__decoration" />
                <p className={s.hero_description}>
                    Оформлення похорону та підготовка документів померлого це тривалий та скрупульозний процес. “Профритуал” займається підготовкою похорону понад 10 років, і ми знаємо як у найкоротші терміни організувати всю процесію на найвищому рівні.
                </p>
                <a className={s.hero__call} href="tel:+380442090261">+38 (044) 209-02-61</a>
        </div>
      </section>
      

  )
};

export default SectionHero;
