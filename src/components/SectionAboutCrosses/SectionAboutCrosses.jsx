import CrossesDecoration from '../../images/Сrosses/CrossesDecoration.jpg';
import CrossesListComponent from 'components/CrossesListComponent/CrossesListComponent';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import s from './SectionAboutCrosses.module.scss'

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
                          
            <CrossesListComponent />
        
            <SectionNeedHelp />

        </div>
      </section>
  )
};

export default SectionAboutCrosses;
