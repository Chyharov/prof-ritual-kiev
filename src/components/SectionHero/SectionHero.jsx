import s from './SectionHero.module.scss'

const SectionHero = () => {
    return (
      <section className={s.sectionHero}>
        <div className={'container ' + s.hero__container}>
            <h1 className={s.hero__title}>Проф Ритуал</h1>
                <p className={s.hero_description}>
                    Похоронне бюро «Проф Ритуал» — турбота та підтримка у складні моменти" Ми допомагаємо організувати похорон або кремацію з гідністю та повагою, забезпечуючи повний комплекс ритуальних послуг у Києві та області
                </p>
                <a className={s.hero__call} href="tel:+380675233540">+38 (067) 523-35-40</a>
        </div>
      </section>
      

  )
};

export default SectionHero;
