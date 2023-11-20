import Cadillac from '../../images/RitualCarParkList/Cadillac.jpg'
import MercedesSprinter from '../../images/RitualCarParkList/MercedesSprinter.jpg'
import MercedesSprinterEconom from '../../images/RitualCarParkList/MercedesSprinterEconom.jpg'
import VolksWagenT5andT6 from '../../images/RitualCarParkList/VolksWagenT5andT6.jpg'
import s from './SectionRitualCarParkList.module.scss'

const SectionRitualCarParkList = () => {
    return (
      <section className={s.sectionRitualCarParkList}>
        <div className={'container ' + s.ritualCarParkList__container}>
            
            <ul className={s.ritualCarParkList__list}>
                <li className={s.ritualCarParkList__item}>
                    <div className={s.flex}>
                        <img className={s.ritualCarParkList__decoration} loading="lazy" src={VolksWagenT5andT6} alt="ritualCarParkList__decoration" />
                    </div>
                    <p className={s.ritualCarParkList__description}><b>Економ ритуальний</b> транспорт – <b>Volkswagen T5 і T6</b>, що має місткість 7-8 осіб, ролики для зручного завантаження та вивантаження тіла.</p>
                </li>
                    
                <li className={s.ritualCarParkList__item}>
                    <div className={s.flex}>
                        <img className={s.ritualCarParkList__decoration} loading="lazy" src={MercedesSprinterEconom} alt="ritualCarParkList__decoration" />
                    </div>
                    <p className={s.ritualCarParkList__description}><b>Бюджет ритуальний транспорт – Mercedes-Benz Sprinter</b>, що має місткість (8 сидячих місць), ролики для зручного завантаження та вивантаження тіла.</p>
                </li>
                    
                <li className={s.ritualCarParkList__item}>
                    <div className={s.flex}>
                        <img className={s.ritualCarParkList__decoration} loading="lazy" src={MercedesSprinter} alt="ritualCarParkList__decoration" />
                    </div>
                    <p className={s.ritualCarParkList__description}><b>Середній ритуальний транспорт – Mercedes Benz Sprinter</b>, що має місткість 14-18 місць, кондиціонер, ролики, комфортні сидіння.</p>
                </li>
                    
                <li className={s.ritualCarParkList__item}>
                    <div className={s.flex}>
                        <img className={s.ritualCarParkList__decoration} loading="lazy" src={Cadillac} alt="ritualCarParkList__decoration" />
                    </div>
                    <p className={s.ritualCarParkList__description}><b>VIP ритуальний транспорт – Cadillac катафалк лімузин</b>, що має місткість 2-3 особи, кондиціонер, ролики, комфортні сидіння.</p>
                </li>
            </ul>
                
                <h2 className={s.ritualCarParkList__title}>Клієнти, які замовляли послугу “Катафалк”, також цікавилися:</h2>
                <ul className={s.ritualCarParkList__listMenu}>
                    <li><a className={s.ritualCarParkList__link} href="/">Поминальним обідом у Києві та області</a></li>
                    <li><a className={s.ritualCarParkList__link} href="/">Ритуальними хрестами</a></li>
                    <li><a className={s.ritualCarParkList__link} href="/">Жалобними вінками</a></li>
                    <li><a className={s.ritualCarParkList__link} href="/">Елітними та економ трунами</a></li>
                    <li><a className={s.ritualCarParkList__link} href="/">Медперсоналом для похорону</a></li>
                </ul>
        </div>
      </section>
  )
};

export default SectionRitualCarParkList;
