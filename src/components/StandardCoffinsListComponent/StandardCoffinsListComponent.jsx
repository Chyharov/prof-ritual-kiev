import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import s from './StandardCoffinsListComponent.module.scss';

const standardCoffinsArray = [
  {
    id: 1,
    src: require('../../watermarked/Coffins/StandardCoffins/StandardCoffins.jpg'),
    alt: 'Зображення 1',
  },
  {
    id: 2,
    src: require('../../watermarked/Coffins/StandardCoffins/StandardCoffins2.jpg'),
    alt: 'Зображення 2',
  },
  {
    id: 3,
    src: require('../../watermarked/Coffins/StandardCoffins/StandardCoffins3.jpg'),
    alt: 'Зображення 3',
  },
  {
    id: 4,
    src: require('../../watermarked/Coffins/StandardCoffins/StandardCoffins4.jpg'),
    alt: 'Зображення 4',
  },
  {
    id: 5,
    src: require('../../watermarked/Coffins/StandardCoffins/StandardCoffins5.jpg'),
    alt: 'Зображення 5',
  },
  {
    id: 6,
    src: require('../../watermarked/Coffins/StandardCoffins/StandardCoffins6.jpg'),
    alt: 'Зображення 6',
  },
  {
    id: 7,
    src: require('../../watermarked/Coffins/StandardCoffins/StandardCoffins7.jpg'),
    alt: 'Зображення 7',
  },
  {
    id: 8,
    src: require('../../watermarked/Coffins/StandardCoffins/StandardCoffins8.jpg'),
    alt: 'Зображення 8',
  },
  {
    id: 9,
    src: require('../../watermarked/Coffins/StandardCoffins/StandardCoffins9.jpg'),
    alt: 'Зображення 9',
  },
  {
    id: 10,
    src: require('../../watermarked/Coffins/StandardCoffins/StandardCoffins10.jpg'),
    alt: 'Зображення 10',
  },
  {
    id: 11,
    src: require('../../watermarked/Coffins/StandardCoffins/StandardCoffins11.jpg'),
    alt: 'Зображення 11',
  },
  {
    id: 12,
    src: require('../../watermarked/Coffins/StandardCoffins/StandardCoffins12.jpg'),
    alt: 'Зображення 12',
  },
];

const StandardCoffinsListComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = id => {
    setSelectedImage(standardCoffinsArray.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <ul className={s.aboutCoffins__list}>
        {standardCoffinsArray.map(image => (
          <li className={s.aboutCoffins__item} key={image.id}>
            <img
              className={s.standardCoffins__img}
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
          arrayPhoto={standardCoffinsArray}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default StandardCoffinsListComponent;
