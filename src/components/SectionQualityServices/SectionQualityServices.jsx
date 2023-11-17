import s from './SectionQualityServices.module.scss'

const SectionQualityServices = () => {
    return (
      <section className={s.sectionQualityServices}>
        <div className={'container ' + s.qualityServices__container}>
            
            <h2 className={s.qualityServices__title}>Наші співробітники приїдуть дуже швидко!</h2>
                
            <p className={s.qualityServices__description}>Ми надаємо якісні послуги протягом 17 років, і наш досвід, тактовність та делікатність дозволяють нам зменшувати горе людей, які втратили своїх близьких. Взявши на себе більшість турбот з похорону, ми залишаємо час для найголовнішого — для прощання з близьким.</p>
        
            <p className={s.qualityServices__description}>Кожен з нас розуміє, що у випадку, коли в будинку трапилося лихо, <b>кваліфікована допомога</b> має бути надана негайно. Ритуальний агент від нашої компанії зможе виїхати на ваше прохання якнайшвидше і приступити до надання професійної допомоги та підтримки у скрутну хвилину.</p>
        
        </div>
      </section>
  )
};

export default SectionQualityServices;
