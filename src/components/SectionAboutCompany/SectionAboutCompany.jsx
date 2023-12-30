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
                <p className={s.aboutCompany_description} style={{marginBottom: '12px'}}>Похоронне бюро Профритуал надає ритуальні послуги у місті Київ вже <b>понад 10 років.</b> Ми надаємо усі можливі ритуальні послуги за найдоступнішими цінами у місті Київ. Ми гарантуємо якісний та професійний підхід, завжди виконуємо послуги під час та за доступними цінами.</p>

                <p className={s.aboutCompany_description}>Ми чудово розуміємо що похорон це той день коли ви відпускаєте близьку вам людину та цей день повинен пройти гідно та без зайвого стресу котрий багато хто відчуває якщо наважується зайнятися організацією похорону сам. <b>Зателефонуйте нашому агенту </b>і дізнайтесь скільки коштуватимуть наші послуги, я вас запевняю, що ціни нижчі ніж у нас ви не знайдете в місті Київ.</p>
          </div>
        </div>
      </section>
  )
};

export default SectionAboutCompany;
