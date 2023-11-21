import AboutDocumentsForFuneral from '../../images/DocumentsForFuneral/DocumentsForFuneralPage.jpg'
import s from './SectionAboutDocumentsForFuneral.module.scss'

const SectionAboutDocumentsForFuneral = () => {
    return (
      <section className={s.sectionAboutDocumentsForFuneral}>
        <div className={'container ' + s.DocumentsForFuneral__container}>

                <img className={s.aboutDocumentsForFuneral__decoration} loading="lazy" src={AboutDocumentsForFuneral} alt="AboutDocumentsForFuneralDecoration" />
                
                <p className={s.aboutDocumentsForFuneral__description}>Оформлення похорону і підготовка документів померлого це тривалий і скрупульозний процес, який якщо зробити не правильно, вперше може принести безліч проблем з переоформленням. “Профритуал” займається оформленням документів <b>для похорону понад 17 років</b>, і ми знаємо як у найкоротші терміни оформити документацію для похорону.</p>

                <p className={s.aboutDocumentsForFuneral__description}><b>Організація похорону зазвичай включає:</b> юридичне оформлення похорону, а саме збір всіх необхідних документів для похорону. Медичне свідоцтво про смерть оформляється в морзі (або поліклініці) на підставі:</p>

                <ul className={s.aboutDocumentsForFuneral__list}>
                    <li><p className={s.aboutDocumentsForFuneral__description}>Паспорти померлого;</p></li>
                    <li><p className={s.aboutDocumentsForFuneral__description}>Амбулаторна картка померлого;</p></li>
                    <li><p className={s.aboutDocumentsForFuneral__description}>Поліса медичного страхування;</p></li>
                    <li><p className={s.aboutDocumentsForFuneral__description}>Паспорт заявника.</p></li>
                </ul>
        
        </div>
      </section>
  )
};

export default SectionAboutDocumentsForFuneral;
