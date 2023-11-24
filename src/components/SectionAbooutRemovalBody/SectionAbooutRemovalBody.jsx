import { Link } from 'react-router-dom';
import RemovalBodyDecoration from '../../images/RemovalBody/RemovalBodyDecoration.jpg'
import funeralTeam__photo from '../../images/RemovalBody/funeralTeam__photo.jpeg'
import funeralTeam__photo2 from '../../images/RemovalBody/funeralTeam__photo2.jpeg'
import funeralTeam__photo3 from '../../images/RemovalBody/funeralTeam__photo3.jpeg'
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import s from './SectionAbooutRemovalBody.module.scss'

const SectionAbooutRemovalBody = () => {
    return (
      <section className={s.sectionAbooutRemovalBody}>
        <div className={'container ' + s.abooutRemovalBody__container}>
                
            <img className={s.abooutRemovalBody__decoration} loading="lazy" src={RemovalBodyDecoration} alt="abooutRemovalBody__decoration" />

            <p className={s.abooutRemovalBody__description}>Наше ритуальне бюро знає, як складно в таку хвилину думати про <b>дотримання всіх правил</b>, пов’язаних з винесенням тіла померлого, саме тому ми пропонуємо вам скористатися послугою – бригада для похорону. Наші співробітники добре знають усі правила винесення тіла – як за православними правилами, так і відповідно до звичаїв та правил інших релігій.</p>                

            <h2 className={s.abooutRemovalBody__title}>Бригада ритуальних вантажників</h2>
                
            <blockquote className={s.abooutRemovalBody__blockquote}> Вона працюватиме від початку самого процесу похорону і до його завершення. Склад бригади залежатиме від розміру труни та складності роботи, є мінімальний, стандартний та елітний склад <b>(4-6-8 осіб)</b>.</blockquote>
            
            <p style={{marginBottom: '20px'}} className={s.abooutRemovalBody__description}>Якщо Вам потрібно виконати перевезення тіла померлого на тривалі відстані, ритуальні вантажники проводять разом з вами тіло до вокзалу або аеропорту. Крім того, за вашим бажанням вони можуть брати участь у <Link className={s.abooutRemovalBody__link} to="/cargo">далеких перевезеннях померлих</Link></p>

                <SectionNeedHelp />
                
            <h2 style={{ marginTop: '20px' }} className={s.abooutRemovalBody__title}>Наша Бригада для похорону</h2>    

            <p className={s.abooutRemovalBody__description}>Багато людей вважають за краще не замовляти професійну бригаду для винесення тіла померлого. Вони довіряють цей ритуал похорону членам сім’ї чи близьким знайомим. Але на жаль, люди журяться втратою друга чи члена сім’ї по-різному. Але ваші близькі та друзі теж перебувають під стресом, їхній друг помер, його більше немає. Щоб пом’якшити горе перед похороном багато хто вживає алкоголь. Не знаючи коректної процедури винесення тіла померлого і <b>під впливом алкоголю</b> часто трапляються нещасні випадки під час похорону, які завдають незворотного стресу близьким і рідним померлого. Наша бригада це міцні та сильні чоловіки, які відповідально ставляться до своєї роботи.</p>

            <h4 className={s.abooutRemovalBody__titleSmal}>Клієнти, які замовляли ритуальну послугу “бригада для похорону” так само цікавилися:</h4>
                
            <ul style={{ marginBottom: '20px' }} className={s.abooutRemovalBody__list}>
                <li><a className={s.abooutRemovalBody__link} href="/">Орендою ритуального залу</a></li>
                <li><a className={s.abooutRemovalBody__link} href="/">Оформлення документів</a></li>
                <li><a className={s.abooutRemovalBody__link} href="/">Ритуальний транспорт</a></li>
                <li><a className={s.abooutRemovalBody__link} href="/">Поминальний обід у Києві</a></li>  
            </ul>
                
            <h4 className={s.abooutRemovalBody__titleSmal}>Фото нашої бригади для похорону</h4>
                
            <ul className={s.funeralTeam__photoList}>
                <li className={s.funeralTeam__photoItem}><img className={s.funeralTeam__photo} loading="lazy" src={funeralTeam__photo} alt="funeralTeam__photo" /></li>
                <li className={s.funeralTeam__photoItem}><img className={s.funeralTeam__photo} loading="lazy" src={funeralTeam__photo2} alt="funeralTeam__photo2" /></li>
                <li className={s.funeralTeam__photoItem}><img className={s.funeralTeam__photo} loading="lazy" src={funeralTeam__photo3} alt="funeralTeam__photo3" /></li>
            </ul>
                
        </div>
      </section>
  )
};

export default SectionAbooutRemovalBody;
