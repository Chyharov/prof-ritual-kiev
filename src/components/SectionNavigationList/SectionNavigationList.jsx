import s from './SectionNavigationList.module.scss'

const SectionNavigationList = () => {
    return (
      <section className={s.sectionNavigationList}>
        <div className={'container ' + s.navigationList__container}>
            
        <h2 className={s.navigationList__title}>Ритуальні послуги</h2>
        
        <ul className={s.navigationList__list}>
            <li className={s.navigationList__item}>Ритуальний агент</li>
            <li className={s.navigationList__item}>Організація похорон</li>
            <li className={s.navigationList__item}>Кремація</li>
            <li className={s.navigationList__item}>Автокатафалк</li>
            <li className={s.navigationList__item}>Вантаж 200</li>
            <li className={s.navigationList__item}>Послуги моргу</li>
            <li className={s.navigationList__item}>Поминальні обіди</li>
            <li className={s.navigationList__item}>Оформлення документів</li>
            <li className={s.navigationList__item}>Ритуальна зала</li>
            <li className={s.navigationList__item}>Музичний супровід</li>
            <li className={s.navigationList__item}>Винесення тіла</li>
            <li className={s.navigationList__item}>Відспівування померлого</li>
            <li className={s.navigationList__item}>Санобробка приміщень</li>
            <li className={s.navigationList__item}>Виготовлення фотопортрету</li>
            <li className={s.navigationList__item}>Супровід медперсоналом</li>
        </ul>
        
        <h2 className={s.navigationList__title}>Ритуальні товари</h2>
                
        <ul className={s.navigationList__list}>
            <li className={s.navigationList__item}>Вінки</li>
            <li className={s.navigationList__item}>Труни</li>
            <li className={s.navigationList__item}>Хрести</li>
            <li className={s.navigationList__item}>Пам’ятники</li>
            <li className={s.navigationList__item}>Приладдя</li>
        </ul>


        </div>
      </section>
  )
};

export default SectionNavigationList;
