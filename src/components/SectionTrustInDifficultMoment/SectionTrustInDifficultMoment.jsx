import s from './SectionTrustInDifficultMoment.module.scss'

const SectionTrustInDifficultMoment = () => {
    return (
      <section className={s.sectionTrustInDifficultMoment}>
        <div className={'container ' + s.trustInDifficultMoment__container}>

            <h2 className={s.trustInDifficultMoment__title}>Довіртеся нам у скрутну хвилину</h2>
            
            <p className={s.trustInDifficultMoment__description}>Наша компанія має <b>цілодобову довідкову службу</b>, зателефонувавши в яку в будь-який час ви зможете отримати грамотні та кваліфіковані відповіді на всі питання.</p>
                
            <h2 className={s.trustInDifficultMoment__title}>Безкоштовний виїзд нашого агента для оформлення похорону</h2>

            <p className={s.trustInDifficultMoment__description}>Таке здійснюється у будь-який час дня та ночі. У разі потреби ми надаємо медичну та психологічну допомогу. Ви можете покластися на нас і в таких делікатних питаннях, як вирішення бюрократичних питань, пов’язаних із заповітом покійного.</p>    
        
            <p className={s.trustInDifficultMoment__description}>Крім того, наша компанія має власну виробничу і транспортну базу, що значно заощадить ваш час на пошук і вибір ритуального приладдя та супутніх товарів. Також ми надаємо жалобну залу для проведення поминальної церемонії.</p>    
        </div>
      </section>
  )
};

export default SectionTrustInDifficultMoment;
