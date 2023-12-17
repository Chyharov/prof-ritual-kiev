import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import s from './EliteCoffinsListComponent.module.scss';

const eliteCoffinsArray = [
  {
    id: 1,
    src: require('../../images/Coffins/EliteCoffins/EliteCoffins.jpg'),
    alt: 'Зображення 1',
  },
  {
    id: 2,
    src: require('../../images/Coffins/EliteCoffins/EliteCoffins2.jpg'),
    alt: 'Зображення 2',
  },
  {
    id: 3,
    src: require('../../images/Coffins/EliteCoffins/EliteCoffins3.jpg'),
    alt: 'Зображення 3',
  },
  {
    id: 4,
    src: require('../../images/Coffins/EliteCoffins/EliteCoffins4.jpg'),
    alt: 'Зображення 4',
  },
  {
    id: 5,
    src: require('../../images/Coffins/EliteCoffins/EliteCoffins5.jpg'),
    alt: 'Зображення 5',
  },
  {
    id: 6,
    src: require('../../images/Coffins/EliteCoffins/EliteCoffins6.jpg'),
    alt: 'Зображення 6',
  },
  {
    id: 7,
    src: require('../../images/Coffins/EliteCoffins/EliteCoffins7.jpg'),
    alt: 'Зображення 7',
  },
  {
    id: 8,
    src: require('../../images/Coffins/EliteCoffins/EliteCoffins8.jpg'),
    alt: 'Зображення 8',
  },
  {
    id: 9,
    src: require('../../images/Coffins/EliteCoffins/EliteCoffins9.jpg'),
    alt: 'Зображення 9',
  },
  {
    id: 10,
    src: require('../../images/Coffins/EliteCoffins/EliteCoffins10.jpg'),
    alt: 'Зображення 10',
  },
  {
    id: 11,
    src: require('../../images/Coffins/EliteCoffins/EliteCoffins11.jpg'),
    alt: 'Зображення 11',
  },
];

const EliteCoffinsListComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = id => {
    setSelectedImage(eliteCoffinsArray.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <ul className={s.aboutCoffins__list}>
        {eliteCoffinsArray.map(image => (
          <li className={s.aboutCoffins__item} key={image.id}>
            <img
              className={s.eliteCoffins__img}
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
          arrayPhoto={eliteCoffinsArray}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default EliteCoffinsListComponent;
