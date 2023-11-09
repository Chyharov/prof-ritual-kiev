import s from './SectionContactsList.module.scss';


const SectionContactsList = () => {

  return (
    <section className={s.sectionContactsList}>
      <div className={'container ' + s.sectionContactsList__container}>
        <ul className={s.sectionContactsList_list}>
          <li className={s.sectionContactsList_item}><a href="tel:+38(044)2092472">+38 (044) 209-24-72</a></li>
          <li className={s.sectionContactsList_item}><a href="tel:+38(099)6813773">+38 (099) 681-37-73</a></li>
          <li className={s.sectionContactsList_item}><a href="tel:+38(073)6813773">+38 (073) 681-37-73</a></li>
          <li className={s.sectionContactsList_item}><a href="tel:+38(098)5813773">+38 (098) 581-37-73 </a></li>
        </ul>
      </div>
    </section>
  )
};

export default SectionContactsList;
