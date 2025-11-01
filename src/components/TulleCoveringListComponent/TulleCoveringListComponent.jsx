import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import s from './TulleCoveringListComponent.module.scss';

const tulleCoveringListArray = [
    { id: 1, src: require('../../watermarked/RitualAccessories/RitualAccessories6.jpg'), alt: 'Зображення 1' },
    { id: 2, src: require('../../watermarked/RitualAccessories/RitualAccessories7.jpg'), alt: 'Зображення 2' },
    { id: 3, src: require('../../watermarked/RitualAccessories/RitualAccessories8.jpg'), alt: 'Зображення 3' },
    { id: 4, src: require('../../watermarked/RitualAccessories/RitualAccessories9.jpg'), alt: 'Зображення 4' },
    { id: 5, src: require('../../watermarked/RitualAccessories/RitualAccessories10.jpg'), alt: 'Зображення 5' },
    { id: 6, src: require('../../watermarked/RitualAccessories/RitualAccessories11.jpg'), alt: 'Зображення 6' },
    { id: 7, src: require('../../watermarked/RitualAccessories/RitualAccessories12.jpg'), alt: 'Зображення 7' },
    { id: 8, src: require('../../watermarked/RitualAccessories/RitualAccessories13.jpg'), alt: 'Зображення 8' },
    { id: 9, src: require('../../watermarked/RitualAccessories/RitualAccessories14.jpg'), alt: 'Зображення 9' },
    { id: 10, src: require('../../watermarked/RitualAccessories/RitualAccessories15.jpg'), alt: 'Зображення 10' },
    { id: 11, src: require('../../watermarked/RitualAccessories/RitualAccessories16.jpg'), alt: 'Зображення 11' },
];

const TulleCoveringListComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = id => {
    setSelectedImage(tulleCoveringListArray.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
        <ul className={s.aboutAboutRitual__list}>
            {tulleCoveringListArray.map((image) => (        
                <li className={s.aboutAboutRitual__item} key={image.id}>
                    <img className={s.tulleCovering__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.id, image.src, image.alt)}/>
                </li>
            ))}
        </ul>

      {modalOpen && selectedImage && (
        <Modal
          selectedImage={selectedImage}
          arrayPhoto={tulleCoveringListArray}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default TulleCoveringListComponent;
