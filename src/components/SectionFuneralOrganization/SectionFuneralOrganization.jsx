import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import FuneralOrganization from '../../images/FuneralOrganization/FuneralOrganizationTest.jpg';
import FuneralOrganizationPictureListItem from '../../images/FuneralOrganization/FuneralOrganizationPictureListItem.jpg';
import FuneralOrganizationPictureListItem2 from '../../images/FuneralOrganization/FuneralOrganizationPictureListItem2.jpg';
import FuneralOrganizationPictureListItem3 from '../../images/FuneralOrganization/FuneralOrganizationPictureListItem3.jpg';
import FuneralOrganizationPictureListItem4 from '../../images/FuneralOrganization/FuneralOrganizationPictureListItem4.jpg';
import FuneralOrganizationPictureListItem5 from '../../images/FuneralOrganization/FuneralOrganizationPictureListItem5.jpg';
import FuneralOrganizationPictureListItem6 from '../../images/FuneralOrganization/FuneralOrganizationPictureListItem6.jpg';
import s from './SectionFuneralOrganization.module.scss'


const SectionFuneralOrganization = () => {
    return (
      <section className={s.sectionFuneralOrganization}>
        <div className={'container ' + s.funeralOrganization__container}>
                
            <img className={s.funeralOrganization__pictureListItemImg} loading="lazy" src={FuneralOrganization} alt="funeralOrganization__decoration" />
                
            <h2 style={{marginBottom: '10px'}} className='title'>Організація похорону в Києві та Київській області</h2>

          <p style={{ marginBottom: '10px' }} className='description'>від похоронного бюро «Проф Рітуал»</p>

          <p style={{ marginBottom: '10px' }} className='description'>Похоронне бюро «ПрофРітуал» з 2005 року надає повний спектр ритуальних послуг у Києві та Київській області. Ми спеціалізуємося на комплексній організації похорону під ключ — від оформлення документів до проведення церемонії прощання та поминальної трапези.</p>
          
          <p style={{ marginBottom: '10px' }} className='description'>Наші послуги охоплюють поховання у різних цінових категоріях — від доступних економ-варіантів до розширених індивідуальних рішень. Гнучка цінова політика дозволяє нам допомагати сім’ям із різними потребами та можливостями.</p>

          <h2 style={{ marginBottom: '10px' }} className='title'>Що ми пропонуємо:</h2>
          
          <ul style={{ marginBottom: '20px' }} className="list">
            <li className="listItem">Оперативний виїзд ритуального агента;</li>
            <li className="listItem">Оформлення документів у відповідних інстанціях;</li>
            <li className="listItem">Організацію транспортування померлого;</li>
            <li className="listItem">Вибір та підготовку місця поховання або кремації;</li>
            <li className="listItem">Проведення похоронної церемонії з урахуванням релігійних традицій;</li>
            <li className="listItem">Організацію поминальної трапези;</li>
            <li className="listItem">Декор місця захоронення та прощання;</li>
            <li className="listItem">Професійна підтримка в складний момент;</li>
            <li className="listItem">Ми розуміємо, наскільки важко приймати рішення у момент втрати. Саме тому наші агенти беруть на себе всі організаційні клопоти. Вам достатньо зателефонувати — і ми одразу розпочнемо роботу, надаючи повний супровід на кожному етапі.</li>
          </ul>

          <SectionNeedHelp />
          
            <h2 style={{marginTop: '10px'}} className='title'>Довіртеся нам у скрутну хвилину</h2>
            
            <p style={{marginBottom: '10px'}} className='description'>Наша компанія має <b>цілодобову довідкову службу</b>, зателефонувавши в будь-який час, ви зможете отримати грамотні та кваліфіковані відповіді на всі питання.</p>
          
          <h2 style={{ marginBottom: '10px' }} className='title'>Декор місця прощання та захоронення</h2>

          <ul className={s.funeralOrganization__pictureList}>
            <li className={s.funeralOrganization__pictureListItem}>
              <img className={s.funeralOrganization__pictureListItemImg} src={FuneralOrganizationPictureListItem} alt="FuneralOrganizationPictureListItem" />
            </li>
            <li className={s.funeralOrganization__pictureListItem}>
              <img className={s.funeralOrganization__pictureListItemImg} src={FuneralOrganizationPictureListItem2} alt="FuneralOrganizationPictureListItem2" />
            </li>
            <li className={s.funeralOrganization__pictureListItem}>
              <img className={s.funeralOrganization__pictureListItemImg} src={FuneralOrganizationPictureListItem3} alt="FuneralOrganizationPictureListItem3" />
            </li>
            <li className={s.funeralOrganization__pictureListItem}>
              <img className={s.funeralOrganization__pictureListItemImg} src={FuneralOrganizationPictureListItem4} alt="FuneralOrganizationPictureListItem4" />
            </li>
            <li className={s.funeralOrganization__pictureListItem}>
              <img className={s.funeralOrganization__pictureListItemImg} src={FuneralOrganizationPictureListItem5} alt="FuneralOrganizationPictureListItem5" />
            </li>
            <li className={s.funeralOrganization__pictureListItem}>
              <img className={s.funeralOrganization__pictureListItemImg} src={FuneralOrganizationPictureListItem6} alt="FuneralOrganizationPictureListItem6" />
            </li>
          </ul>
        </div>
      </section>
  )
};

export default SectionFuneralOrganization;
