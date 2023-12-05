import s from './SectionContacts.module.scss'


const SectionContacts = () => {
    return (
      <section className={s.sectionContacts}>
        <div className={'container ' + s.contacts__container}>
                
                <button className={s.contacts__btn}>Викликати агента</button>
                <a className={s.contacts__call} href="tel:+38(044)209-02-61">+38 (044) 209-02-61</a>

                <h2 className={s.contacts__title}>Телефони:</h2>
                <ul className={s.contacts__list}>
                    <li className={s.contacts__item}><a href="tel:+38(099)6813773">+38 (067) 011-21-60</a></li>
                    <li className={s.contacts__item}><a href="tel:+38(073)6813773">+38 (093) 904-07-07</a></li>
                </ul>
          
                <div className={s.contacts__border}></div>
        </div>
      </section>
  )
};

export default SectionContacts;
