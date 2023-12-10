import { Link } from 'react-router-dom';
import s from './SectionNavigationList.module.scss'



const SectionNavigationList = () => {
    return (
      <section className={s.sectionNavigationList}>
        <div className={'container ' + s.navigationList__container}>
            
        <h2 className={s.navigationList__title}><Link className={s.navigationList__link} to="/ritualservices">Ритуальні послуги</Link></h2>
                
          <ul className={s.navigationList__list}>
            <Link className={s.navigationList__link} to="/ritualagent"><li className={s.navigationList__item}>Ритуальний агент</li></Link>
            <Link className={s.navigationList__link} to="/funeralorganization"><li className={s.navigationList__item}>Організація похорон</li></Link>
            <Link className={s.navigationList__link} to="/cremation"><li className={s.navigationList__item}>Кремація</li></Link>
            <Link className={s.navigationList__link} to="/hearse"><li className={s.navigationList__item}>Автокатафалк</li></Link>
            <Link className={s.navigationList__link} to="/cargo"><li className={s.navigationList__item}>Вантаж 200</li></Link>
            <Link className={s.navigationList__link} to="/mortuaryservices"><li className={s.navigationList__item}>Послуги моргу</li></Link>
            <Link className={s.navigationList__link} to="/memorialdinners"><li className={s.navigationList__item}>Поминальні обіди</li></Link>
            <Link className={s.navigationList__link} to="/documentsforfuneral"><li className={s.navigationList__item}>Оформлення документів для похорону</li></Link>
            <Link className={s.navigationList__link} to="/ritualhall"><li className={s.navigationList__item}>Ритуальна зала</li></Link>
            <Link className={s.navigationList__link} to="/musicalaccompanimen"><li className={s.navigationList__item}>Музичний супровід</li></Link>
            <Link className={s.navigationList__link} to="/removalbody"><li className={s.navigationList__item}>Винесення тіла</li></Link>
            <Link className={s.navigationList__link} to="/requiemservicebypriest"><li className={s.navigationList__item}>Відспівування померлого</li></Link>
            <Link className={s.navigationList__link} to="/sanitationofpremises"><li className={s.navigationList__item}>Санобробка приміщень</li></Link>
            <Link className={s.navigationList__link} to="/makingfuneralportrait"><li className={s.navigationList__item}>Виготовлення фотопортрету</li></Link>
            <Link className={s.navigationList__link} to="/funeralescortbymedicalpersonnal"><li className={s.navigationList__item}>Супровід медперсоналом</li></Link>
        </ul>
        
        <Link className={s.navigationList__link} to="/ritualgoods"><h2 className={s.navigationList__title}>Ритуальні товари</h2></Link>
                
        <ul className={s.navigationList__list}>
            <Link className={s.navigationList__link} to="/ritualwreath"><li className={s.navigationList__item}>Вінки</li></Link>
            <Link className={s.navigationList__link} to="/сoffins"><li className={s.navigationList__item}>Труни</li></Link>
            <Link className={s.navigationList__link} to="/crosses"><li className={s.navigationList__item}>Хрести</li></Link>
            <Link className={s.navigationList__link} to="/ritualmonuments"><li className={s.navigationList__item}>Пам’ятники</li></Link>
            <Link className={s.navigationList__link} to="/ritualaccessories"><li className={s.navigationList__item}>Приладдя</li></Link>
        </ul>

        </div>
      </section>
  )
};

export default SectionNavigationList;
