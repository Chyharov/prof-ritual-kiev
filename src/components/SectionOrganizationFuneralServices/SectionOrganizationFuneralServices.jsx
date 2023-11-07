import OrganizationFuneral from '../../images/OrganizationFuneralServices/OrganizationFuneralServices.jpg'
import BntMoreDetail from 'components/BntMoreDetail/BntMoreDetail';
import s from './SectionOrganizationFuneralServices.module.scss'



const SectionOrganizationFuneralServices = () => {
    return (
      <section className={s.sectionOrganizationFuneralServices}>
        <div className={'container ' + s.funeralServices__container}>
                <img className={s.funeralServices__decoration} loading="lazy" src={OrganizationFuneral} alt="hero__decoration" />
                
                <h2 className={s.funeralServices__title}>Організація ритуальних послуг</h2>
                
                <p className={s.funeralServices__description}>Починаючи з оформлення документів і закінчуючи поминальним обідом. Такий стрес може негативно вплинути на здоров’я людини. Профритуал більше 10 років працює у сфері ритуальних послуг і ми знаємо як організувати похорон за <b>доступною для вас ціною.</b></p>
                
                <p className={s.funeralServices__description} style={{marginBottom: '25px'}}>Ми працюємо з усіма клієнтами і знаходимо їм найкращий варіант. Ми співпрацюємо з <b>десятками ресторанів</b>, маємо власний транспорт, тому ціна наших ритуальних послуг завжди залишається низькою і доступною для всіх.</p>

                <BntMoreDetail />
        </div>
      </section>
  )
};

export default SectionOrganizationFuneralServices;
