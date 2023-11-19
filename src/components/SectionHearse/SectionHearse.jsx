import HearseDecoration from '../../images/Hearse/Hearse.jpg'
import s from './SectionHearse.module.scss'



const SectionHearse = () => {
    return (
      <section className={s.sectionHearse}>
        <div className={'container ' + s.hearse__container}>
            <img className={s.hearse__decoration} loading="lazy" src={HearseDecoration} alt="hearse__decoration" />
                
            <h2 className={s.hearse__title}>Катафалк VIP та економ</h2>

            <p className={s.hearse__description}>Слово <b>«катафалк»</b> означає постамент для встановлення труни в залі для прощання або перед проведенням поховання, але в наш час цим словом називають транспорт для перевезення тіла, супроводжуючих та ритуальних аксесуарів до місця поховання та для подальшого перевезення людей до зали для проведення поминальної церемонії.</p>
       
            <p className={s.hearse__description}><b>Види ритуальних транспортів</b>, які надає компанія «Профритуал». Наше агентство ритуальних послуг має власний автопарк, в якому міститься безліч одиниць транспортних засобів, з яких ви зможете вибрати ті, які відповідають ситуації та відповідають бюджету.</p>
        
            <p className={s.hearse__description}>Ми пропонуємо <b>4 види</b> ритуального транспорту у Києві та Київській області – економ, бюджет, середній та VIP. Ви можете вибрати будь-який ритуальний транспорт із 4 видів, який буде відповідати вашим потребам у будь-який час доби.</p>  
                
        </div>
      </section>
  )
};

export default SectionHearse;
