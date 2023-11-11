import ProfRitualDecoration from '../../images/RitualServices/double-lines-dark.png'
import s from './SectionProfRitualTitle.module.scss'

const SectionProfRitualTitle = () => {
    return (
      <section className={s.sectionProfRitualTitle}>
        <div className={'container ' + s.ProfRitual__container}>

            <h2 className={s.profRitual__title}>Похоронне бюро Профритуал</h2>
            <img className={s.profRitual__decoration} loading="lazy" src={ProfRitualDecoration} alt="hero__decoration" />
                
        </div>
      </section>
      

  )
};

export default SectionProfRitualTitle;