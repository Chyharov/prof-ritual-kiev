import StoneOfMemoryDecoration from '../../images/StoneOfMemoryPage/StoneOfMemoryPage.jpg'
import s from './SectionStoneOfMemory.module.scss'

const SectionStoneOfMemory = () => {
    return (
      <section className={s.sectionStoneOfMemory}>
        <div className={'container ' + s.stoneOfMemory__container}>
                
          <img className={s.stoneOfMemory__decoration} loading="lazy" src={StoneOfMemoryDecoration} alt="stoneOfMemory__decoration" />

                <h2 style={{ marginBottom: '10px' }} className='title'>Камінь Спогаду</h2>
                
                <p style={{marginBottom: '10px'}} className='description'><b>Камінь Спогаду</b> – це унікальний пам’ятний виріб, створений із частинки праху близької людини чи улюбленої тварини. Він зберігає тепло спогадів та стає особливим символом пам’яті.</p>

                <h2 style={{ marginBottom: '10px' }} className='title'>Як відбувається процес виготовлення?</h2>

                <ul>
                    <li><p style={{marginBottom: '10px'}} className='description'>1. <b>Збір матеріалу</b> – невелику кількість праху (5–10 г) додають до спеціально підготовленої маси.</p></li>
                    <li><p style={{marginBottom: '10px'}} className='description'>2. <b>Формування каменю</b> – обирається форма, колір та розмір. Камінь може бути гладким, прозорим чи з декоративними вкрапленнями.</p></li>
                    <li><p style={{marginBottom: '10px'}} className='description'>3. <b>Обробка та полірування</b> – готовий виріб проходить професійну обробку, щоб зберегти міцність та естетику.</p></li>
                    <li><p style={{marginBottom: '10px'}} className='description'>4. <b>Готовий результат</b> – камінь можна носити з собою, зберігати вдома чи використовувати як частину меморіальної композиції.</p></li>
                </ul>

                <h2 style={{ marginBottom: '10px' }} className='title'>Термін виготовлення</h2>

                <p style={{marginBottom: '10px'}} className='description'>Залежно від обраної форми та складності, виготовлення займає від <b>7 до 14 днів</b>.</p>

                <h2 style={{ marginBottom: '10px' }} className='title'>Переваги Каменю Спогаду</h2>

                <ul className='list' style={{marginBottom: '10px'}}>
                    <li className='listItem'>Індивідуальний підхід – кожен виріб унікальний.</li>
                    <li className='listItem'>Можливість обрати колір і дизайн.</li>
                    <li className='listItem'>Тривале збереження пам’яті у символічному вигляді.</li>
                </ul>
        </div>
      </section>
  )
};

export default SectionStoneOfMemory;
