import { Link } from 'react-router-dom';
import AboutDocumentsForFuneral from '../../images/DocumentsForFuneral/DocumentsForFuneralPage.jpg'
import s from './SectionAboutDocumentsForFuneral.module.scss'

const SectionAboutDocumentsForFuneral = () => {
    return (
      <section className={s.sectionAboutDocumentsForFuneral}>
        <div className={'container ' + s.DocumentsForFuneral__container}>

        <img className={s.aboutDocumentsForFuneral__decoration} loading="lazy" src={AboutDocumentsForFuneral} alt="AboutDocumentsForFuneralDecoration" />
                
        <p style={{marginBottom: '10px'}} className='description'>Оформлення похорону і підготовка документів померлого це тривалий і скрупульозний процес, який якщо зробити не правильно, вперше може принести безліч проблем з переоформленням. “Профритуал” займається оформленням документів <b>для похорону понад 17 років</b>, і ми знаємо як у найкоротші терміни оформити документацію для похорону.</p>

        <p style={{marginBottom: '10px'}} className='description'><b>Організація похорону зазвичай включає:</b> юридичне оформлення похорону, а саме збір всіх необхідних документів для похорону. Медичне свідоцтво про смерть оформляється в морзі (або поліклініці) на підставі:</p>

          <ul style={{marginBottom: '10px'}} className='list'>
            <li><p style={{marginBottom: '10px'}} className='description'>Паспорти померлого;</p></li>
            <li><p style={{marginBottom: '10px'}} className='description'>Амбулаторна картка померлого;</p></li>
            <li><p style={{marginBottom: '10px'}} className='description'>Поліса медичного страхування;</p></li>
            <li><p style={{marginBottom: '10px'}} className='description'>Паспорт заявника.</p></li>
          </ul>
        
          
        <h2 style={{marginBottom: '10px'}} className='title'>При оформленні похорону, на етапі отримання медичного свідоцтва про смерть, перевірте:</h2>

          <ul className='list'>
            <li><p style={{marginBottom: '10px'}} className='description'>Правильність написання дати, видачі документа та дати смерті.</p></li>
            <li><p style={{marginBottom: '10px'}} className='description'>Відповідність паспортним даним записів, внесених до медичного свідоцтва про смерть.</p></li>
            <li><p style={{marginBottom: '10px'}} className='description'>Наявність запису про місце смерті (наприклад: м. Київ).</p></li>
            <li><p style={{marginBottom: '10px'}} className='description'>Наявність на зворотному боці лікарського свідоцтва про смерть круглого друку лікувального закладу, підпис, прізвище та посаду лікаря, який видає документ та вказівку діагнозу.</p></li>
          </ul>
                        
        <h2 style={{marginBottom: '10px'}} className='title'>Виправлення у медичному свідоцтві про смерть не допускаються.</h2>

        <p style={{marginBottom: '10px'}} className='description'>Медичне свідоцтво про смерть оформляється районною поліклінікою лише за умови, що від дня останнього звернення померлого до лікаря пройшло не більше 10 днів. У решті випадків медичне свідоцтво про смерть оформляється після паталого-анатомічного чи судово-медичного дослідження у морзі.</p>

        <h2 style={{marginBottom: '10px'}} className='title'>Клієнти, які замовляли послугу оформлення документів, так само цікавилися:</h2>

        <ul className='list'>
          <li><Link style={{marginBottom: '10px'}} className='links' to="/hearse">Послугою транспорту</Link></li>
          <li><Link style={{marginBottom: '10px'}} className='links' to="/ritualwreath">Ритуальними вінками</Link></li>
          <li><Link style={{marginBottom: '10px'}} className='links' to="/memorialdinners">Поминальним обідом</Link></li>
          <li><Link style={{marginBottom: '10px'}} className='links' to="/requiemservicebypriest">Відспівування померлого священиком</Link></li>
        </ul>
        </div>
      </section>
  )
};

export default SectionAboutDocumentsForFuneral;
