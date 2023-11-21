import AboutMemorialDinners from '../../images/MemorialDinners/AboutMemorialDinners.jpg'
import s from './SectionAboutMemorialDinners.module.scss'

const SectionAboutMemorialDinners = () => {
    return (
      <section className={s.sectionAboutMemorialDinners}>
        <div className={'container ' + s.memorialDinners__container}>

                <h2 className={s.aboutMemorialDinners__title}>Якість їжі</h2>
            
                <p className={s.aboutMemorialDinners__description}>Поминальні зали мають власне кулінарне та пекарне виробництво. Для приготування страв використовується лише відфільтрована вода, що пройшла попереднє очищення. Меню поминальних залів складається з дотриманням релігійних та національних традицій під час проведення поминок.</p>

                <h2 className={s.aboutMemorialDinners__title}>Замовити обслуговування поминального обіду</h2>

                <p className={s.aboutMemorialDinners__description}>Якщо у Вас виникне необхідність, Ви зможете замовити виїзне обслуговування фахівцями поминальних залів за вказаною вами адресою або за місцем поховання на цвинтарі. Це може бути ваш будинок, або місце, яке ви вважали найприйнятнішим для поминального обіду.</p>

                <h2 className={s.aboutMemorialDinners__lastTitle}>Наш поминальний зал у районі Деснянський, м. Київ:</h2>

                <img className={s.aboutMemorialDinners__decoration} loading="lazy" src={AboutMemorialDinners} alt="MemorialDinnerDecoration" />

                <h2 className={s.aboutMemorialDinners__lastTitle}>Клієнти, які замовляли з нами послугу оформлення документів, так само цікавилися:</h2>
                <ul className={s.aboutMemorialDinners__list}>
                    <li><a className={s.aboutMemorialDinners__link} href="/">Виклик агента додому</a></li>
                    <li><a className={s.aboutMemorialDinners__link} href="/">Організатором похорону</a></li>
                    <li><a className={s.aboutMemorialDinners__link} href="/">Транспортом катафалк</a></li>
                    <li><a className={s.aboutMemorialDinners__link} href="/">Оренда приміщення для поминального обіду</a></li>
                </ul>
        </div>
      </section>
  )
};

export default SectionAboutMemorialDinners;
