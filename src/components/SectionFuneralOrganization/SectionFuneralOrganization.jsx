import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import FuneralOrganization from '../../images/FuneralOrganization/FuneralOrganization.jpg'
import s from './SectionFuneralOrganization.module.scss'


const SectionFuneralOrganization = () => {
    return (
      <section className={s.sectionFuneralOrganization}>
        <div className={'container ' + s.funeralOrganization__container}>
                
            <img className={s.funeralOrganization__decoration} loading="lazy" src={FuneralOrganization} alt="funeralOrganization__decoration" />
                
            <h2 style={{marginBottom: '10px'}} className='title'>Організатор похорон Київ та Київська область</h2>

            <p style={{marginBottom: '10px'}} className='description'>Пріоритетним напрямком діяльності нашої компанії є якісна організація похорону київ «під ключ» – від збору документів у відповідних інстанціях, необхідних для проведення похорону до самого похоронного обряду та поминальної трапези.</p>

            <blockquote style={{marginBottom: '10px'}} className='blockquote'>
                Наша компанія займається організацією похорону різних цінових категорій – від скромних економних обрядів до <b>VIP-похоронів</b>, які можуть включати супровід машинами ДАІ. Цінова політика нашого агентства дозволяє нам підтримувати широкий спектр цін, що робить наші послуги доступними для більшості верств населення.
            </blockquote>
                
            <h2 style={{marginBottom: '10px'}} className='title'>Професійна допомога від компанії ««Проф Ритуал»»</h2>
            
            <p style={{marginBottom: '10px'}} className='description'>У важкі моменти життя, коли у вас немає часу, сил і бажання займатися формальностями, наш похоронний агент готовий взяти всі турботи щодо організації похорону на себе, а все, що від вас вимагатиметься — зв’язатися з ним і висловити свої побажання та повідомити всі необхідні подробиці.</p>

            <p style={{marginBottom: '10px'}} className='description'><b>Ми пропонуємо широкий спектр послуг</b>, пов’язаний з організацією похорону, включаючи вирішення питань транспортування тіла та близьких покійного, вирішення питань з місцем поховання або кремації, проведення похоронної церемонії відповідно до релігійних традицій, яких померлий дотримувався, проведення поминальної трапези. У випадку, якщо ви викличете нашого агента відразу після виявлення тіла, всі необхідні дзвінки до поліції, швидку допомогу наш співробітник також візьме на себе.</p>
                
              <SectionNeedHelp />
          
            <h2 style={{marginTop: '10px'}} className='title'>Довіртеся нам у скрутну хвилину</h2>
            
            <p style={{marginBottom: '10px'}} className='description'>Наша компанія має <b>цілодобову довідкову службу</b>, зателефонувавши в яку в будь-який час ви зможете отримати грамотні та кваліфіковані відповіді на всі питання.</p>
                
            <h2 style={{marginBottom: '10px'}} className='title'>Безкоштовний виїзд нашого агента для оформлення похорону</h2>

            <p style={{marginBottom: '10px'}} className='description'>Таке здійснюється у будь-який час дня та ночі. У разі потреби ми надаємо медичну та психологічну допомогу. Ви можете покластися на нас і в таких делікатних питаннях, як вирішення бюрократичних питань, пов’язаних із заповітом покійного.</p>    
        
            <p style={{marginBottom: '10px'}} className='description'>Крім того, наша компанія має власну виробничу і транспортну базу, що значно заощадить ваш час на пошук і вибір ритуального приладдя та супутніх товарів. Також ми надаємо жалобну залу для проведення поминальної церемонії.</p>    
          
        </div>
      </section>
  )
};

export default SectionFuneralOrganization;
