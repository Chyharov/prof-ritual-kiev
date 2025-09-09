import { Link } from 'react-router-dom';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import AboutCremation from '../../images/Cremation/Cremation.jpg';
import s from './SectionAboutCremation.module.scss';

const crossesImgListArray = [
  {
    id: 1,
    src: require('../../images/urnsForAshes/SectionAboutCremationImage1.jpg'),
    alt: 'Зображення 1',
  },
  {
    id: 2,
    src: require('../../images/urnsForAshes/SectionAboutCremationImage2.png'),
    alt: 'Зображення 2',
  }
  // {
  //   id: 2,
  //   src: require('../../images/urnsForAshes/urnsForAshes2.jpg'),
  //   alt: 'Зображення 2',
  // },
  // {
  //   id: 3,
  //   src: require('../../images/urnsForAshes/urnsForAshes3.jpg'),
  //   alt: 'Зображення 3',
  // },
  // {
  //   id: 4,
  //   src: require('../../images/urnsForAshes/urnsForAshes4.jpg'),
  //   alt: 'Зображення 4',
  // },
  // {
  //   id: 5,
  //   src: require('../../images/urnsForAshes/urnsForAshes5.jpg'),
  //   alt: 'Зображення 5',
  // },
  // {
  //   id: 6,
  //   src: require('../../images/urnsForAshes/urnsForAshes6.jpg'),
  //   alt: 'Зображення 6',
  // },
  // {
  //   id: 7,
  //   src: require('../../images/urnsForAshes/urnsForAshes7.jpg'),
  //   alt: 'Зображення 7',
  // },
  // {
  //   id: 8,
  //   src: require('../../images/urnsForAshes/urnsForAshes8.jpg'),
  //   alt: 'Зображення 8',
  // },
];

const SectionAboutCremation = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = id => {
    setSelectedImage(crossesImgListArray.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  return (
    <section className={s.sectionAboutCremation}>
      <div className={'container ' + s.aboutCremation__container}>
        <img
          className={s.aboutCremation__decoration}
          loading="lazy"
          src={AboutCremation}
          alt="hero__decoration"
        />

        <p style={{ marginBottom: '10px' }} className="description">
          Кремація — це сучасна та гідна форма прощання. Багато родин в Україні обирають її. Ми забезпечуємо повний супровід: від документів до передачі урни з прахом, з повагою до побажань родини.
        </p>

        <h2 style={{ marginBottom: '10px' }} className="title">
          Як виконується кремація у місті Київ
        </h2>

        <p style={{ marginBottom: '10px' }} className="description">
          Кремування – це процес перетворення тіла померлого на порох, що проводиться за бажанням родичів або відповідно до попереднього бажання померлої особи. Ця процедура дозволяє уникнути традиційного поховання та забезпечити подальше зберігання праху у спеціальній урні.
        </p>

        <h2 style={{ marginBottom: '10px' }} className="title">Необхідні документи для кремації</h2>

        <p style={{ marginBottom: '10px' }} className="description">
          Для проведення процедури кремації важливо мати наступні документи:
        </p>

        <ul className={s.aboutCremation__list}>
          <li className={s.aboutCremation__list}>
            <p style={{ marginBottom: '10px' }} className="description">
              Свідоцтво про смерть – офіційний документ, що підтверджує факт смерті.
            </p>
          </li>
          <li className={s.aboutCremation__list}>
            <p style={{ marginBottom: '10px' }} className="description">
              Корінець довідки про причину смерті – для юридичної та медичної фіксації причини смерті.
            </p>
          </li>
          <li className={s.aboutCremation__list}>
            <p style={{ marginBottom: '10px' }} className="description">
              Паспорт замовника послуги – особа, яка замовляє послугу, повинна надати свої особисті дані для оформлення.
            </p>
          </li>
          <li className={s.aboutCremation__list}>
            <p style={{ marginBottom: '10px' }} className="description">
             Урну з прахом може отримати лише та особа, на яку оформлювалася послуга кремації.
            </p>
          </li>
        </ul>

        <h2 style={{ marginBottom: '10px' }} className="title">Чому важлива точність документів?</h2>

        <p style={{ marginBottom: '10px' }} className="description">Кремація – це процедура з чітко регламентованими вимогами щодо документації. Будь-яка помилка у документах може стати причиною відмови в обслуговуванні. Звернувшись до «Проф Ритуал», ви можете бути впевнені, що всі документи будуть оформлені без помилок, а процес кремації пройде без зайвих труднощів.</p>

        <p style={{ marginBottom: '10px' }} className="description">
          Документація дуже педантична, при помилці на вас може чекати відмова.
          Звернувшись за послугою кремації в <b>«Проф Ритуал»</b> ви уникнете
          такого неприємного сюрпризу.
        </p>

        <SectionNeedHelp />

        <h2 style={{ marginBottom: '10px' }} className="title">Послуги кремації від «Проф Ритуал»: комфорт та зручність у кожному етапі</h2>

        <p style={{ marginBottom: '10px' }} className="description">Після оформлення всіх необхідних документів ви стаєте в чергу для кремації та маєте прибути в крематорій у зазначений час. Але ми піклуємося про те, щоб процес був максимально комфортним та без зайвих турбот.</p>
        
        <p style={{ marginBottom: '10px' }} className="description"><b>У нас є своя комфортна зала для прощання</b>, де ви можете попрощатися з близькою людиною без черг, в атмосфері спокою та затишку. Це місце для останньої зустрічі, де ви можете бути з родиною та друзями в комфортних умовах, не поспішати і не переживати через затримки.</p>

        <h2 style={{ marginBottom: '10px' }} className="title">Додаткові послуги</h2>
        
        <p style={{ marginBottom: '10px' }} className="description">«Проф Ритуал» пропонує широкий спектр додаткових послуг для організації кремації та ритуалу:</p>

        <ul className='list'>
          <li className='listItem'><b>Оформлення необхідних документів</b> – ми допоможемо вам правильно оформити всі документи для кремації та інших ритуальних послуг.</li>
          <li className='listItem'><b>Комфортні холодильні камери</b> – зберігання померлого до моменту кремації в наших сучасних холодильних камерах.</li>
          <li className='listItem'><b>Підготовка покійного до прощання</b> – професійне оброблення та підготовка тіла до прощання, щоб воно виглядало належним чином.</li>
          <li className='listItem'><b>Великий асортимент трун</b> – вибір різноманітних моделей та стилів трун для будь-яких вимог і побажань.</li>
          <li className='listItem'><b>Ритуальна атрибутика</b> – великий асортимент ритуальних вінків, квітів, урн для праху та інших атрибутів для проведення обряду.</li>
          <li className='listItem'><b>Читання ритуалу</b> – виконання обряду за вашим бажанням.</li>
          <li className='listItem'><b>Утилізація вінків/кошиків</b> – забезпечуємо коректну утилізацію всіх ритуальних атрибутів після обряду.</li>
          <li className='listItem'><b>Перевезення померлого/катафалк</b> – комфортний транспорт для перевезення померлого до місця кремації.</li>
          <li className='listItem'><b>Поминальний обід</b> – організація поминального обіду після ритуалу.</li>
        </ul>

        <h2 style={{ marginBottom: '10px' }} className="title">Чому варто обрати «Проф Ритуал»?</h2>

        <p style={{ marginBottom: '10px' }} className="description">Ми гарантуємо, що весь процес кремації пройде без зайвих неприємностей, і ви отримаєте всі необхідні послуги в одному місці. Ви завжди можете викликати нашого агента абсолютно безкоштовно для консультації та допомоги у виборі найкращого варіанту кремації для вашої ситуації.</p>
        
        <h2 style={{ marginBottom: '10px' }} className="title">
          Наші зали для прощання
        </h2>

        <ul
          style={{ marginBottom: '10px' }}
          className={s.aboutCremation__listPictures}
        >
          {crossesImgListArray.map(image => (
            <li className={s.aboutCremation__itemPictures} key={image.id}>
              <img
                className={s.aboutCremation__img}
                loading="lazy"
                id={image.id}
                src={image.src}
                alt={image.alt}
                onClick={() => openModal(image.id, image.src, image.alt)}
              />
            </li>
          ))}
        </ul>

        <h2 style={{ marginBottom: '10px' }} className="title">
          Клієнти, які замовляли послугу кремації, так само цікавилися:
        </h2>

        <ul style={{ marginBottom: '10px' }} className={s.aboutCremation__list}>
          <li className={s.aboutCremation__list}>
            <Link to="/hearse" className="links">
              Послуг транспорту
            </Link>
          </li>
          <li className={s.aboutCremation__list}>
            <Link to="/memorialdinners" className="links">
              Поминальним обідом у Києві
            </Link>
          </li>
          <li className={s.aboutCremation__list}>
            <Link to="/requiemservicebypriest" className="links">
              Бригадою для винесення тіла померлого
            </Link>
          </li>
          <li className={s.aboutCremation__list}>
            <Link to="/sanitationofpremises" className="links">
              Дезобробкою приміщення
            </Link>
          </li>
        </ul>

        {modalOpen && selectedImage && (
          <Modal
            selectedImage={selectedImage}
            arrayPhoto={crossesImgListArray}
            setSelectedImage={setSelectedImage}
            setModalOpen={setModalOpen}
          />
        )}
      </div>
    </section>
  );
};

export default SectionAboutCremation;
