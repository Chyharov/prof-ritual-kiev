import s from './SectionAboutCompany.module.scss'

const SectionAboutCompany = () => {
    return (
      <section className={s.sectionAboutCompany}>
        <div className={'container ' + s.aboutCompany__container}>
          <div className={s.aboutCompany__descriptionContainer}>
            <h2 className={s.aboutCompany__descriptionTitle}>Проф Ритуал</h2>
            <p className={s.aboutCompany__descriptionTitleDesc}>ритуальні послуги</p>
          </div>
          <div className={s.aboutCompany__storyContainer}>
            <h2 className={s.aboutCompany__title}>Про компанію</h2>
                <p className={s.aboutCompany_description} style={{marginBottom: '12px'}}>Похоронне бюро «Проф Ритуал» надає ритуальні послуги у місті Київ вже <b>понад 20 років.</b> Ми надаємо усі можливі ритуальні послуги за найдоступнішими цінами у місті Київ. Гарантуємо якісний та професійний підхід, завжди виконуємо послуги вчасно та за доступними цінами.</p>

                <p className={s.aboutCompany_description}>Чудово розуміємо що похорон це той день, коли ви відпускаєте близьку вам людину. Цей день повинен пройти гідно та без зайвого стресу, котрий багато хто відчуває якщо наважується зайнятися організацією похорону сам. <b>Звернувшись до нашого агента,</b> ви отримаєте детальну консультацію та прозорий розрахунок вартості послуг. Ми дбаємо про те, щоб кожен клієнт відчував підтримку й вспевненість у складний час</p>
          </div>
        </div>
      </section>
  )
};

export default SectionAboutCompany;
