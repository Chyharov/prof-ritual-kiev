import CargoDecoration from '../../images/Cargo/Cargo.jpg'
import s from './SectionCargo.module.scss'

const SectionCargo = () => {
    return (
      <section className={s.sectionCargo}>
        <div className={'container ' + s.cargo__container}>
            <img className={s.ritualCarParkList__decoration} loading="lazy" src={CargoDecoration} alt="cargo__decoration" />
            
            <p className={s.ritualCarParkList__description}>Іноді трапляється так, що людина вмирає далеко від дому. Звичайно, родичі хочуть проводити покійного в останній шлях на його батьківщині. Однак транспортування тіла – це складна процедура, з якою не впоратися поодинці. У важку хвилину ми підставимо вам своє плече. Агенти ритуального бюро “Профритуал” візьмуть на себе повну організацію прощального ритуалу. Пропоновані ритуальні послуги: перевезення Вантаж 200 від місця смерті <b>до місця поховання</b>.</p>

            <p className={s.ritualCarParkList__description}>Ми розуміємо, що в години скорботи вам не хотілося б стикатися зі стомливим процесом щодо оформлення документів та відправлення вантажу 200. Тому Профритуал у найкоротші терміни зберуть усі необхідні документи, серед яких:</p>    
            
            <ul className={s.ritualCarParkList__list}>
                <li><p className={s.ritualCarParkList__description}>Свідоцтво про смерть;</p></li>
                <li><p className={s.ritualCarParkList__description}>Довідка про неукладання;</p></li>
                <li><p className={s.ritualCarParkList__description}>Довідка СЕС.</p></li>
            </ul>

            <p className={s.ritualCarParkList__description}>Також ми підготуємо для транспортування спеціальний контейнер для перевезення Вантаж 200 із зазначеного місця до пункту призначення. Якщо виникла необхідність відправити покійного за межі України, то <b>ритуальний агент оформить перевезення вантажу 200 на митниці.</b></p>
        
            <ul className={s.ritualCarParkList__list}>
                <li><p className={s.ritualCarParkList__description}>Літаком;</p></li>
                <li><p className={s.ritualCarParkList__description}>Поїздом;</p></li>
                <li><p className={s.ritualCarParkList__description}>Автомобілем.</p></li>
            </ul>    
            
        </div>
      </section>
  )
};

export default SectionCargo;
