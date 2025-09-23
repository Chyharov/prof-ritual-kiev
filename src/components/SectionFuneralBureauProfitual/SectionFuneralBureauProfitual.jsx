import AdvantagesDecoration from '../../images/RitualServices/double-lines-dark.png'
import s from './SectionFuneralBureauProfitual.module.scss'

const FuneralBureauProfitualPhotos = [
      { id: 1, src: require('../../images/FuneralBureauProfitualPhotos/photo_2019-12-23_12-13-56-1024x690.jpg'), alt: 'Зображення 1', },
      { id: 2, src: require('../../images/FuneralBureauProfitualPhotos/photo_2019-12-23_13-49-52-1024x690.jpg'), alt: 'Зображення 2', },
];

const SectionFuneralBureauProfitual = () => {
    return (
        <section className={s.sectionFuneralBureauProfitual}>
            <div className={'container ' + s.funeralBureauProfitual__container}>
                
                <h1 className={s.funeralBureauProfitual__title}>Похоронне бюро «Проф Ритуал»</h1>
                <img className={s.funeralBureauProfitual__decoration} loading="lazy" src={AdvantagesDecoration} alt="advantages__decoration" />

                <p className={s.funeralBureauProfitual__description}><b>Ми</b> надаємо ритуальні послуги у місті Київ вже <b>понад 20 років</b>. Ми надаємо усі можливі ритуальні послуги за найдоступнішими цінами у місті Київ. Ми гарантуємо якісний та професійний підхід, завжди виконуємо послуги під час та за доступними цінами.</p>
                <p className={s.funeralBureauProfitual__description}>Ми чудово розуміємо що похорон це той день коли ви відпускаєте близьку вам людину та цей день повинен пройти гідно та без зайвого стресу котрий багато хто відчуває якщо наважується зайнятися організацією похорону сам. <b>Зателефонуйте нашому агенту</b> і дізнайтесь скільки коштуватимуть наші послуги, я вас запевняю, що ціни нижчі ніж у нас ви не знайдете в місті Київ.</p>
                <p className={s.funeralBureauProfitual__description}><b>Організація ритуальних послуг</b> дуже кропітка робота. Починаючи з оформлення документів і закінчуючи поминальним обідом. Такий стрес може негативно вплинути на здоров’я людини. «Проф Ритуал» понад 20 років працює у сфері ритуальних послуг і ми знаємо як організувати похорон за доступною для вас ціною.</p>

                <div className={s.FuneralBureauProfitualPhotos__container}>
                    {FuneralBureauProfitualPhotos.map((image) => (
                        <img className={s.advantagesServicesList__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} />
                    ))}
                </div>
                
            </div>
        </section>
  )
};

export default SectionFuneralBureauProfitual;
