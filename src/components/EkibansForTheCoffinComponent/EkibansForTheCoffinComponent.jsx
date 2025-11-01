import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import s from './EkibansForTheCoffinComponent.module.scss';

const ekibansForTheCoffin = [
  {
    id: 1,
    src: require('../../watermarked/RitualWreath/ekibansForTheCoffin.jpg'),
    alt: 'Зображення 1',
  },
  {
    id: 2,
    src: require('../../watermarked/RitualWreath/ekibansForTheCoffin2.jpg'),
    alt: 'Зображення 2',
  },
  {
    id: 3,
    src: require('../../watermarked/RitualWreath/ekibansForTheCoffin3.jpg'),
    alt: 'Зображення 3',
  },
  {
    id: 4,
    src: require('../../watermarked/RitualWreath/ekibansForTheCoffin4.jpg'),
    alt: 'Зображення 4',
  },
  {
    id: 5,
    src: require('../../watermarked/RitualWreath/ekibansForTheCoffin5.jpg'),
    alt: 'Зображення 5',
  },
  {
    id: 6,
    src: require('../../watermarked/RitualWreath/ekibansForTheCoffin6.jpg'),
    alt: 'Зображення 6',
  },
  {
    id: 7,
    src: require('../../watermarked/RitualWreath/ekibansForTheCoffin7.jpg'),
    alt: 'Зображення 7',
  },
  {
    id: 8,
    src: require('../../watermarked/RitualWreath/ekibansForTheCoffin8.jpg'),
    alt: 'Зображення 8',
  },
];

const EkibansForTheCoffinComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = id => {
    setSelectedImage(ekibansForTheCoffin.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <ul className={s.aboutRitualWreath__list}>
        {ekibansForTheCoffin.map(image => (
          <li className={s.aboutRitualWreath__item} key={image.id}>
            <img
              className={s.ekibansForTheCoffin__img}
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
          arrayPhoto={ekibansForTheCoffin}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default EkibansForTheCoffinComponent;
