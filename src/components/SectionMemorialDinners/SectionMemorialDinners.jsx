import { Link } from 'react-router-dom';
import MemorialDinnerDecoration from '../../images/MemorialDinners/MemorialDinners.jpg'
import AboutMemorialDinners from '../../images/MemorialDinners/AboutMemorialDinners.jpg'
import s from './SectionMemorialDinners.module.scss'

const SectionMemorialDinners = () => {
    return (
      <section className={s.sectionMemorialDinners}>
        <div className={'container ' + s.memorialDinners__container}>

            <img className={s.memorialDinners__decoration} loading="lazy" src={MemorialDinnerDecoration} alt="MemorialDinnerDecoration" />

            <p style={{marginBottom: '10px'}} className='description'>Невід’ємною частиною та завершальним етапом церемонії поховання є <b>поминки та поминальний обід</b>. Прагнучи забезпечити цілісність і завершеність траурного обряду, похоронне бюро «Проф Ритуал» надає можливість організації поминального обіду у спеціально обладнаних та використовуваних строго відповідно до їх призначення поминальних залах.</p>
                
            <h2 style={{marginBottom: '10px'}} className='title'>Оренда приміщення та залу для поминального обіду.</h2>

            <p style={{marginBottom: '10px'}} className='description'>Кожен із приміщень оформлений <b>у жалобному стилі</b>, оснащений відеотехнікою, що дозволяє організувати трансляцію фільмів та фотографій про покійного, аудіо-супровід. У залах можливе проведення поминок у день похорону, організація поминання <b>на 9-ий та 40-й день</b> від дня смерті покійного, річниці та днів поминання.</p>

            <h2 style={{marginBottom: '10px'}} className='title'>Якість їжі</h2>
            
            <p style={{marginBottom: '10px'}} className='description'>Поминальні зали мають власне кулінарне та пекарне виробництво. Для приготування страв використовується лише відфільтрована вода, що пройшла попереднє очищення. Меню поминальних залів складається з дотриманням релігійних та національних традицій під час проведення поминок.</p>

            <h2 style={{marginBottom: '10px'}} className='title'>Замовити обслуговування поминального обіду</h2>

            <p style={{marginBottom: '10px'}} className='description'>Якщо у Вас виникне необхідність, Ви зможете замовити виїзне обслуговування фахівцями поминальних залів за вказаною вами адресою або за місцем поховання на цвинтарі. Це може бути ваш будинок, або місце, яке ви вважали найприйнятнішим для поминального обіду.</p>

            <h2 style={{marginBottom: '10px'}} className='title'>Наш поминальний зал у районі Деснянський, м. Київ:</h2>

            <img className={s.aboutMemorialDinners__decoration} loading="lazy" src={AboutMemorialDinners} alt="MemorialDinnerDecoration" />

            <h2 style={{marginBottom: '10px'}} className='title'>Клієнти, які замовляли з нами послугу оформлення документів, так само цікавилися:</h2>
                
                <ul className='list'>
                    <li><Link className='links' to="/ritualagent">Виклик агента додому</Link></li>
                    <li><Link className='links' to="/funeralorganization">Організація похоронуу</Link></li>
                    <li><Link className='links' to="/hearse">Транспортом катафалк</Link></li>
                    <li><Link className='links' to="/memorialdinners">Оренда приміщення для поминального обіду</Link></li>
                </ul>
        </div>
      </section>
  )
};

export default SectionMemorialDinners;
