import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import { Link } from 'react-router-dom';
import HearseDecoration from '../../images/Hearse/Hearse.jpg'
import s from './SectionHearse.module.scss'

const hearseListArray = [
  {
    id: 1,
    src: require('../../images/RitualCarParkList/VolksWagenT5andT6.jpg'),
    alt: 'Зображення 1',
    title: 'Економ ритуальний транспорт - Volkswagen T5 і T6',
    description: ', що має місткість 7-8 осіб, ролики для зручного завантаження та вивантаження тіла.',
  },
  {
    id: 2,
    src: require('../../images/RitualCarParkList/MercedesSprinterEconom.jpg'),
    alt: 'Зображення 2',
    title: 'Бюджет ритуальний транспорт – Mercedes-Benz Sprinter',
    description: ', що має місткість (8 сидячих місць), ролики для зручного завантаження та вивантаження тіла.',
  },
  {
    id: 3,
    src: require('../../images/RitualCarParkList/MercedesSprinter.jpg'),
    alt: 'Зображення 3',
    title: 'Середній ритуальний транспорт – Mercedes Benz Sprinter',
    description: ', що має місткість 14-18 місць, кондиціонер, ролики, комфортні сидіння.',
  },
  {
    id: 4,
     src: require('../../images/RitualCarParkList/Cadillac.jpg'),
    alt: 'Зображення 4',
    title: 'VIP ритуальний транспорт – Cadillac катафалк лімузин',
    description: ', що має місткість 2-3 особи, кондиціонер, ролики, комфортні сидіння.',
  }
];

const SectionHearse = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = id => {
    setSelectedImage(hearseListArray.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

    return (
      <section className={s.sectionHearse}>
        <div className={'container ' + s.hearse__container}>
            <img className={s.hearse__decoration} loading="lazy" src={HearseDecoration} alt="hearse__decoration" />
                
            <h2 style={{marginBottom: '10px'}} className='title'>Ритуальний транспорт від агентства «Профрітуал»</h2>

            <p style={{marginBottom: '10px'}} className='description'>Компанія «Проф Ритуал» надає повний спектр послуг з ритуального транспортування в Києві та Київській області. Ми організовуємо перевезення тіла померлого, супроводжуючих осіб та ритуальних атрибутів  до місця поховання або до зали для проведення прощальної чи поминальної церемонії.</p>
       
          <h2 style={{marginBottom: '10px'}} className='title'>Що таке катафалк?</h2>

          <p style={{marginBottom: '10px'}} className='description'><b>Катафалк</b> — це спеціалізований транспортний засіб, призначений для урочистого та гідного перевезення труни з тілом померлого. Сучасні катафалки обладнані відповідно до ритуальних вимог і можуть також мати місце для супроводжуючих осіб або ритуальної атрибутики.</p>

          <h2 style={{marginBottom: '10px'}} className='title'>Види ритуального транспорту</h2>

          <p style={{marginBottom: '10px'}} className='description'>Ми пропонуємо 4 категорії ритуального транспорту, які відповідають різним потребам і бюджету:</p>

          <ul style={{listStyle: 'none'}}>
            <li className='listItem' style={{listStyle: 'none'}}>
              <h3>Економ</h3>
              <p style={{marginBottom: '10px'}} className='description'>Найдоступніший варіант транспорту. Просте, але надійне рішення для перевезення до місця поховання.</p>
            </li>
            <li className='listItem' style={{listStyle: 'none'}}>
              <h3>Бюджет</h3>
              <p style={{marginBottom: '10px'}} className='description'>Покращений варіант із базовим рівнем комфорту. Гарне поєднання ціни та якості.</p>
            </li>
            <li className='listItem' style={{listStyle: 'none'}}>
              <h3>Середній клас</h3>
              <p style={{marginBottom: '10px'}} className='description'>Комфортніші автомобілі з кращими умовами для супроводжуючих. Підходить для більш організованої церемонії.</p>
            </li>
            <li className='listItem' style={{listStyle: 'none'}}>
              <h3>VIP-катафалк</h3>
              <p style={{marginBottom: '10px'}} className='description'>Преміальний транспорт для гідного та урочистого прощання. Підкреслює повагу та шану до померлого.</p>
            </li>
          </ul>

          <h2 style={{marginBottom: '10px'}} className='title'>Чому обирають «Проф Ритуал»</h2>

          <ul className='list'>
            <li className='listItem'>Оперативна організація ритуального транспорту</li>
            <li className='listItem'>Вибір транспорту відповідно до бюджету</li>
            <li className='listItem'>Професійний та тактовний підхід</li>
            <li className='listItem'>Підтримка на всіх етапах прощання</li>
          </ul>

            <ul style={{marginTop: '10px'}} className={s.ritualCarParkList__list}>
              {hearseListArray.map(image => (
                <li className={s.ritualCarParkList__item} key={image.id}>
                  <div className={s.flex}>
                  <img
                    className={s.ritualCarParkList__decoration}
                    loading="lazy"
                    id={image.id}
                    src={image.src}
                    alt={image.alt}
                    onClick={() => openModal(image.id, image.src, image.alt)}
                    />
                  </div>
                  <p style={{ marginBottom: '10px' }} className='description'><b>{image.title}</b>{image.description}</p>
                </li>
              ))}
            </ul>

            {modalOpen && selectedImage && (
              <Modal
                selectedImage={selectedImage}
                arrayPhoto={hearseListArray}
                setSelectedImage={setSelectedImage}
                setModalOpen={setModalOpen}
              />
            )}
                
                <h2 style={{marginBottom: '10px'}} className='title'>Клієнти, які замовляли послугу “Катафалк”, також цікавилися:</h2>
                <ul className={s.ritualCarParkList__listMenu}>
                    <li className='listItem'><Link className='links' to="/memorialdinners">Поминальним обідом у Києві та області</Link></li>
                    <li className='listItem'><Link className='links' to="/crosses">Ритуальними хрестами</Link></li>
                    <li className='listItem'><Link className='links' to="/ritualwreath">Жалобними вінками</Link></li>
                    <li className='listItem'><Link className='links' to="/сoffins">Елітними та економ трунами</Link></li>
                    <li className='listItem'><Link className='links' to="/funeralescortbymedicalpersonnal">Медперсоналом для похорону</Link></li>
                </ul>
        </div>
      </section>
  )
};

export default SectionHearse;
