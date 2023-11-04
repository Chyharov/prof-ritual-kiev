import RitualServicesDecoration from '../../images/RitualServices/double-lines-dark.png'
import s from './SectionRitualServices.module.scss'

const ritualServicesList = [
      { id: 1, src: require('../../images/RitualServices/ritualAgent.jpg'), alt: 'Зображення 1', title: 'Ритуальний агент' },
      { id: 2, src: require('../../images/RitualServices/organizationFunerals.jpg'), alt: 'Зображення 2', title: 'Організація похорон' },
      { id: 3, src: require('../../images/RitualServices/cremation.jpg'), alt: 'Зображення 3', title: 'Кремація' },
      { id: 4, src: require('../../images/RitualServices/hearse.jpg'), alt: 'Зображення 4', title: 'Автокатафалк' },
      { id: 5, src: require('../../images/RitualServices/ritualGoods.jpg'), alt: 'Зображення 5', title: 'Ритуальні товари' },
      { id: 6, src: require('../../images/RitualServices/cargo200.jpg'), alt: 'Зображення 6', title: 'Вантаж 200' },
      { id: 7, src: require('../../images/RitualServices/mortuaryServices.jpg'), alt: 'Зображення 7', title: 'Послуги моргу' },
      { id: 8, src: require('../../images/RitualServices/memorialDinners.jpg'), alt: 'Зображення 8', title: 'Поминальні обіди' },
];

const SectionRitualServices = () => {
    return (
      <section className={s.SectionRitualServices}>
        <div className={'container ' + s.ritualServices__container}>

            <h2 className={s.ritualServices__title}>Похоронне бюро Профритуал</h2>
            <img className={s.ritualServices__decoration} loading="lazy" src={RitualServicesDecoration} alt="hero__decoration" />
                
            <ul className={s.ritualServicesList}>
            {ritualServicesList.map((image) => (        
                <li className={s.ritualServicesList__item} key={image.id}>
                    <img className={s.ritualServicesList__img} id={image.id} src={image.src} alt={image.alt} />
                    <h3 className={s.ritualServicesList__title}>{image.title}</h3>  
                </li>
            ))}
            </ul>
        </div>
      </section>
      

  )
};

export default SectionRitualServices;