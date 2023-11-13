import s from './SectionRitualGoodsList.module.scss'

const SectionRitualGoodsListPictures = [
    { id: 1, src: require('../../images/RitualGoodsList/wreath.jpg'), alt: 'Зображення 1', title: 'Вінки' },
    { id: 2, src: require('../../images/RitualGoodsList/coffin.jpg'), alt: 'Зображення 2', title: 'Труни' },
    { id: 3, src: require('../../images/RitualGoodsList/cross.jpg'), alt: 'Зображення 3', title: 'Хрести' },
    { id: 4, src: require('../../images/RitualGoodsList/monument.jpg'), alt: 'Зображення 4', title: 'Пам`ятники' },
    { id: 5, src: require('../../images/RitualGoodsList/candle.jpg'), alt: 'Зображення 5', title: 'Приладдя' },
];

const SectionRitualGoodsList = () => {
    return (
      <section className={s.sectionRitualGoodsList}>
        <div className={'container ' + s.ritualGoodsList__container}>
            {SectionRitualGoodsListPictures.map((image) => (      
                <ul className={s.ritualGoodsList}>
                    <li key={image.id} className={s.ritualGoodsList__item}>
                        <img className={s.ritualGoodsList__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} />
                        <h2 className={s.ritualGoodsList__title}>{image.title}</h2>
                    </li>
                </ul>
            ))}
        </div>
      </section>
  )
};

export default SectionRitualGoodsList;
