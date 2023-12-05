import s from './SectionContactsList.module.scss';

const SectionContactsList = () => {

  return (
    <section className={s.sectionContactsList}>
      <div className={'container ' + s.sectionContactsList__container}>
        <ul className={s.sectionContactsList_list}>
          <li className={s.sectionContactsList_item}><a href="tel:+380442090261">+38 (044) 209-02-61</a></li>
          <li className={s.sectionContactsList_item}><a href="tel:+380670112160">+38 (067) 011-21-60</a></li>
          <li className={s.sectionContactsList_item}><a href="tel:+380939040707">+38 (093) 904-07-07</a></li>
        </ul>
      </div>
    </section>
  )
};

export default SectionContactsList;
