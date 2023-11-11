import s from './SectionRitualServices.module.scss'

const SectionRitualServices = ({ array }) => {
    return (
      <section className={s.SectionRitualServices}>
        <div className={'container ' + s.ritualServices__container}>

            <ul className={s.ritualServicesList}>
            {array.map((image) => (        
                <li className={s.ritualServicesList__item} key={image.id}>
                    <img className={s.ritualServicesList__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} />
                    <h3 className={s.ritualServicesList__title}>{image.title}</h3>  
                </li>
            ))}
            </ul>
        
        </div>
      </section>
  )
};

export default SectionRitualServices;