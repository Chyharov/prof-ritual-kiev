import RentRitualHall from '../../images/RentRitualHall/RentRitualHall.jpg'
import RentRitualHallPhoto from '../../images/RentRitualHall/RentRitualHallPhoto.jpg'
import RentRitualHallPhoto2 from '../../images/RentRitualHall/RentRitualHallPhoto2.jpg'
import RentRitualHallPhoto3 from '../../images/RentRitualHall/RentRitualHallPhoto3.jpg'
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import s from './SectionAboutRentRitualHall.module.scss'

const SectionAboutRentRitualHall = () => {
    return (
      <section className={s.sectionAboutRentRitualHall}>
        <div className={'container ' + s.aboutRentRitualHall__container}>
                
            <img className={s.rentRitualHall__decoration} loading="lazy" src={RentRitualHall} alt="rentRitualHall__decoration" />
                
            <p className={s.aboutRentRitualHall__description}><b>Ритуальний зал</b> – це цілий комплекс, наші ритуальні зали включають сам зал прощання, розрахований на 50-100 осіб, кімнату відпочинку, кухню-їдальню, туалет. Всі наші ритуальні зали обладнані системою кондиціювання та припливно-витяжною вентиляцією. Під час холодів вони добре обігріваються.</p>
                
            <h2 className={s.aboutRentRitualHall__title}>Види ритуальних залів</h2>
                
            <p className={s.aboutRentRitualHall__description}>Ми надаємо 3 види ритуальних залів для клієнтів: <b>малий, середній та великий</b>.</p>
                
            <ul style={{marginBottom: '20px'}} className={s.aboutRentRitualHall__list}>
                <li><p className={s.aboutRentRitualHall__description}><span className={s.aboutRentRitualHall__span}><b>Малий ритуальний зал. </b></span>Або бюджетний розрахований на 20-30 осіб. Має кухню, туалет, кондиціонер та опалення.</p></li>
                <li><p className={s.aboutRentRitualHall__description}><span className={s.aboutRentRitualHall__span}><b>Середня ритуальна зала. </b></span>Розрахований на 40-60 осіб. Має кухню, туалет, кімнату відпочинку, кондиціонер та опалення.</p></li>
                <li><p className={s.aboutRentRitualHall__description}><span className={s.aboutRentRitualHall__span}><b>Великий ритуальний зал. </b></span>Розрахований на 100 осіб. Має кухню, туалет, кімнату відпочинку, кондиціонер та опалення. Також у цьому залі достатньо місця для музичного супроводу.</p></li>    
            </ul>
               
            <SectionNeedHelp />
            
            <ul style={{marginTop: '20px'}} className={s.aboutRentRitualHall__list}>
                <li><p className={s.aboutRentRitualHall__description}>Після кожного відспівування ритуальний зал проходить ретельну дезобробку.</p></li>
                <li><p className={s.aboutRentRitualHall__description}>Усі ритуальні зали мають євроремонт.</p></li>
                <li><p className={s.aboutRentRitualHall__description}>У всіх ритуальних залах тепло під час холодів та прохолодно під час спеки.</p></li>  
            </ul>
                
            <h2 className={s.aboutRentRitualHall__title}>Оренда ритуальної зали</h2>

            <p className={s.aboutRentRitualHall__description}>Оренда ритуального залу розрахована щогодини. Профритуал співпрацює з багатьма орендарями і тому може надати ритуальні зали в багатьох районах Києва за доступною ціною.</p>

            <h3 className={s.aboutRentRitualHall__titleSmal}>Клієнти, які замовляли з нами оренду ритуального залу, так само цікавилися:</h3>
                
            <ul style={{marginBottom: '10px'}} className={s.aboutRentRitualHall__list}>
                <li><a className={s.aboutRentRitualHall__link} href='/'>Організацією похорон</a></li>
                <li><a className={s.aboutRentRitualHall__link} href='/'>Поминальним обідом у Києві</a></li>
                <li><a className={s.aboutRentRitualHall__link} href='/'>Ритуальним транспортом</a></li>
                <li><a className={s.aboutRentRitualHall__link} href='/'>Хрестами</a></li>
                <li><a className={s.aboutRentRitualHall__link} href='/'>Ритуальними трунами</a></li>
                <li><a className={s.aboutRentRitualHall__link} href='/'>Жалобними вінками</a></li>  
            </ul>
                
            <h3 className={s.aboutRentRitualHall__titleSmal}>Фото деяких ритуальних залів від Профритуалу</h3>
       
            <img className={s.rentRitualHall__phohoto} loading="lazy" src={RentRitualHallPhoto} alt="rentRitualHall__phohoto" />
            <img className={s.rentRitualHall__phohoto} loading="lazy" src={RentRitualHallPhoto2} alt="rentRitualHall__phohoto" />
            <img className={s.rentRitualHall__phohoto} loading="lazy" src={RentRitualHallPhoto3} alt="rentRitualHall__phohoto" />

        </div>
      </section>
  )
};

export default SectionAboutRentRitualHall;
