import CrossesDecoration from '../../images/Сrosses/CrossesDecoration.jpg'
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import s from './SectionAboutCrosses.module.scss'

const crossesImgList = [
    { id: 1, src: require('../../images/Сrosses/Crosses.jpg'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/Сrosses/Crosses2.jpg'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/Сrosses/Crosses3.jpg'), alt: 'Зображення 3' },
    { id: 4, src: require('../../images/Сrosses/Crosses4.jpg'), alt: 'Зображення 4' },
    { id: 5, src: require('../../images/Сrosses/Crosses5.jpg'), alt: 'Зображення 5' },
    { id: 6, src: require('../../images/Сrosses/Crosses6.jpg'), alt: 'Зображення 6' },
    { id: 7, src: require('../../images/Сrosses/Crosses7.jpg'), alt: 'Зображення 7' },
    { id: 8, src: require('../../images/Сrosses/Crosses8.jpg'), alt: 'Зображення 8' },
    { id: 9, src: require('../../images/Сrosses/Crosses9.jpg'), alt: 'Зображення 9' },
    { id: 10, src: require('../../images/Сrosses/Crosses10.jpg'), alt: 'Зображення 10' },
    { id: 11, src: require('../../images/Сrosses/Crosses11.jpg'), alt: 'Зображення 11' },
    { id: 12, src: require('../../images/Сrosses/Crosses12.jpg'), alt: 'Зображення 12' },
];


const SectionAboutCrosses = () => {
    return (
      <section className={s.sectionAboutCrosses}>
        <div className={'container ' + s.aboutCrosses__container}>
                
            <img className={s.aboutCrosses__decoration} loading="lazy" src={CrossesDecoration} alt="crosses__decoration" />

                <p className={s.aboutCrosses__description}>Без ритуального хреста на могилу не обходиться жодне поховання православної людини.</p>
                
                <p className={s.aboutCrosses__description}><b>Хрест – символ православ’я</b>, саме тому спочатку табличка з ініціалами покійного та датами його народження та смерті прикручується на хрест. Хрест оберігає душу померлого від злих духів, тому залишити могилу без хреста не можна.</p>

                <p className={s.aboutCrosses__description}>Майстри в Профритуал створюють ритуальні хрести, які відповідають своєму невтішному призначенню, але виглядають надзвичайно вишукано.</p>
               
                <p className={s.aboutCrosses__description}>Дизайн ритуальних хрестів залежить від бажань замовника. Кожен може купити ритуальний хрест, який відповідає не тільки високій якості, а й гармонії. Наші майстри працюють над <b>металевими, дерев’яними та гранітними хрестами</b>. Не важливо, яка ціна, кожен хрест проходить ретельну перевірку якості. Ми обробляємо дерев’яні хрести щоб вони не гнили, і металеві щоб не іржавіли довгий час.</p>

                <p style={{marginBottom: '20px'}} className={s.aboutCrosses__description}>Ми розуміємо, наскільки важким є момент втрати близької людини, і тому ми швидко і <b>якісно вирішуємо питання</b> з ритуальними хрестами для похорону. Все, що вам потрібно зробити – вибрати на сайті хрест або зателефонувати нам і коротко описати, як повинен виглядати ритуальний хрест, а про решту подбаємо ми.</p>

        <SectionNeedHelp />
                          
            <ul style={{marginTop: '20px'}} className={s.aboutCrosses__list}>
                {crossesImgList.map((image) => (        
                    <li className={s.aboutCrosses__item} key={image.id}>
                        <img className={s.aboutCrosses__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} />
                    </li>
                ))}
            </ul>

        </div>
      </section>
  )
};

export default SectionAboutCrosses;
