import { FaPhoneAlt } from 'react-icons/fa';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import AboutRitualAgent from '../../images/AboutRitualAgent/ritualAgentSectionBanner.jpg';
import s from './SectionAboutRitualAgent.module.scss';

const SectionAboutRitualAgent = () => {
  return (
    <section className={s.sectionAboutRitualAgent}>
      <div className={'container ' + s.aboutRitualAgent__container}>
        <img
          className={s.aboutRitualAgent__decoration}
          loading="lazy"
          src={AboutRitualAgent}
          alt="advantages__decoration"
        />

        <p style={{ marginBottom: '10px' }} className="description">
          У складний момент втрати важливо мати поруч тих, хто розуміє й
          підтримує. Наші фахівці швидко реагують на виклик і готові приїхати до
          вас у найкоротший термін. Ми беремо на себе всі організаційні турботи,
          щоб ви могли зосередитися на найголовнішому — гідному прощанні з
          близькою людиною.
        </p>
        <p style={{ marginBottom: '10px' }} className="description">
          Досвід, тактовність та людяність нашої команди — це підтримка, на яку
          можна покластися в найважчі хвилини.
        </p>

        <h2 style={{ marginBottom: '10px' }} className="title">
          Послуги ритуального агента:
        </h2>

        <ul className="list">
          <li className="listItem">
            Виїзд агента 24/7
          </li>
          <li className="listItem">
            Допомога з оформленням документів та вирішенням бюрократичних питань
          </li>
          <li className="listItem">
            Допомога близьким в підборі місця поховання або кремації
          </li>
          <li className="listItem">
            Вибір труни, хрестів, вінків, квітів, ритуальної атрибутики
          </li>
          <li className="listItem">
            Організація транспортування тіла (включно з послугою «Вантаж 200»)
          </li>
          <li className="listItem">
            Проведення церемонії відповідно до релігійних традицій
          </li>
          <li className="listItem">
            Виклик священника — за бажанням родини
          </li>
          <li className="listItem">
            За потреби — медична та психологічна підтримка
          </li>
        </ul>

        <h2 style={{ marginBottom: '10px' }} className="title">
          Асортимент:
        </h2>

        <ul className="list">
          <li className="listItem">
            Труни: від економ-класу до елітних, також індивідуальне виготовлення
          </li>
          <li className="listItem">
            Хрести, вінки (живі та штучні), композиції на труну, інші ритуальні
            товари
          </li>
        </ul>

        <h2 style={{ marginBottom: '10px' }} className="title">
          Вартість послуг:
        </h2>

        <ul className="list">
          <li className="listItem">
            Ми пропонуємо гнучкі пакети — ціни доступні для різних категорій
            клієнтів.
          </li>
        </ul>

         <h2 style={{ marginBottom: '10px' }} className="title">
          <FaPhoneAlt className={s.phoneIcon} /> Звертайтесь — ми готові
          допомогти в будь-який час
        </h2>

        <SectionNeedHelp />

        <h2 style={{ marginTop: '10px' }} className="title">
          Наші співробітники приїдуть дуже швидко!
        </h2>

        <p style={{ marginBottom: '10px' }} className="description">
          Працюємо з 2005 року. У важкі моменти важливо не залишатися наодинці.
          Наші ритуальні агенти оперативно приїдуть на виклик, візьмуть на себе
          всі організаційні турботи та допоможуть провести прощання з гідністю і
          повагою.
        </p>
      </div>
    </section>
  );
};

export default SectionAboutRitualAgent;
