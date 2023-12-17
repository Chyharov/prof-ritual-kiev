import CoffinsDecoration from '../../images/Coffins/CoffinsDecoration.jpg'
import StandardCoffinsListComponent from 'components/StandardCoffinsListComponent/StandardCoffinsListComponent';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import s from './SectionAboutCoffins.module.scss'

const eliteCoffins = [
    { id: 1, src: require('../../images/Coffins/EliteCoffins/EliteCoffins.jpg'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/Coffins/EliteCoffins/EliteCoffins2.jpg'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/Coffins/EliteCoffins/EliteCoffins3.jpg'), alt: 'Зображення 3' },
    { id: 4, src: require('../../images/Coffins/EliteCoffins/EliteCoffins4.jpg'), alt: 'Зображення 4' },
    { id: 5, src: require('../../images/Coffins/EliteCoffins/EliteCoffins5.jpg'), alt: 'Зображення 5' },
    { id: 6, src: require('../../images/Coffins/EliteCoffins/EliteCoffins6.jpg'), alt: 'Зображення 6' },
    { id: 7, src: require('../../images/Coffins/EliteCoffins/EliteCoffins7.jpg'), alt: 'Зображення 7' },
    { id: 8, src: require('../../images/Coffins/EliteCoffins/EliteCoffins8.jpg'), alt: 'Зображення 8' },
    { id: 9, src: require('../../images/Coffins/EliteCoffins/EliteCoffins9.jpg'), alt: 'Зображення 9' },
    { id: 10, src: require('../../images/Coffins/EliteCoffins/EliteCoffins10.jpg'), alt: 'Зображення 10' },
    { id: 11, src: require('../../images/Coffins/EliteCoffins/EliteCoffins11.jpg'), alt: 'Зображення 11' },
];

const economCoffins = [
    { id: 1, src: require('../../images/Coffins/EconomCoffins/EconomCoffins.jpg'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/Coffins/EconomCoffins/EconomCoffins2.jpg'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/Coffins/EconomCoffins/EconomCoffins3.jpg'), alt: 'Зображення 3' },
    { id: 4, src: require('../../images/Coffins/EconomCoffins/EconomCoffins4.jpg'), alt: 'Зображення 4' },
    { id: 5, src: require('../../images/Coffins/EconomCoffins/EconomCoffins5.jpg'), alt: 'Зображення 5' },
    { id: 6, src: require('../../images/Coffins/EconomCoffins/EconomCoffins6.jpg'), alt: 'Зображення 6' },
    { id: 7, src: require('../../images/Coffins/EconomCoffins/EconomCoffins7.jpg'), alt: 'Зображення 7' },
    { id: 8, src: require('../../images/Coffins/EconomCoffins/EconomCoffins8.jpg'), alt: 'Зображення 8' },
    { id: 9, src: require('../../images/Coffins/EconomCoffins/EconomCoffins9.jpg'), alt: 'Зображення 9' },
    { id: 10, src: require('../../images/Coffins/EconomCoffins/EconomCoffins10.jpg'), alt: 'Зображення 10' },
    { id: 11, src: require('../../images/Coffins/EconomCoffins/EconomCoffins11.jpg'), alt: 'Зображення 11' },
    { id: 12, src: require('../../images/Coffins/EconomCoffins/EconomCoffins12.jpg'), alt: 'Зображення 12' },
    { id: 13, src: require('../../images/Coffins/EconomCoffins/EconomCoffins13.jpg'), alt: 'Зображення 13' },
    { id: 14, src: require('../../images/Coffins/EconomCoffins/EconomCoffins14.jpg'), alt: 'Зображення 14' },
    { id: 15, src: require('../../images/Coffins/EconomCoffins/EconomCoffins15.jpg'), alt: 'Зображення 15' },
    { id: 16, src: require('../../images/Coffins/EconomCoffins/EconomCoffins16.jpg'), alt: 'Зображення 16' },
    { id: 17, src: require('../../images/Coffins/EconomCoffins/EconomCoffins17.jpg'), alt: 'Зображення 17' },
    { id: 18, src: require('../../images/Coffins/EconomCoffins/EconomCoffins18.jpg'), alt: 'Зображення 18' },
    { id: 19, src: require('../../images/Coffins/EconomCoffins/EconomCoffins19.jpg'), alt: 'Зображення 19' },
    { id: 20, src: require('../../images/Coffins/EconomCoffins/EconomCoffins20.jpg'), alt: 'Зображення 20' },
    { id: 21, src: require('../../images/Coffins/EconomCoffins/EconomCoffins21.jpg'), alt: 'Зображення 21' },
    { id: 22, src: require('../../images/Coffins/EconomCoffins/EconomCoffins22.jpg'), alt: 'Зображення 22' },
    { id: 23, src: require('../../images/Coffins/EconomCoffins/EconomCoffins23.jpg'), alt: 'Зображення 23' },
    { id: 24, src: require('../../images/Coffins/EconomCoffins/EconomCoffins24.jpg'), alt: 'Зображення 24' },
    { id: 25, src: require('../../images/Coffins/EconomCoffins/EconomCoffins25.jpg'), alt: 'Зображення 25' },
];


const SectionAboutCoffins = () => {
    return (
      <section className={s.sectionAboutCoffins}>
        <div className={'container ' + s.aboutCoffins__container}>
                
            <img className={s.aboutCoffins__decoration} loading="lazy" src={CoffinsDecoration} alt="coffins__decoration" />

            <p className={s.aboutCoffins__description}>Труна має бути міцною, якісною і шанувати пам’ять померлої людини. <b>Ритуальні труни це не тільки міцне дерево</b>, це пам’ять про покійну людину, але не завжди є фінансова можливість. Профритуал надає 3 види трун: бюджетні, елітні та двокришкові саркофаги.</p>                

            <p className={s.aboutCoffins__description}>Які б не були фінансові можливості наші агенти допоможуть підібрати ритуальну труну, яка максимально підходитиме за всіма вимогами і гідно вшановуватиме пам’ять покійного.</p>
            
            <p className={s.aboutCoffins__description}>Низька ціна <b>не означає не повагу</b> – наші бюджетні (економ) труни виготовлені з міцного та якісного дерева, яке росте навколо міста Київ. Майстри роблять чудову роботу, яка позначається в дивовижній якості Майстра в Профритуал створюють ритуальні труни, які відповідають своєму сумному призначенню, але при цьому виглядають надзвичайно вишукано.</p>
                
            <blockquote className={s.aboutCoffins__blockquote}> Дизайн ритуальних трун залежить від бажань замовника. <b>Ритуальні труни можуть поєднувати улюблене дерево та кольори</b> покійного, які символізуватимуть глибоке кохання та смуток. Ми оточуємо останній шлях близької нам людини, красою та ніжністю, передаємо свої глибокі почуття, демонструємо найщиріші емоції.</blockquote>

            <p style={{marginBottom: '20px'}} className={s.aboutCoffins__description}>Ми розуміємо, наскільки важкий момент втрати близької людини, і тому <b>швидко і якісно вирішуємо питання ритуальними трунами</b>. Все, що вам потрібно зробити – вибрати на сайті відповідну труну або зателефонувати нам і коротко описати, як має виглядати жалобна труна, а про решту подбаємо ми.</p>

        <SectionNeedHelp />

            <h2 style={{marginTop: '20px'}} className={s.aboutCoffins__title}>Стандартні Труни</h2>
                
            <p className={s.aboutCoffins__description}>Двокришкові саркофаги <b>виготовлені з цінних порід дерева</b>, постільний оксамит зроблений в Італії, всі цільнодерев’яні ручки знаходяться на бронзових кріпленнях. Кожна деталь на двокришкових саркофагах ручної роботи. У середньому, на виготовлення двокришкового саркофагу йде 4 дні та 8 майстрів. Подивіться асортимент двокришкових саркофагів, який є у нас унизу. Якщо вас цікавить унікальний дизайн двокришкового саркофагу, телефонуйте нам цілодобово і <b>наш агент розкаже вам вартість, і терміни виготовлення</b> за вашими специфікаціями.</p>
        
                <p className={s.aboutCoffins__description}><b>Ціна: <span className={s.aboutCoffins__span}>від 6 000 грн.</span></b></p>
                
                <p className={s.aboutCoffins__description}><b>Матеріал:</b> дерев’яна заготовка, з елементами дерева, розкритого лаком.</p>
                
            <StandardCoffinsListComponent />

                <h2 className={s.aboutCoffins__title}>Елітні Труни</h2>

                <p className={s.aboutCoffins__description}>Елітні труни це чудова ручна робота <b>зроблена найкращими майстрами України</b>. Похоронне бюро “Профритуал” пропонує понад <b>25 видів</b> елітних трун, які є в наявності. Ви можете зателефонувати нам у будь-який час і розповісти, як має виглядати жалобна елітна труна, і наш агент займеться рештою.</p>
        
                <p className={s.aboutCoffins__description}><b>Ціна: </b><span className={s.aboutCoffins__span}>від 9 800 грн.</span></p>

                <p className={s.aboutCoffins__description}><b>Матеріал: </b>дерев’яна заготовка розкрита лаком.</p>

            <ul className={s.aboutCoffins__list}>
                {eliteCoffins.map((image) => (        
                    <li className={s.aboutCoffins__item} key={image.id}>
                        <img className={s.eliteCoffins__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} />
                    </li>
                ))}
            </ul>
            
                <h2 className={s.aboutCoffins__title}>Гроби Економ</h2>
                
                <p className={s.aboutCoffins__description}>Нижче ви зможете подивитися асортимент бюджетних трун, які ми маємо в наявності. Труни з категорії економ <b>виготовляються нашими майстрами у Києві</b>. Ми не використовуємо посередників для виготовлення трун і тому економ труни набагато дешевше ніж в інших, але ні в чому не поступаються якості, оскільки кожна труна </p>

                <p className={s.aboutCoffins__description}><b>Ціна: </b><span className={s.aboutCoffins__span}>від 2 800 грн.</span></p>

                <p><b>Матеріал:</b> дерев’яна заготівля, оббита тканиною (шовк, атлас, велюр, парча).</p>

            <ul className={s.aboutCoffins__list}>
                {economCoffins.map((image) => (        
                    <li className={s.aboutCoffins__item} key={image.id}>
                        <img className={s.economCoffins__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} />
                    </li>
                ))}
            </ul>
            
        </div>
      </section>
  )
};

export default SectionAboutCoffins;
