import s from './SectionContacts.module.scss'


const SectionContacts = () => {
    return (
      <section className={s.sectionContacts}>
        <div className={'container ' + s.contacts__container}>
                
                <button className={s.contacts__btn}>Викликати агента</button>
                <a className={s.contacts__call} href="tel:+38(044)209-24-72">+38 (044) 209-24-72</a>

                <h2 className={s.contacts__title}>Телефони:</h2>
                <ul className={s.contacts__list}>
                    <li className={s.contacts__item}><a href="tel:+38(099)6813773">+38 (099) 681-37-73</a></li>
                    <li className={s.contacts__item}><a href="tel:+38(073)6813773">+38 (073) 681-37-73</a></li>
                    <li className={s.contacts__item}><a href="tel:+38(098)5813773">+38 (098) 581-37-73 </a></li>
                </ul>
        </div>
      </section>
  )
};

export default SectionContacts;
