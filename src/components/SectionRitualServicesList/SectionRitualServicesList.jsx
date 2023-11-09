import s from './SectionRitualServicesList.module.scss'


const SectionRitualServicesList = () => {
    return (
      <section className={s.sectionRitualServicesList}>
        <div className={'container ' + s.ritualServicesList__container}>
                
                <ul className={s.ritualServices__list}>
                    <li className={s.ritualServices__item}>Ритуальный агент</li>
                    <li className={s.ritualServices__item}>Організація похорон</li>
                    <li className={s.ritualServices__item}>Кремація</li>
                    <li className={s.ritualServices__item}>Автокатафалк</li>
                    <li className={s.ritualServices__item}>Вантаж 200</li>
                    <li className={s.ritualServices__item}>Послуги моргу</li>
                    <li className={s.ritualServices__item}>Поминальні обіди</li>
                    <li className={s.ritualServices__item}>Ритуальні товари</li>
                </ul>
        
        </div>
      </section>
  )
};

export default SectionRitualServicesList;
