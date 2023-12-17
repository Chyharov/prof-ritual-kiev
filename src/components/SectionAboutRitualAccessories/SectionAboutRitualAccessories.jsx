import RitualAccessoriesDecoration from '../../images/RitualAccessories/RitualAccessoriesDecoration.jpg';
import RitualAccessorieListComponent from 'components/RitualAccessorieListComponent/RitualAccessorieListComponent';
import TulleCoveringListComponent from 'components/TulleCoveringListComponent/TulleCoveringListComponent';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import s from './SectionAboutRitualAccessories.module.scss'

const SectionAboutRitualAccessories = () => {
    return (
      <section className={s.sectionAboutRitualAccessories}>
        <div className={'container ' + s.aboutAboutRitual__container}>
        
            <img className={s.aboutAboutRitual__decoration} loading="lazy" src={RitualAccessoriesDecoration} alt="crosses__decoration" />

                <p className={s.aboutAboutRitual__description}>Ритуальне приладдя є невід’ємною частиною похорону. “Профритуал” займається <b>продажем ритуальних товарів</b> та приладдя вже понад 10 років. Все ритуальне приладдя, яке ми маємо в наявності, ви можете подивитися відвідавши нас за адресою вул. Перта Запорожця 15 у місті Київ. Або зателефонуйте нам, і коротко опішіть чого ви потребуєте а ми зробимо інше. В наявності є <b>більше 100 різних ритуальних речей</b>, які ми продаємо за найнижчими цінами в місті Київ. При покупці <a href="/">ритуальної труни</a> або <a href="/">ритуальних вінків</a> ми робимо великі знижки на багато ритуальних речей.</p>

                <h2 className={s.aboutAboutRitual__title}>Похоронні набори</h2>

                <p className={s.aboutAboutRitual__description}>Для проведення прощальної панахиди та відспівування покійного <b>обов’язковим аксесуаром є</b> похоронний набір. У набір входять: прохідна молитва, віночок на голову, хрестик, хрест в руку, свічки, для чоловіків іконка зі Спасителем, для жінок іконка з Богородицею.</p>

            <RitualAccessorieListComponent />
                
            <SectionNeedHelp />
                
                <h2 style={{ marginTop: '20px' }} className={s.aboutAboutRitual__title}>Саван православний</h2>

                <p className={s.aboutAboutRitual__description}>Понад звичайний одяг на покійного християнина належить саван – білий покрив, що нагадує про той білий одяг, в який одягають немовля при хрещенні. Це свідчить, що померлий <b>зберіг до кінця життя</b> обітниці, які він дав при хрещенні.</p>

                <p className={s.aboutAboutRitual__description}>Православний саван – це дуже важлива частина похорону православної людини. “Профритуал” продає тільки якісне ритуальне приладдя, яке зроблено з усіма ритуальними обрядами та традиціями. Якщо ви хочете дізнатися більше інформації про наше ритуальне приладдя, то <b>телефонуйте нам цілодобово</b> за номерами вказівними нижче.</p>

                <h2 className={s.aboutAboutRitual__title}>Тюлі-покривала для похорону</h2>

                <p className={s.aboutAboutRitual__description}>Наші ритуальні тюлі та покривала зроблені в Україні на заводах, що знаходяться на околицях міста Київ. Ми маємо великий вибір тюлів та покривал, різних кольорів та розмірів. Телефонуйте нам у будь-який час і ми допоможемо вам підібрати найкраще та якісне ритуальне приладдя за доступною для вас ціною.</p>

            <TulleCoveringListComponent />

        </div>
      </section>
  )
};

export default SectionAboutRitualAccessories;
