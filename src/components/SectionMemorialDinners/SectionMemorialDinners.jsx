import MemorialDinnerDecoration from '../../images/MemorialDinners/MemorialDinners.jpg'
import s from './SectionMemorialDinners.module.scss'

const SectionMemorialDinners = () => {
    return (
      <section className={s.sectionMemorialDinners}>
        <div className={'container ' + s.memorialDinners__container}>

            <img className={s.memorialDinners__decoration} loading="lazy" src={MemorialDinnerDecoration} alt="MemorialDinnerDecoration" />

            <p className={s.memorialDinners__description}>Невід’ємною частиною та завершальним етапом церемонії поховання є <b>поминки та поминальний обід</b>. Прагнучи забезпечити цілісність і завершеність траурного обряду, похоронне бюро «Профритуал» надає можливість організації поминального обіду у спеціально обладнаних та використовуваних строго відповідно до їх призначення поминальних залах.</p>
                
            <h2 className={s.memorialDinners__title}>Оренда приміщення та залу для поминального обіду.</h2>

            <p className={s.memorialDinners__description}>Кожен із приміщень оформлений <b>у жалобному стилі</b>, оснащений відеотехнікою, що дозволяє організувати трансляцію фільмів та фотографій про покійного, аудіо-супровід. У залах можливе проведення поминок у день похорону, організація поминання <b>на 9-ий та 40-й день</b> від дня смерті покійного, річниці та днів поминання.</p>

        </div>
      </section>
  )
};

export default SectionMemorialDinners;
