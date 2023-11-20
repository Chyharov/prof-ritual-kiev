import s from './SectionOtherServices.module.scss'

const SectionOtherServices = () => {
    return (
      <section className={s.sectionOtherServices}>
        <div className={'container ' + s.otherServices__container}>

            <h2 className={s.otherServices__title}>Які інші послуги ви можете замовити від Профритуал:</h2>

            <p className={s.otherServices__description}>Після оформлення документів ви стаєте в чергу і маєте прибути в крематорій у потрібний час.</p>

            <h2 className={s.otherServices__title}>Ви можете замовити великий, малий та VIP зали:</h2>
                
            <ul className={s.otherServices__list}>
                <li className={s.otherServices__list}><p className={s.otherServices__description}>Читання ритуалу</p></li>
                <li className={s.otherServices__list}><p className={s.otherServices__description}>Напис на урні</p></li>
                <li className={s.otherServices__list}><p className={s.otherServices__description}>Утилізація вінків/кошиків</p></li>
                <li className={s.otherServices__list}><p className={s.otherServices__description}>Перевезення померлого/катафалк</p></li>
                <li className={s.otherServices__list}><p className={s.otherServices__description}>Великий асортимент ритуальних вінків</p></li>
                <li className={s.otherServices__list}><p className={s.otherServices__description}>Поминальний обід</p></li>
            </ul>

            <p className={s.otherServices__description}>Документація дуже педантична, при помилці на вас може чекати відмова. Звернувшись за послугою кремації в <b>Профритуал</b> ви уникнете такого неприємного сюрпризу.</p>
        

            <h2 className={s.otherServices__title}>Зали у крематорії</h2>

            <ul className={s.otherServices__list}>
                <li className={s.otherServices__list}><p className={s.otherServices__description}><b>Великий</b> – з ліфтом опускається прямо в піч</p></li>
                <li className={s.otherServices__list}><p className={s.otherServices__description}><b>Малий</b> – церковний ритуальний зал і після прощання перевозять у піч</p></li>
                <li className={s.otherServices__list}><p className={s.otherServices__description}><b>VIP</b> – гарний ритуальний зал, після прощання перевозять у піч</p></li>
            </ul>

            <p className={s.otherServices__description}>Для похоронного бюро Профритуал найголовніше щоб у день кремації все пройшло гладко і без приємних сюрпризів. Ви завжди можете викликати нашого агента до себе додому абсолютно безкоштовно, який допоможе вам вибрати найоптимальніший варіант кремації.</p>

            <h2 className={s.otherServices__title}>Клієнти, які замовляли послугу кремації, так само цікавилися:</h2>

            <ul className={s.otherServices__list}>
                <li className={s.otherServices__list}><a href='/' className={s.otherServices__descriptionLink}>Послуг транспорту</a></li>
                <li className={s.otherServices__list}><a href='/' className={s.otherServices__descriptionLink}>Поминальним обідом у Києві</a></li>
                <li className={s.otherServices__list}><a href='/' className={s.otherServices__descriptionLink}>Бригадою для винесення тіла померлого</a></li>
                <li className={s.otherServices__list}><a href='/' className={s.otherServices__descriptionLink}>Дезобробкою приміщення</a></li>
            </ul>
                
                
        </div>
      </section>
  )
};

export default SectionOtherServices;
