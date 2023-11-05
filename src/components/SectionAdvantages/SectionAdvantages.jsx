import AdvantagesDecoration from '../../images/RitualServices/double-lines-dark.png'
import s from './SectionAdvantages.module.scss'

const advantagesServicesList = [
      { id: 1, src: require('../../images/Advantages/like.png'), alt: 'Зображення 1', title: 'Професійна команда' },
      { id: 2, src: require('../../images/Advantages/24-hours.png'), alt: 'Зображення 2', title: 'Цілодобова Робота' },
      { id: 3, src: require('../../images/Advantages/dollar.png'), alt: 'Зображення 3', title: 'Доступна чесна вартість' },
      { id: 4, src: require('../../images/Advantages/shield.png'), alt: 'Зображення 4', title: 'Оперативна робота' },
];

const SectionAdvantages = () => {
    return (
      <section className={s.sectionAdvantages}>
        <div className={'container ' + s.advantages__container}>
                <h2 className={s.advantages__title}>Наші переваги</h2>
                <img className={s.advantages__decoration} loading="lazy" src={AdvantagesDecoration} alt="hero__decoration" />

            <ul className={s.advantagesServicesList}>
                {advantagesServicesList.map((image) => (        
                    <li className={s.advantagesServicesList__item} key={image.id}>
                        <div className={s.advantagesServicesList__border}><img className={s.advantagesServicesList__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} /></div>
                        <h3 className={s.advantagesServicesList__title}>{image.title}</h3>  
                    </li>
                ))}
            </ul>
                
        </div>
      </section>
  )
};

export default SectionAdvantages;
