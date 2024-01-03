import { Link } from 'react-router-dom';
import CargoDecoration from '../../images/Cargo/Cargo.jpg'
import s from './SectionCargo.module.scss'

const SectionCargo = () => {
    return (
      <section className={s.sectionCargo}>
        <div className={'container ' + s.cargo__container}>
            <img className={s.ritualCarParkList__decoration} loading="lazy" src={CargoDecoration} alt="cargo__decoration" />
            
            <p style={{ marginBottom: '10px' }} className='description'>Іноді трапляється так, що людина вмирає далеко від дому. Звичайно, родичі хочуть проводити покійного в останній шлях на його батьківщині. Однак транспортування тіла – це складна процедура, з якою не впоратися поодинці. У важку хвилину ми підставимо вам своє плече. Агенти ритуального бюро “Профритуал” візьмуть на себе повну організацію прощального ритуалу. Пропоновані ритуальні послуги: перевезення Вантаж 200 від місця смерті <b>до місця поховання</b>.</p>

            <p style={{ marginBottom: '10px' }} className='description'>Ми розуміємо, що в години скорботи вам не хотілося б стикатися зі стомливим процесом щодо оформлення документів та відправлення вантажу 200. Тому Профритуал у найкоротші терміни зберуть усі необхідні документи, серед яких:</p>    
            
            <ul className='list'>
                <li><p style={{ marginBottom: '10px' }} className='description'>Свідоцтво про смерть;</p></li>
                <li><p style={{ marginBottom: '10px' }} className='description'>Довідка про неукладання;</p></li>
                <li><p style={{ marginBottom: '10px' }} className='description'>Довідка СЕС.</p></li>
            </ul>

            <p style={{ marginBottom: '10px' }} className='description'>Також ми підготуємо для транспортування спеціальний контейнер для перевезення Вантаж 200 із зазначеного місця до пункту призначення. Якщо виникла необхідність відправити покійного за межі України, то <b>ритуальний агент оформить перевезення вантажу 200 на митниці.</b></p>
        
            <ul className='list'>
                <li><p style={{ marginBottom: '10px' }} className='description'>Літаком;</p></li>
                <li><p style={{ marginBottom: '10px' }} className='description'>Поїздом;</p></li>
                <li><p style={{ marginBottom: '10px' }} className='description'>Автомобілем.</p></li>
            </ul>    
            
          <h2 style={{ marginBottom: '10px' }} className='title'>Перевезення померлих (Вантаж 200) літаком</h2>
            
          <p style={{ marginBottom: '10px' }} className='description'>Потрібно забезпечити здачу цинкової труни у вантажний термінал не пізніше ніж за 4-6 годин до відправлення. Слід зазначити, що чартерні рейси що неспроможні здійснювати перевезення тіла.</p>
                
          <blockquote className='blockquote'>
            Якщо транспортування можливе виключно за допомогою залізниці, необхідно з’ясувати, чи є в пасажирському складі вагон для багажу. Тільки в цьому випадку перевезти вантаж 200 буде можливо. Серед інших способів транспортування автоперевезення має переваги: ​​тіло доставляють безпосередньо до пункту призначення.
          </blockquote>
          
          <p style={{ marginBottom: '10px' }} className='description'>Звертаючись до похоронного бюро “Профритуал”, ви зможете <b>уберегти свої нерви від зайвого стресу</b>. Ми доставимо тіло покійного та проведемо всі необхідні процедури з підготовки прощального ритуалу. Вам залишиться лише проводити його в інший світ.</p>

          <h2 style={{ marginBottom: '10px' }} className='title'>Як замовити Вантаж 200?</h2>

          <p style={{ marginBottom: '10px' }} className='description'>Ми радимо вам зателефонувати нам (у будь-який час доби) та замовити агента додому, ця послуга безкоштовна. На місці наш агент зможе вирішити логічне питання та надати вам конкретні терміни та план дій. Якщо вас буде влаштовувати план дій, то замовити та оформити послугу можна буде з нашим агентом на місці.</p>
          
          <h2 style={{ marginBottom: '10px' }} className='title'>Що відбувається після замовлення.</h2>

          <p style={{ marginBottom: '10px' }} className='description'>Наш агент контролює кожен етап та бере відповідальність перевезення на себе. За <b>8 років</b> наше похоронне бюро Профритуал завжди вкладалося у терміни під час перевезення Вантаж 200. При проходженні кожного етапу ми сповіщаємо вас. У разі потреби наш агент супроводжує Вантаж 200 із зазначеного місця у пункт призначення.</p>

          <h2 style={{ marginBottom: '10px' }} className='title'>Клієнти, які замовляли послугу “Вантаж 200”, також цікавилися:</h2>


          <ul className='list'>
            <li><Link className='links' to="/ritualagent">Викликом агента додому</Link></li>
            <li><Link className='links' to="/memorialdinners">Поминальним обідом</Link></li>
            <li><Link className='links' to="/ritualhall">Орендою ритуального залу</Link></li>
            <li><Link className='links' to="/сoffins">Трунами</Link></li>
          </ul>

        </div>
      </section>
  )
};

export default SectionCargo;
