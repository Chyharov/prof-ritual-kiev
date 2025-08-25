import { Link } from 'react-router-dom';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import AboutCremation from '../../images/Cremation/Cremation.jpg'
import s from './SectionAboutCremation.module.scss'

const crossesImgListArray = [
    { id: 1, src: require('../../images/urnsForAshes/urnsForAshes.jpg'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/urnsForAshes/urnsForAshes2.jpg'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/urnsForAshes/urnsForAshes3.jpg'), alt: 'Зображення 3' },
    { id: 4, src: require('../../images/urnsForAshes/urnsForAshes4.jpg'), alt: 'Зображення 4' },
    { id: 5, src: require('../../images/urnsForAshes/urnsForAshes5.jpg'), alt: 'Зображення 5' },
    { id: 6, src: require('../../images/urnsForAshes/urnsForAshes6.jpg'), alt: 'Зображення 6' },
    { id: 7, src: require('../../images/urnsForAshes/urnsForAshes7.jpg'), alt: 'Зображення 7' },
    { id: 8, src: require('../../images/urnsForAshes/urnsForAshes8.jpg'), alt: 'Зображення 8' },
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
                <img className={s.aboutCremation__decoration} loading="lazy" src={AboutCremation} alt="hero__decoration" />
                
                <p style={{marginBottom: '10px'}} className='description'>«Проф Ритуал» надає послуги кремації у місті Київ. Кремація є відносно новою послугою в Україні, але за даними статистики 45% померлих було кремовано у місті Київ минулого року. Кремація це складний процес, до якого потрібно правильно підготуватися, щоби все пройшло добре.</p>

                <h2 style={{marginBottom: '10px'}} className='title'>Як виконується кремація у місті Київ</h2>

                <p style={{marginBottom: '10px'}} className='description'>Она производится, если человек еще при жизни высказал в своем завещании, что не хочет, чтобы его после Вона робиться, якщо людина ще за життя висловила у своєму заповіті, що не хоче, щоб її після смерті ховали, а хоче, щоб її тіло було перетворено на порох. Також така процедура проводиться за бажанням родичів мертвої людини.</p>

                <p style={{marginBottom: '10px'}} className='description'><b>Які необхідні документи для кремації.</b> Кремування можливе лише за наявності наступних документів:</p>

                <ul className={s.aboutCremation__list}>
                    <li className={s.aboutCremation__list}><p style={{marginBottom: '10px'}} className='description'>Свідоцтво про смерть</p></li>
                    <li className={s.aboutCremation__list}><p style={{marginBottom: '10px'}} className='description'>Корінець довідки про причину смерті</p></li>
                    <li className={s.aboutCremation__list}><p style={{marginBottom: '10px'}} className='description'>Паспорт замовника</p></li>
                    <li className={s.aboutCremation__list}><p style={{marginBottom: '10px'}} className='description'>Отримати урну може тільки та людина, на яку оформлювалася послуги кремації</p></li>
                </ul>

                <p style={{marginBottom: '10px'}} className='description'>Документація дуже педантична, при помилці на вас може чекати відмова. Звернувшись за послугою кремації в <b>«Проф Ритуал»</b> ви уникнете такого неприємного сюрпризу.</p>
        
                <h2 style={{marginBottom: '10px'}} className='title'>Також можна придбати поховальні урни</h2>

                <ul style={{marginBottom: '10px'}} className={s.aboutCremation__listPictures}>
                  {crossesImgListArray.map((image) => (        
                    <li className={s.aboutCremation__itemPictures} key={image.id}>
                      <img className={s.aboutCremation__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.id, image.src, image.alt)}/>
                    </li>
                  ))}
                </ul>

          <SectionNeedHelp />
          
                <h2 style={{marginTop: '10px'}} className='title'>Які інші послуги ви можете замовити від «Проф Ритуал»:</h2>

                <p style={{marginBottom: '10px'}} className='description'>Після оформлення документів ви стаєте в чергу і маєте прибути в крематорій у потрібний час.</p>

                <h2 style={{marginBottom: '10px'}} className='title'>Ви можете замовити великий, малий та VIP зали:</h2>
                
            <ul className={s.aboutCremation__list}>
                <li className={s.aboutCremation__list}><p style={{marginBottom: '10px'}} className='description'>Читання ритуалу</p></li>
                <li className={s.aboutCremation__list}><p style={{marginBottom: '10px'}} className='description'>Напис на урні</p></li>
                <li className={s.aboutCremation__list}><p style={{marginBottom: '10px'}} className='description'>Утилізація вінків/кошиків</p></li>
                <li className={s.aboutCremation__list}><p style={{marginBottom: '10px'}} className='description'>Перевезення померлого/катафалк</p></li>
                <li className={s.aboutCremation__list}><p style={{marginBottom: '10px'}} className='description'>Великий асортимент ритуальних вінків</p></li>
                <li className={s.aboutCremation__list}><p style={{marginBottom: '10px'}} className='description'>Поминальний обід</p></li>
            </ul>

            <p style={{marginBottom: '10px'}} className='description'>Документація дуже педантична, при помилці на вас може чекати відмова. Звернувшись за послугою кремації в <b>«Проф Ритуал»</b> ви уникнете такого неприємного сюрпризу.</p>
        
            <h2 style={{marginBottom: '10px'}} className='title'>Зали у крематорії</h2>

            <ul style={{marginBottom: '10px'}} className={s.aboutCremation__list}>
                <li className={s.aboutCremation__list}><p style={{marginBottom: '10px'}} className='description'><b>Великий</b> – з ліфтом опускається прямо в піч</p></li>
                <li className={s.aboutCremation__list}><p style={{marginBottom: '10px'}} className='description'><b>Малий</b> – церковний ритуальний зал і після прощання перевозять у піч</p></li>
                <li className={s.aboutCremation__list}><p style={{marginBottom: '10px'}} className='description'><b>VIP</b> – гарний ритуальний зал, після прощання перевозять у піч</p></li>
            </ul>

            <p style={{marginBottom: '10px'}} className='description'>Для похоронного бюро «Проф Ритуал» найголовніше щоб у день кремації все пройшло гладко і без приємних сюрпризів. Ви завжди можете викликати нашого агента до себе додому абсолютно безкоштовно, який допоможе вам вибрати найоптимальніший варіант кремації.</p>

            <h2 style={{marginBottom: '10px'}} className='title'>Клієнти, які замовляли послугу кремації, так само цікавилися:</h2>

            <ul style={{marginBottom: '10px'}} className={s.aboutCremation__list}>
                <li className={s.aboutCremation__list}><Link to='/hearse' className='links'>Послуг транспорту</Link></li>
                <li className={s.aboutCremation__list}><Link to='/memorialdinners' className='links'>Поминальним обідом у Києві</Link></li>
                <li className={s.aboutCremation__list}><Link to='/requiemservicebypriest' className='links'>Бригадою для винесення тіла померлого</Link></li>
                <li className={s.aboutCremation__list}><Link to='/sanitationofpremises' className='links'>Дезобробкою приміщення</Link></li>
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
  )
};

export default SectionAboutCremation;
