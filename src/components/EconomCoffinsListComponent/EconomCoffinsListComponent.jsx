import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import s from './EconomCoffinsListComponent.module.scss';

const economCoffinsArray = [
    { id: 1, src: require('../../images/Coffins/EconomCoffins/EconomCoffins.jpg'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/Coffins/EconomCoffins/EconomCoffins2.jpg'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/Coffins/EconomCoffins/EconomCoffins3.jpg'), alt: 'Зображення 3' },
    { id: 4, src: require('../../images/Coffins/EconomCoffins/EconomCoffins4.jpg'), alt: 'Зображення 4' },
    { id: 5, src: require('../../images/Coffins/EconomCoffins/EconomCoffins5.jpg'), alt: 'Зображення 5' },
    { id: 6, src: require('../../images/Coffins/EconomCoffins/EconomCoffins6.jpg'), alt: 'Зображення 6' },
    { id: 7, src: require('../../images/Coffins/EconomCoffins/EconomCoffins7.jpg'), alt: 'Зображення 7' },
    { id: 8, src: require('../../images/Coffins/EconomCoffins/EconomCoffins8.jpg'), alt: 'Зображення 8' },
    { id: 9, src: require('../../images/Coffins/EconomCoffins/EconomCoffins9.jpg'), alt: 'Зображення 9' },
    { id: 10, src: require('../../images/Coffins/EconomCoffins/EconomCoffins10.jpg'), alt: 'Зображення 10' },
    { id: 11, src: require('../../images/Coffins/EconomCoffins/EconomCoffins11.jpg'), alt: 'Зображення 11' },
    { id: 12, src: require('../../images/Coffins/EconomCoffins/EconomCoffins12.jpg'), alt: 'Зображення 12' },
    { id: 13, src: require('../../images/Coffins/EconomCoffins/EconomCoffins13.jpg'), alt: 'Зображення 13' },
    { id: 14, src: require('../../images/Coffins/EconomCoffins/EconomCoffins14.jpg'), alt: 'Зображення 14' },
    { id: 15, src: require('../../images/Coffins/EconomCoffins/EconomCoffins15.jpg'), alt: 'Зображення 15' },
    { id: 16, src: require('../../images/Coffins/EconomCoffins/EconomCoffins16.jpg'), alt: 'Зображення 16' },
    { id: 17, src: require('../../images/Coffins/EconomCoffins/EconomCoffins17.jpg'), alt: 'Зображення 17' },
    { id: 18, src: require('../../images/Coffins/EconomCoffins/EconomCoffins18.jpg'), alt: 'Зображення 18' },
    { id: 19, src: require('../../images/Coffins/EconomCoffins/EconomCoffins19.jpg'), alt: 'Зображення 19' },
    { id: 20, src: require('../../images/Coffins/EconomCoffins/EconomCoffins20.jpg'), alt: 'Зображення 20' },
    { id: 21, src: require('../../images/Coffins/EconomCoffins/EconomCoffins21.jpg'), alt: 'Зображення 21' },
    { id: 22, src: require('../../images/Coffins/EconomCoffins/EconomCoffins22.jpg'), alt: 'Зображення 22' },
    { id: 23, src: require('../../images/Coffins/EconomCoffins/EconomCoffins23.jpg'), alt: 'Зображення 23' },
    { id: 24, src: require('../../images/Coffins/EconomCoffins/EconomCoffins24.jpg'), alt: 'Зображення 24' },
];

const EconomCoffinsListComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = id => {
    setSelectedImage(economCoffinsArray.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
        <ul className={s.aboutCoffins__list}>
            {economCoffinsArray.map((image) => (        
                <li className={s.aboutCoffins__item} key={image.id}>
                    <img className={s.economCoffins__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.id, image.src, image.alt)}/>
                </li>
            ))}
        </ul>

      {modalOpen && selectedImage && (
        <Modal
          selectedImage={selectedImage}
          arrayPhoto={economCoffinsArray}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default EconomCoffinsListComponent;
