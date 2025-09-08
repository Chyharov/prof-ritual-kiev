import { Link } from 'react-router-dom';
import s from './SectionRitualServicesList.module.scss'


const SectionRitualServicesList = () => {
    return (
      <section className={s.sectionRitualServicesList}>
        <div className={'container ' + s.ritualServicesList__container}>
                
                <ul className={s.ritualServices__list}>
                    <Link className={s.ritualServices__item} to="/ritualagent">Виклик ритуального агента</Link>
                    <Link className={s.ritualServices__item} to="/funeralorganization">Організація похорону</Link>
                    <Link className={s.ritualServices__item} to="/cremation">Кремація</Link>
                    <Link className={s.ritualServices__item} to="/hearse">Автокатафалк</Link>
                    <Link className={s.ritualServices__item} to="/cargo">Вантаж 200</Link>
                    <Link className={s.ritualServices__item} to="/mortuaryservices">Послуги холодильної камери</Link>
                    <Link className={s.ritualServices__item} to="/memorialdinners">Поминальні обіди</Link>
                    <Link className={s.ritualServices__item} to="/ritualgoods">Ритуальні товари</Link>
                </ul>
        
        </div>
      </section>
  )
};

export default SectionRitualServicesList;
