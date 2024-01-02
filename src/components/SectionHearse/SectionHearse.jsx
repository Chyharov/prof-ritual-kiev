import { Link } from 'react-router-dom';
import HearseDecoration from '../../images/Hearse/Hearse.jpg'
import s from './SectionHearse.module.scss'

import Cadillac from '../../images/RitualCarParkList/Cadillac.jpg'
import MercedesSprinter from '../../images/RitualCarParkList/MercedesSprinter.jpg'
import MercedesSprinterEconom from '../../images/RitualCarParkList/MercedesSprinterEconom.jpg'
import VolksWagenT5andT6 from '../../images/RitualCarParkList/VolksWagenT5andT6.jpg'


const SectionHearse = () => {
    return (
      <section className={s.sectionHearse}>
        <div className={'container ' + s.hearse__container}>
            <img className={s.hearse__decoration} loading="lazy" src={HearseDecoration} alt="hearse__decoration" />
                
            <h2 style={{marginBottom: '10px'}} className='title'>Катафалк VIP та економ</h2>

            <p style={{marginBottom: '10px'}} className='description'>Слово <b>«катафалк»</b> означає постамент для встановлення труни в залі для прощання або перед проведенням поховання, але в наш час цим словом називають транспорт для перевезення тіла, супроводжуючих та ритуальних аксесуарів до місця поховання та для подальшого перевезення людей до зали для проведення поминальної церемонії.</p>
       
            <p style={{marginBottom: '10px'}} className='description'><b>Види ритуальних транспортів</b>, які надає компанія «Профритуал». Наше агентство ритуальних послуг має власний автопарк, в якому міститься безліч одиниць транспортних засобів, з яких ви зможете вибрати ті, які відповідають ситуації та відповідають бюджету.</p>
        
            <p style={{marginBottom: '10px'}} className='description'>Ми пропонуємо <b>4 види</b> ритуального транспорту у Києві та Київській області – економ, бюджет, середній та VIP. Ви можете вибрати будь-який ритуальний транспорт із 4 видів, який буде відповідати вашим потребам у будь-який час доби.</p>  

          <ul style={{marginTop: '10px'}} className={s.ritualCarParkList__list}>
                <li className={s.ritualCarParkList__item}>
                    <div className={s.flex}>
                        <img className={s.ritualCarParkList__decoration} loading="lazy" src={VolksWagenT5andT6} alt="ritualCarParkList__decoration" />
                    </div>
                    <p style={{marginBottom: '10px'}} className='description'><b>Економ ритуальний</b> транспорт – <b>Volkswagen T5 і T6</b>, що має місткість 7-8 осіб, ролики для зручного завантаження та вивантаження тіла.</p>
                </li>
                    
                <li className={s.ritualCarParkList__item}>
                    <div className={s.flex}>
                        <img className={s.ritualCarParkList__decoration} loading="lazy" src={MercedesSprinterEconom} alt="ritualCarParkList__decoration" />
                    </div>
                    <p style={{marginBottom: '10px'}} className='description'><b>Бюджет ритуальний транспорт – Mercedes-Benz Sprinter</b>, що має місткість (8 сидячих місць), ролики для зручного завантаження та вивантаження тіла.</p>
                </li>
                    
                <li className={s.ritualCarParkList__item}>
                    <div className={s.flex}>
                        <img className={s.ritualCarParkList__decoration} loading="lazy" src={MercedesSprinter} alt="ritualCarParkList__decoration" />
                    </div>
                    <p style={{marginBottom: '10px'}} className='description'><b>Середній ритуальний транспорт – Mercedes Benz Sprinter</b>, що має місткість 14-18 місць, кондиціонер, ролики, комфортні сидіння.</p>
                </li>
                    
                <li className={s.ritualCarParkList__item}>
                    <div className={s.flex}>
                        <img className={s.ritualCarParkList__decoration} loading="lazy" src={Cadillac} alt="ritualCarParkList__decoration" />
                    </div>
                    <p style={{marginBottom: '10px'}} className='description'><b>VIP ритуальний транспорт – Cadillac катафалк лімузин</b>, що має місткість 2-3 особи, кондиціонер, ролики, комфортні сидіння.</p>
                </li>
            </ul>
                
                <h2 style={{marginBottom: '10px'}} className='title'>Клієнти, які замовляли послугу “Катафалк”, також цікавилися:</h2>
                <ul className={s.ritualCarParkList__listMenu}>
                    <li><Link className='links' to="/memorialdinners">Поминальним обідом у Києві та області</Link></li>
                    <li><Link className='links' to="/crosses">Ритуальними хрестами</Link></li>
                    <li><Link className='links' to="/ritualwreath">Жалобними вінками</Link></li>
                    <li><Link className='links' to="/сoffins">Елітними та економ трунами</Link></li>
                    <li><Link className='links' to="/funeralescortbymedicalpersonnal">Медперсоналом для похорону</Link></li>
                </ul>
        </div>
      </section>
  )
};

export default SectionHearse;
