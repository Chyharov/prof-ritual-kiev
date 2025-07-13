import s from './SectionContactsList.module.scss';

const SectionContactsList = () => {

  return (
    <section className={s.sectionContactsList}>
      <div className={'container ' + s.sectionContactsList__container}>
        <ul className={s.sectionContactsList_list}>
          <li className={s.sectionContactsList_item}><a href="tel:+380675233540" aria-label="Call agent">+38 (067) 523-35-40</a></li>
          <li className={s.sectionContactsList_item}><a href="tel:+380996813773" aria-label="Call agent">+38 (099) 681-37-73</a></li>
        </ul>
      </div>
    </section>
  )
};

export default SectionContactsList;
