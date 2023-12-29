import { Link } from 'react-router-dom';
import s from './SectionRitualServices.module.scss'

const SectionRitualServices = ({ array }) => {
    return (
      <section className={s.SectionRitualServices}>
        <div className={'container ' + s.ritualServices__container}>

            <ul className={s.ritualServicesList}>
            {array.map((image) => (    
                <li className={s.ritualServicesList__item} key={image.id}>
                  <Link to={image.link}>
                    <img className={s.ritualServicesList__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} />
                    <h1 className={s.ritualServicesList__title}>{image.title}</h1>
                    <p className={s.ritualServicesList__description}>{image.description}</p>
                  </Link>
                </li>
            ))}
            </ul>
        
        </div>
      </section>
  )
};

export default SectionRitualServices;