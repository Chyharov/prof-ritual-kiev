import { Link } from 'react-router-dom';
import BntMoreDetail from 'components/BntMoreDetail/BntMoreDetail';
import s from './SectionOrganizationFuneralServices.module.scss'



const SectionOrganizationFuneralServices = () => {
    return (
      <section className={s.sectionOrganizationFuneralServices}>
        <div className={'container ' + s.funeralServices__container}>
          <div loading="lazy" className={s.funeralServices__decoration}>
          </div>
                
          <div className={s.organizationFuneralServicesInfoContainer}>
              <h2 className={s.funeralServices__title}>Організація ритуальних послуг</h2>
                
              <p className={s.funeralServices__description}>Починаючи з оформлення документів і закінчуючи поминальним обідом. Такий стрес може негативно вплинути на здоров’я людини. «Проф Ритуал» більше 10 років працює у сфері ритуальних послуг і ми знаємо як організувати похорон за <b>доступною для вас ціною.</b></p>
                
              <p className={s.funeralServices__description} style={{marginBottom: '35px'}}>Ми працюємо з усіма клієнтами і знаходимо їм найкращий варіант. Ми співпрацюємо з <b>десятками ресторанів</b>, маємо власний транспорт, тому ціна наших ритуальних послуг завжди залишається низькою і доступною для всіх.</p>

              <Link to="/ritualservices"><BntMoreDetail /></Link>
          </div>
                
        </div>
      </section>
  )
};

export default SectionOrganizationFuneralServices;
