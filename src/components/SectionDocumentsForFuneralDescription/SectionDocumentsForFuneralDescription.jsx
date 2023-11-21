import s from './SectionDocumentsForFuneralDescription.module.scss'

const SectionDocumentsForFuneralDescription = () => {
    return (
      <section className={s.sectionDocumentsForFuneralDescription}>
        <div className={'container ' + s.DocumentsForFuneral__container}>
    
                <h2 className={s.documentsForFuneralDescription__title}>При оформленні похорону, на етапі отримання медичного свідоцтва про смерть, перевірте:</h2>

                <ul className={s.documentsForFuneralDescription__list}>
                    <li><p className={s.documentsForFuneralDescription__description}>Правильність написання дати, видачі документа та дати смерті.</p></li>
                    <li><p className={s.documentsForFuneralDescription__description}>Відповідність паспортним даним записів, внесених до медичного свідоцтва про смерть.</p></li>
                    <li><p className={s.documentsForFuneralDescription__description}>Наявність запису про місце смерті (наприклад: м. Київ).</p></li>
                    <li><p className={s.documentsForFuneralDescription__description}>Наявність на зворотному боці лікарського свідоцтва про смерть круглого друку лікувального закладу, підпис, прізвище та посаду лікаря, який видає документ та вказівку діагнозу.</p></li>
                </ul>
                        
                <h2 className={s.documentsForFuneralDescription__title}>Виправлення у медичному свідоцтві про смерть не допускаються.</h2>

                <p className={s.documentsForFuneralDescription__description}>Медичне свідоцтво про смерть оформляється районною поліклінікою лише за умови, що від дня останнього звернення померлого до лікаря пройшло не більше 10 днів. У решті випадків медичне свідоцтво про смерть оформляється після паталого-анатомічного чи судово-медичного дослідження у морзі.</p>

                <h2 className={s.documentsForFuneralDescription__title}>Клієнти, які замовляли послугу оформлення документів, так само цікавилися:</h2>

                <ul className={s.documentsForFuneralDescription__list}>
                    <li><a className={s.documentsForFuneralDescription__link} href="/">Послугою транспорту</a></li>
                    <li><a className={s.documentsForFuneralDescription__link} href="/">Ритуальними вінками</a></li>
                    <li><a className={s.documentsForFuneralDescription__link} href="/">Поминальним обідом</a></li>
                    <li><a className={s.documentsForFuneralDescription__link} href="/">Відспівування померлого священиком</a></li>
                </ul>
        </div>
      </section>
  )
};

export default SectionDocumentsForFuneralDescription;
