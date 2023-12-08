import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import s from './RitualWreathListComponent.module.scss';

const ritualWreathList = [
    { id: 1, src: require('../../images/RitualWreath/ritualWreathList.webp'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/RitualWreath/ritualWreathList2.webp'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/RitualWreath/ritualWreathList3.webp'), alt: 'Зображення 3' },
    { id: 4, src: require('../../images/RitualWreath/ritualWreathList4.webp'), alt: 'Зображення 4' },
    { id: 5, src: require('../../images/RitualWreath/ritualWreathList5.webp'), alt: 'Зображення 5' },
    { id: 6, src: require('../../images/RitualWreath/ritualWreathList6.webp'), alt: 'Зображення 6' },
    { id: 7, src: require('../../images/RitualWreath/ritualWreathList7.webp'), alt: 'Зображення 7' },
    { id: 8, src: require('../../images/RitualWreath/ritualWreathList8.webp'), alt: 'Зображення 8' },
    { id: 9, src: require('../../images/RitualWreath/ritualWreathList9.webp'), alt: 'Зображення 9' },
    { id: 10, src: require('../../images/RitualWreath/ritualWreathList10.webp'), alt: 'Зображення 10' },
    { id: 11, src: require('../../images/RitualWreath/ritualWreathList11.webp'), alt: 'Зображення 11' },
    { id: 12, src: require('../../images/RitualWreath/ritualWreathList12.webp'), alt: 'Зображення 12' },
    { id: 13, src: require('../../images/RitualWreath/ritualWreathList13.webp'), alt: 'Зображення 13' },
    { id: 14, src: require('../../images/RitualWreath/ritualWreathList14.webp'), alt: 'Зображення 14' },
    { id: 15, src: require('../../images/RitualWreath/ritualWreathList15.webp'), alt: 'Зображення 15' },
    { id: 16, src: require('../../images/RitualWreath/ritualWreathList16.webp'), alt: 'Зображення 16' },
    { id: 17, src: require('../../images/RitualWreath/ritualWreathList17.webp'), alt: 'Зображення 17' },
    { id: 18, src: require('../../images/RitualWreath/ritualWreathList18.webp'), alt: 'Зображення 18' },
    { id: 19, src: require('../../images/RitualWreath/ritualWreathList19.webp'), alt: 'Зображення 19' },
    { id: 20, src: require('../../images/RitualWreath/ritualWreathList20.webp'), alt: 'Зображення 20' },
    { id: 21, src: require('../../images/RitualWreath/ritualWreathList21.webp'), alt: 'Зображення 21' },
    { id: 22, src: require('../../images/RitualWreath/ritualWreathList22.webp'), alt: 'Зображення 22' },
    { id: 23, src: require('../../images/RitualWreath/ritualWreathList23.webp'), alt: 'Зображення 23' },
    { id: 24, src: require('../../images/RitualWreath/ritualWreathList24.webp'), alt: 'Зображення 24' },
    { id: 25, src: require('../../images/RitualWreath/ritualWreathList25.webp'), alt: 'Зображення 25' },
];

const RitualWreathListComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(ritualWreathList.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <ul className={s.aboutRitualWreath__list}>
        {ritualWreathList.map(image => (
          <li className={s.aboutRitualWreath__item} key={image.id}>
            <img
              className={s.ritualWreathList__img}
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
          arrayPhoto={ritualWreathList}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default RitualWreathListComponent;
