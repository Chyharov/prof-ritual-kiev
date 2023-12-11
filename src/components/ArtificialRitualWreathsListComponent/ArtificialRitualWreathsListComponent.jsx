import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import s from './ArtificialRitualWreathsListComponent.module.scss';

const artificialRitualWreaths = [
  {
    id: 1,
    src: require('../../images/RitualWreath/artificialRitualWreaths.jpg'),
    alt: 'Зображення 1',
  },
  {
    id: 2,
    src: require('../../images/RitualWreath/artificialRitualWreaths2.jpg'),
    alt: 'Зображення 2',
  },
  {
    id: 3,
    src: require('../../images/RitualWreath/artificialRitualWreaths3.jpg'),
    alt: 'Зображення 3',
  },
  {
    id: 4,
    src: require('../../images/RitualWreath/artificialRitualWreaths4.jpg'),
    alt: 'Зображення 4',
  },
  {
    id: 5,
    src: require('../../images/RitualWreath/artificialRitualWreaths5.jpg'),
    alt: 'Зображення 5',
  },
  {
    id: 6,
    src: require('../../images/RitualWreath/artificialRitualWreaths6.jpg'),
    alt: 'Зображення 6',
  },
  {
    id: 7,
    src: require('../../images/RitualWreath/artificialRitualWreaths7.jpg'),
    alt: 'Зображення 7',
  },
  {
    id: 8,
    src: require('../../images/RitualWreath/artificialRitualWreaths8.jpg'),
    alt: 'Зображення 8',
  },
  {
    id: 9,
    src: require('../../images/RitualWreath/artificialRitualWreaths9.jpg'),
    alt: 'Зображення 9',
  },
  {
    id: 10,
    src: require('../../images/RitualWreath/artificialRitualWreaths10.jpg'),
    alt: 'Зображення 10',
  },
  {
    id: 11,
    src: require('../../images/RitualWreath/artificialRitualWreaths11.jpg'),
    alt: 'Зображення 11',
  },
  {
    id: 12,
    src: require('../../images/RitualWreath/artificialRitualWreaths12.jpg'),
    alt: 'Зображення 12',
  },
  {
    id: 13,
    src: require('../../images/RitualWreath/artificialRitualWreaths13.jpg'),
    alt: 'Зображення 13',
  },
  {
    id: 14,
    src: require('../../images/RitualWreath/artificialRitualWreaths14.jpg'),
    alt: 'Зображення 14',
  },
  {
    id: 15,
    src: require('../../images/RitualWreath/artificialRitualWreaths15.jpg'),
    alt: 'Зображення 15',
  },
  {
    id: 16,
    src: require('../../images/RitualWreath/artificialRitualWreaths16.jpg'),
    alt: 'Зображення 16',
  },
  {
    id: 17,
    src: require('../../images/RitualWreath/artificialRitualWreaths17.jpg'),
    alt: 'Зображення 17',
  },
  {
    id: 18,
    src: require('../../images/RitualWreath/artificialRitualWreaths18.jpg'),
    alt: 'Зображення 18',
  },
  {
    id: 19,
    src: require('../../images/RitualWreath/artificialRitualWreaths19.jpg'),
    alt: 'Зображення 19',
  },
  {
    id: 20,
    src: require('../../images/RitualWreath/artificialRitualWreaths20.jpg'),
    alt: 'Зображення 20',
  },
  {
    id: 21,
    src: require('../../images/RitualWreath/artificialRitualWreaths21.jpg'),
    alt: 'Зображення 21',
  },
  {
    id: 22,
    src: require('../../images/RitualWreath/artificialRitualWreaths22.jpg'),
    alt: 'Зображення 22',
  },
  {
    id: 23,
    src: require('../../images/RitualWreath/artificialRitualWreaths23.jpg'),
    alt: 'Зображення 23',
  },
  {
    id: 24,
    src: require('../../images/RitualWreath/artificialRitualWreaths24.jpg'),
    alt: 'Зображення 24',
  },
  {
    id: 25,
    src: require('../../images/RitualWreath/artificialRitualWreaths25.jpg'),
    alt: 'Зображення 25',
  },
  {
    id: 26,
    src: require('../../images/RitualWreath/artificialRitualWreaths26.jpg'),
    alt: 'Зображення 26',
  },
  {
    id: 27,
    src: require('../../images/RitualWreath/artificialRitualWreaths27.jpg'),
    alt: 'Зображення 27',
  },
];

const ArtificialRitualWreathsListComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = id => {
    setSelectedImage(artificialRitualWreaths.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <ul className={s.aboutRitualWreath__list}>
        {artificialRitualWreaths.map(image => (
          <li className={s.aboutRitualWreath__item} key={image.id}>
            <img
              className={s.artificialRitualWreaths__img}
              loading="lazy"
              id={image.id}
              src={image.src}
                alt={image.alt}
                onClick={() => openModal(image.id, image.src, image.alt)}
            />
          </li>
        ))}
      </ul>

      {modalOpen && selectedImage && (
        <Modal
          selectedImage={selectedImage}
          arrayPhoto={artificialRitualWreaths}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default ArtificialRitualWreathsListComponent;
