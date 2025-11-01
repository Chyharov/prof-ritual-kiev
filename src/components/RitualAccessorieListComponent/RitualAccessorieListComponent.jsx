import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import s from './RitualAccessorieListComponent.module.scss';

const ritualAccessoriesImgListArray = [
    { id: 1, src: require('../../watermarked/funeralSets/funeralSets.jpg'), alt: 'Зображення 1' },
    { id: 2, src: require('../../watermarked/funeralSets/funeralSets2.jpg'), alt: 'Зображення 2' },
    { id: 3, src: require('../../watermarked/funeralSets/funeralSets3.jpg'), alt: 'Зображення 3' },
    { id: 4, src: require('../../watermarked/funeralSets/funeralSets4.jpg'), alt: 'Зображення 4' },
    { id: 5, src: require('../../watermarked/funeralSets/funeralSets5.jpg'), alt: 'Зображення 5' },
    { id: 6, src: require('../../watermarked/funeralSets/funeralSets6.jpg'), alt: 'Зображення 6' },
    { id: 7, src: require('../../watermarked/funeralSets/funeralSets7.jpg'), alt: 'Зображення 7' },
    { id: 8, src: require('../../watermarked/funeralSets/funeralSets8.jpg'), alt: 'Зображення 8' },
    { id: 9, src: require('../../watermarked/RitualAccessories/RitualAccessories.jpg'), alt: 'Зображення 9' },
    { id: 10, src: require('../../watermarked/RitualAccessories/RitualAccessories2.jpg'), alt: 'Зображення 10' },
    { id: 11, src: require('../../watermarked/RitualAccessories/RitualAccessories3.jpg'), alt: 'Зображення 11' },
];

const RitualAccessorieListComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = id => {
    setSelectedImage(ritualAccessoriesImgListArray.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
        <ul className={s.aboutAboutRitual__list}>
            {ritualAccessoriesImgListArray.map((image) => (        
                <li className={s.aboutAboutRitual__item} key={image.id}>
                    <img className={s.ritualAccessories__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.id, image.src, image.alt)}/>
                </li>
            ))}
        </ul>

      {modalOpen && selectedImage && (
        <Modal
          selectedImage={selectedImage}
          arrayPhoto={ritualAccessoriesImgListArray}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default RitualAccessorieListComponent;
