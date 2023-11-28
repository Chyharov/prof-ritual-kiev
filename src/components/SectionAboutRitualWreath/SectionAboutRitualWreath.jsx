import RitualWreathDecoration from '../../images/RitualWreath/RitualWreathDecoration.jpg'
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import s from './SectionAboutRitualWreath.module.scss'

const ritualWreathList = [
    { id: 1, src: require('../../images/RitualWreath/ritualWreathList.jpg'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/RitualWreath/ritualWreathList2.jpg'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/RitualWreath/ritualWreathList3.jpg'), alt: 'Зображення 3' },
    { id: 4, src: require('../../images/RitualWreath/ritualWreathList4.jpg'), alt: 'Зображення 4' },
    { id: 5, src: require('../../images/RitualWreath/ritualWreathList5.jpg'), alt: 'Зображення 5' },
    { id: 6, src: require('../../images/RitualWreath/ritualWreathList6.jpg'), alt: 'Зображення 6' },
    { id: 7, src: require('../../images/RitualWreath/ritualWreathList7.png'), alt: 'Зображення 7' },
    { id: 8, src: require('../../images/RitualWreath/ritualWreathList8.png'), alt: 'Зображення 8' },
    { id: 9, src: require('../../images/RitualWreath/ritualWreathList9.png'), alt: 'Зображення 9' },
    { id: 10, src: require('../../images/RitualWreath/ritualWreathList10.png'), alt: 'Зображення 10' },
    { id: 11, src: require('../../images/RitualWreath/ritualWreathList11.jpg'), alt: 'Зображення 11' },
    { id: 12, src: require('../../images/RitualWreath/ritualWreathList12.jpg'), alt: 'Зображення 12' },
    { id: 13, src: require('../../images/RitualWreath/ritualWreathList13.jpg'), alt: 'Зображення 13' },
    { id: 14, src: require('../../images/RitualWreath/ritualWreathList14.jpg'), alt: 'Зображення 14' },
    { id: 15, src: require('../../images/RitualWreath/ritualWreathList15.jpg'), alt: 'Зображення 15' },
    { id: 16, src: require('../../images/RitualWreath/ritualWreathList16.jpg'), alt: 'Зображення 16' },
    { id: 17, src: require('../../images/RitualWreath/ritualWreathList17.jpg'), alt: 'Зображення 17' },
    { id: 18, src: require('../../images/RitualWreath/ritualWreathList18.jpg'), alt: 'Зображення 18' },
    { id: 19, src: require('../../images/RitualWreath/ritualWreathList19.jpg'), alt: 'Зображення 19' },
    { id: 20, src: require('../../images/RitualWreath/ritualWreathList20.png'), alt: 'Зображення 20' },
    { id: 21, src: require('../../images/RitualWreath/ritualWreathList21.png'), alt: 'Зображення 21' },
    { id: 22, src: require('../../images/RitualWreath/ritualWreathList22.png'), alt: 'Зображення 22' },
    { id: 23, src: require('../../images/RitualWreath/ritualWreathList23.jpg'), alt: 'Зображення 23' },
    { id: 24, src: require('../../images/RitualWreath/ritualWreathList24.jpg'), alt: 'Зображення 24' },
    { id: 25, src: require('../../images/RitualWreath/ritualWreathList25.jpg'), alt: 'Зображення 25' },
];

const artificialRitualWreaths = [
    { id: 1, src: require('../../images/RitualWreath/artificialRitualWreaths.jpg'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/RitualWreath/artificialRitualWreaths2.jpg'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/RitualWreath/artificialRitualWreaths3.jpg'), alt: 'Зображення 3' },
    { id: 4, src: require('../../images/RitualWreath/artificialRitualWreaths4.jpg'), alt: 'Зображення 4' },
    { id: 5, src: require('../../images/RitualWreath/artificialRitualWreaths5.jpg'), alt: 'Зображення 5' },
    { id: 6, src: require('../../images/RitualWreath/artificialRitualWreaths6.jpg'), alt: 'Зображення 6' },
    { id: 7, src: require('../../images/RitualWreath/artificialRitualWreaths7.jpg'), alt: 'Зображення 7' },
    { id: 8, src: require('../../images/RitualWreath/artificialRitualWreaths8.jpg'), alt: 'Зображення 8' },
    { id: 9, src: require('../../images/RitualWreath/artificialRitualWreaths9.jpg'), alt: 'Зображення 9' },
    { id: 10, src: require('../../images/RitualWreath/artificialRitualWreaths10.jpg'), alt: 'Зображення 10' },
    { id: 11, src: require('../../images/RitualWreath/artificialRitualWreaths11.jpg'), alt: 'Зображення 11' },
    { id: 12, src: require('../../images/RitualWreath/artificialRitualWreaths12.jpg'), alt: 'Зображення 12' },
    { id: 13, src: require('../../images/RitualWreath/artificialRitualWreaths13.jpg'), alt: 'Зображення 13' },
    { id: 14, src: require('../../images/RitualWreath/artificialRitualWreaths14.jpg'), alt: 'Зображення 14' },
    { id: 15, src: require('../../images/RitualWreath/artificialRitualWreaths15.jpg'), alt: 'Зображення 15' },
    { id: 16, src: require('../../images/RitualWreath/artificialRitualWreaths16.jpg'), alt: 'Зображення 16' },
    { id: 17, src: require('../../images/RitualWreath/artificialRitualWreaths17.jpg'), alt: 'Зображення 17' },
    { id: 18, src: require('../../images/RitualWreath/artificialRitualWreaths18.jpg'), alt: 'Зображення 18' },
    { id: 19, src: require('../../images/RitualWreath/artificialRitualWreaths19.jpg'), alt: 'Зображення 19' },
    { id: 20, src: require('../../images/RitualWreath/artificialRitualWreaths20.jpg'), alt: 'Зображення 20' },
    { id: 21, src: require('../../images/RitualWreath/artificialRitualWreaths21.jpg'), alt: 'Зображення 21' },
    { id: 22, src: require('../../images/RitualWreath/artificialRitualWreaths22.jpg'), alt: 'Зображення 22' },
    { id: 23, src: require('../../images/RitualWreath/artificialRitualWreaths23.jpg'), alt: 'Зображення 23' },
    { id: 24, src: require('../../images/RitualWreath/artificialRitualWreaths24.jpg'), alt: 'Зображення 24' },
    { id: 25, src: require('../../images/RitualWreath/artificialRitualWreaths25.jpg'), alt: 'Зображення 25' },
    { id: 26, src: require('../../images/RitualWreath/artificialRitualWreaths26.jpg'), alt: 'Зображення 26' },
    { id: 27, src: require('../../images/RitualWreath/artificialRitualWreaths27.jpg'), alt: 'Зображення 27' },
];

const ekibansForTheCoffin = [
    { id: 1, src: require('../../images/RitualWreath/ekibansForTheCoffin.jpg'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/RitualWreath/ekibansForTheCoffin2.jpg'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/RitualWreath/ekibansForTheCoffin3.jpg'), alt: 'Зображення 3' },
    { id: 4, src: require('../../images/RitualWreath/ekibansForTheCoffin4.jpg'), alt: 'Зображення 4' },
    { id: 5, src: require('../../images/RitualWreath/ekibansForTheCoffin5.jpg'), alt: 'Зображення 5' },
    { id: 6, src: require('../../images/RitualWreath/ekibansForTheCoffin6.jpg'), alt: 'Зображення 6' },
    { id: 7, src: require('../../images/RitualWreath/ekibansForTheCoffin7.jpg'), alt: 'Зображення 7' },
    { id: 8, src: require('../../images/RitualWreath/ekibansForTheCoffin8.jpg'), alt: 'Зображення 8' },
];


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
                       
            <ul className={s.aboutRitualWreath__list}>
                {ritualWreathList.map((image) => (        
                    <li className={s.aboutRitualWreath__item} key={image.id}>
                        <img className={s.ritualWreathList__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} />
                    </li>
                ))}
            </ul>

                <h2 className={s.aboutRitualWreath__title}>Штучні ритуальні вінки</h2>

                <p className={s.aboutRitualWreath__description}>Ми створимо унікальні композиції своїми руками. Для цього ми використовуємо штучні лілії, троянди, орхідеї, соняшники, ромашки, маки, хризантеми, та багато інших кольорів та рослин. Ви можете подивитися на купити один з варіантів нижче або зателефонувавши нам для того, щоб ми зробили унікальний ритуальний вінок зі штучних квітів.</p>
        
            <ul className={s.aboutRitualWreath__list}>
                {artificialRitualWreaths.map((image) => (        
                    <li className={s.aboutRitualWreath__item} key={image.id}>
                        <img className={s.artificialRitualWreaths__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} />
                    </li>
                ))}
            </ul>
            
                <h2 className={s.aboutRitualWreath__title}>Екібани на труну</h2>

            <ul className={s.aboutRitualWreath__list}>
                {ekibansForTheCoffin.map((image) => (        
                    <li className={s.aboutRitualWreath__item} key={image.id}>
                        <img className={s.ekibansForTheCoffin__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} />
                    </li>
                ))}
            </ul>
            
                <SectionNeedHelp />
                
        </div>
      </section>
  )
};

export default SectionAboutRitualWreath;
