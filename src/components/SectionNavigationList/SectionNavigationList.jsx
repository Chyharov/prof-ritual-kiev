import { Link } from 'react-router-dom';
import s from './SectionNavigationList.module.scss'



const SectionNavigationList = () => {
    return (
      <section className={s.sectionNavigationList}>
        <div className={'container ' + s.navigationList__container}>
            
        <h2 className={s.navigationList__title}><Link to="/ritualservices">Ритуальні послуги</Link></h2>
                
        <ul className={s.navigationList__list}>
            <li className={s.navigationList__item}><Link to="/ritualagent">Ритуальний агент</Link></li>
            <li className={s.navigationList__item}><Link to="/funeralorganization">Організація похорон</Link></li>
            <li className={s.navigationList__item}><Link to="/cremation">Кремація</Link></li>
            <li className={s.navigationList__item}><Link to="/hearse">Автокатафалк</Link></li>
            <li className={s.navigationList__item}><Link to="/cargo">Вантаж 200</Link></li>
            <li className={s.navigationList__item}><Link to="/mortuaryservices">Послуги моргу</Link></li>
            <li className={s.navigationList__item}><Link to="/memorialdinners">Поминальні обіди</Link></li>
            <li className={s.navigationList__item}><Link to="/documentsforfuneral">Оформлення документів для похорону</Link></li>
            <li className={s.navigationList__item}><Link to="/ritualhall">Ритуальна зала</Link></li>
            <li className={s.navigationList__item}><Link to="/musicalaccompanimen">Музичний супровід</Link></li>
            <li className={s.navigationList__item}><Link to="/removalbody">Винесення тіла</Link></li>
            <li className={s.navigationList__item}><Link to="/requiemservicebypriest">Відспівування померлого</Link></li>
            <li className={s.navigationList__item}><Link to="/sanitationofpremises">Санобробка приміщень</Link></li>
            <li className={s.navigationList__item}><Link to="/makingfuneralportrait">Виготовлення фотопортрету</Link></li>
            <li className={s.navigationList__item}><Link to="/funeralescortbymedicalpersonnal">Супровід медперсоналом</Link></li>
        </ul>
        
        <h2 className={s.navigationList__title}><Link to="/ritualgoods">Ритуальні товари</Link></h2>
                
        <ul className={s.navigationList__list}>
            <li className={s.navigationList__item}><Link to="/ritualwreath">Вінки</Link></li>
            <li className={s.navigationList__item}><Link to="/сoffins">Труни</Link></li>
            <li className={s.navigationList__item}><Link to="/">Хрести</Link></li>
            <li className={s.navigationList__item}><Link to="/">Пам’ятники</Link></li>
            <li className={s.navigationList__item}><Link to="/">Приладдя</Link></li>
        </ul>

        </div>
      </section>
  )
};

export default SectionNavigationList;