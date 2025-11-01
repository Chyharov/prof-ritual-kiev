import { Link } from 'react-router-dom';
import s from './SectionRitualGoodsList.module.scss'

const SectionRitualGoodsListPictures = [
    { id: 1, src: require('../../watermarked/RitualGoodsList/wreath.jpg'), alt: 'Зображення 1', title: 'Вінки', link: "/ritualwreath", description: "Великий вибір вінків із штучних квітів." },
    { id: 2, src: require('../../watermarked/RitualGoodsList/coffin.jpg'), alt: 'Зображення 2', title: 'Труни', link: "/сoffins", description: "Якісні економ та VIP варіанти трун." },
    { id: 3, src: require('../../watermarked/RitualGoodsList/cross.jpg'), alt: 'Зображення 3', title: 'Хрести', link: "/crosses", description: "Широкий вібор хрестів з різних матеріалів" },
    { id: 4, src: require('../../watermarked/RitualGoodsList/monument.jpg'), alt: 'Зображення 4', title: 'Пам`ятники', link: "/ritualmonuments", description: "Ви можете замовити будь-яку надгробну пам’ятку." },
    { id: 5, src: require('../../watermarked/RitualGoodsList/candle.jpg'), alt: 'Зображення 5', title: 'Приладдя', link: "/ritualaccessories", description: "Похоронні набори, саван православний та ін." },
];

const SectionRitualGoodsList = () => {
    return (
      <section className={s.sectionRitualGoodsList}>
        <div className={'container ' + s.ritualGoodsList__container}>
            <ul className={s.ritualGoodsList}>
                {SectionRitualGoodsListPictures.map((image) => (   
                    <Link to={image.link}>
                        <li key={image.id} className={s.ritualGoodsList__item}>
                            <img className={s.ritualGoodsList__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} />
                            <h2 className={s.ritualGoodsList__title}>{image.title}</h2>
                            <p className={s.ritualGoodsList__description}>{image.description}</p>
                        </li>
                    </Link>
            ))}
            </ul>
        </div>
      </section>
  )
};

export default SectionRitualGoodsList;
