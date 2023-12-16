import RitualWreathDecoration from '../../images/RitualWreath/RitualWreathDecoration.webp'
import RitualWreathListComponent from 'components/RitualWreathListComponent/RitualWreathListComponent';
import ArtificialRitualWreathsListComponent from 'components/ArtificialRitualWreathsListComponent/ArtificialRitualWreathsListComponent';
import EkibansForTheCoffinComponent from 'components/EkibansForTheCoffinComponent/EkibansForTheCoffinComponent';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import s from './SectionAboutRitualWreath.module.scss'



const SectionAboutRitualWreath = () => {

    return (
      <section className={s.sectionAboutRitualWreath}>
        <div className={'container ' + s.aboutRitualWreath__container}>
                
            <img className={s.aboutRitualWreath__decoration} loading="lazy" src={RitualWreathDecoration} alt="ritualWreath__decoration" />

            <p className={s.aboutRitualWreath__description}>Ритуальні вінки є особливим видом флористики. Покладання ритуального вінка на могилу <b>наповнене глибоким символізмом і має давні традиції</b> – з незапам’ятних часів могили вистилали свіжими квітами, і ця традиція збереглася донині. Шляхом піднесення квітів на могилу людини, яка пішла з життя, рідні та близькі востаннє отримують можливість, висловити йому своє кохання і вшанувати його вічну пам’ять.</p>                

            <p className={s.aboutRitualWreath__description}>Майстри-флористи здатні створювати жалобні вінки, які відповідають своєму сумному призначенню, але виглядають надзвичайно вишукано. Дизайн ритуальних вінків залежить від бажань замовника. Велика різноманітність живих квітів дозволяє за допомогою жалобних вінків <b>передати почуття та емоції до людини, що пішла з життя</b>. Ритуальний вінок може бути зроблений не тільки з традиційних квітів, але також з улюблених квітів покійного або квітів, які подобаються його рідним і близьким людям. На завершення композиції жалобні вінки декоруються жалобними стрічками, на які наносяться слова прощання від членів сім’ї, колег та друзів.</p>                

            <p className={s.aboutRitualWreath__description}>Живі квіти проводжають померлого в <b>останній шлях в оточенні квітів</b>, у цьому з’являється відчуття легкості. Встилаючи могилу близької нам людини квітами, ми оточуємо її красою та ніжністю, передаємо свої глибокі почуття, демонструємо найщиріші емоції.</p>
                
            <p className={s.aboutRitualWreath__description}>Ми розуміємо, наскільки важкий момент втрати близької людини, і тому ми <b>швидко та якісно вирішуємо питання із квітами для похорону</b>. Все, що вам потрібно зробити – вибрати на сайті відповідну композицію або зателефонувати нам і коротко описати, як має виглядати букет квітів, а про решту подбаємо ми.</p>

            <h2 className={s.aboutRitualWreath__title}>Живі ритуальні вінки</h2>
                
            <p className={s.aboutRitualWreath__description}>Подивіться чудовий асортимент ритуальних вінків з живих квітів. Купити живий ритуальний вінок ви можете за телефоном, або повідомте нам який саме ритуальний вінок з живих квітів ви бажаєте і про решту подбаємо ми.</p>
                
            <p className={s.aboutRitualWreath__description}><b>Ціни на вінки:</b> від 300 грн</p>
                       
            <RitualWreathListComponent />

                <h2 className={s.aboutRitualWreath__title}>Штучні ритуальні вінки</h2>

                <p className={s.aboutRitualWreath__description}>Ми створимо унікальні композиції своїми руками. Для цього ми використовуємо штучні лілії, троянди, орхідеї, соняшники, ромашки, маки, хризантеми, та багато інших кольорів та рослин. Ви можете подивитися на купити один з варіантів нижче або зателефонувавши нам для того, щоб ми зробили унікальний ритуальний вінок зі штучних квітів.</p>
        
            <ArtificialRitualWreathsListComponent />
            
                <h2 className={s.aboutRitualWreath__title}>Екібани на труну</h2>

            <EkibansForTheCoffinComponent />
            
                <SectionNeedHelp />
                
        </div>
      </section>
  )
};

export default SectionAboutRitualWreath;
