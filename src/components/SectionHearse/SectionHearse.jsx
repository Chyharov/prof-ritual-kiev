import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import { Link } from 'react-router-dom';
import HearseDecoration from '../../images/Hearse/Hearse.jpg'
import s from './SectionHearse.module.scss'

const hearseListArray = [
  {
    id: 1,
    src: require('../../images/RitualCarParkList/Cadillac.jpg'),
    alt: 'Зображення 1',
    title: 'Економ ритуальний транспорт - Volkswagen T5 і T6',
    description: ', що має місткість 7-8 осіб, ролики для зручного завантаження та вивантаження тіла.',
  },
  {
    id: 2,
    src: require('../../images/RitualCarParkList/MercedesSprinter.jpg'),
    alt: 'Зображення 2',
    title: 'Бюджет ритуальний транспорт – Mercedes-Benz Sprinter',
    description: ', що має місткість (8 сидячих місць), ролики для зручного завантаження та вивантаження тіла.',
  },
  {
    id: 3,
    src: require('../../images/RitualCarParkList/MercedesSprinterEconom.jpg'),
    alt: 'Зображення 3',
    title: 'Середній ритуальний транспорт – Mercedes Benz Sprinter',
    description: ', що має місткість 14-18 місць, кондиціонер, ролики, комфортні сидіння.',
  },
  {
    id: 4,
    src: require('../../images/RitualCarParkList/VolksWagenT5andT6.jpg'),
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
                
            <h2 style={{marginBottom: '10px'}} className='title'>Катафалк VIP та економ</h2>

            <p style={{marginBottom: '10px'}} className='description'>Слово <b>«катафалк»</b> означає постамент для встановлення труни в залі для прощання або перед проведенням поховання, але в наш час цим словом називають транспорт для перевезення тіла, супроводжуючих та ритуальних аксесуарів до місця поховання та для подальшого перевезення людей до зали для проведення поминальної церемонії.</p>
       
            <p style={{marginBottom: '10px'}} className='description'><b>Види ритуальних транспортів</b>, які надає компанія «Профритуал». Наше агентство ритуальних послуг має власний автопарк, в якому міститься безліч одиниць транспортних засобів, з яких ви зможете вибрати ті, які відповідають ситуації та відповідають бюджету.</p>
        
            <p style={{marginBottom: '10px'}} className='description'>Ми пропонуємо <b>4 види</b> ритуального транспорту у Києві та Київській області – економ, бюджет, середній та VIP. Ви можете вибрати будь-який ритуальний транспорт із 4 видів, який буде відповідати вашим потребам у будь-який час доби.</p>  

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
                    <li><Link className='links' to="/memorialdinners">Поминальним обідом у Києві та області</Link></li>
                    <li><Link className='links' to="/crosses">Ритуальними хрестами</Link></li>
                    <li><Link className='links' to="/ritualwreath">Жалобними вінками</Link></li>
                    <li><Link className='links' to="/сoffins">Елітними та економ трунами</Link></li>
                    <li><Link className='links' to="/funeralescortbymedicalpersonnal">Медперсоналом для похорону</Link></li>
                </ul>
        </div>
      </section>
  )
};

export default SectionHearse;
