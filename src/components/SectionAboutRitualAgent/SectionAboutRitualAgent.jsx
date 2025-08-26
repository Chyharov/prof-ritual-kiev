import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import AboutRitualAgent from '../../images/AboutRitualAgent/AboutRitualAgent.jpg';
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

        <h2 style={{ marginBottom: '10px' }} className="title">
          Послуги ритуального агента
        </h2>

        <p style={{ marginBottom: '10px' }} className="description">
          У складний момент ми беремо на себе всі турботи, пов’язані з
          організацією похорону. Наш ритуальний агент працює цілодобово та надає
          безкоштовну первинну консультацію.
        </p>

        <h2 style={{ marginBottom: '10px' }} className="title">
          Послуги ритуального агента
        </h2>

        <ul className={s.sectionAboutRitualAgent__list}>
          <li className={s.sectionAboutRitualAgent__listItem}>
            Виїзд агента 24/7
          </li>
          <li className={s.sectionAboutRitualAgent__listItem}>
            Допомога з оформленням документів та вирішенням бюрократичних питань
          </li>
          <li className={s.sectionAboutRitualAgent__listItem}>
            Підбір місця поховання або кремації
          </li>
          <li className={s.sectionAboutRitualAgent__listItem}>
            Вибір труни, хрестів, вінків, квітів, ритуальної атрибутики
          </li>
          <li className={s.sectionAboutRitualAgent__listItem}>
            Організація транспортування тіла (включно з послугою «Вантаж 200»)
          </li>
          <li className={s.sectionAboutRitualAgent__listItem}>
            Проведення церемонії відповідно до релігійних традицій
          </li>
          <li className={s.sectionAboutRitualAgent__listItem}>
            Виклик священника — за бажанням родини
          </li>
          <li className={s.sectionAboutRitualAgent__listItem}>
            За потреби — медична та психологічна підтримка
          </li>
        </ul>

        <h2 style={{ marginBottom: '10px' }} className="title">
          Асортимент:
        </h2>

        <ul className={s.sectionAboutRitualAgent__list}>
          <li className={s.sectionAboutRitualAgent__listItem}>
            Труни: від економ-класу до елітних, також індивідуальне виготовлення
          </li>
          <li className={s.sectionAboutRitualAgent__listItem}>
            Хрести, вінки (живі та штучні), композиції на труну, інші ритуальні
            товари
          </li>
        </ul>

        <h2 style={{ marginBottom: '10px' }} className="title">
          Вартість послуг:
        </h2>
        <p style={{ marginBottom: '10px' }} className="description">
          Ми пропонуємо гнучкі пакети — ціни доступні для різних категорій
          клієнтів.
        </p>
        <p style={{ marginBottom: '10px' }} className="description">
          <FaPhoneAlt className={s.phoneIcon} /> Звертайтесь — ми готові
          допомогти в будь-який час
        </p>

        <SectionNeedHelp />

        <h2 style={{ marginTop: '10px' }} className="title">
          Наші співробітники приїдуть дуже швидко!
        </h2>

        <p style={{ marginBottom: '10px' }} className="description">
          Ми надаємо якісні послуги протягом 17 років, і наш досвід, тактовність
          та делікатність дозволяють нам зменшувати горе людей, які втратили
          своїх близьких. Взявши на себе більшість турбот з похорону, ми
          залишаємо час для найголовнішого — для прощання з близьким.
        </p>

        <p className="description">
          Кожен з нас розуміє, що у випадку, коли в будинку трапилося лихо,{' '}
          <b>кваліфікована допомога</b> має бути надана негайно. Ритуальний
          агент від нашої компанії зможе виїхати на ваше прохання якнайшвидше і
          приступити до надання професійної допомоги та підтримки у скрутну
          хвилину.
        </p>
      </div>
    </section>
  );
};

export default SectionAboutRitualAgent;
