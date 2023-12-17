import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import s from './CrossesListComponent.module.scss';

const crossesImgListArray = [
    { id: 1, src: require('../../images/Сrosses/Crosses.jpg'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/Сrosses/Crosses2.jpg'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/Сrosses/Crosses3.jpg'), alt: 'Зображення 3' },
    { id: 4, src: require('../../images/Сrosses/Crosses4.jpg'), alt: 'Зображення 4' },
    { id: 5, src: require('../../images/Сrosses/Crosses5.jpg'), alt: 'Зображення 5' },
    { id: 6, src: require('../../images/Сrosses/Crosses6.jpg'), alt: 'Зображення 6' },
    { id: 7, src: require('../../images/Сrosses/Crosses7.jpg'), alt: 'Зображення 7' },
    { id: 8, src: require('../../images/Сrosses/Crosses8.jpg'), alt: 'Зображення 8' },
    { id: 9, src: require('../../images/Сrosses/Crosses9.jpg'), alt: 'Зображення 9' },
    { id: 10, src: require('../../images/Сrosses/Crosses10.jpg'), alt: 'Зображення 10' },
    { id: 11, src: require('../../images/Сrosses/Crosses11.jpg'), alt: 'Зображення 11' },
    { id: 12, src: require('../../images/Сrosses/Crosses12.jpg'), alt: 'Зображення 12' },
];

const CrossesListComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = id => {
    setSelectedImage(crossesImgListArray.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
        <ul style={{marginTop: '20px'}} className={s.aboutCrosses__list}>
            {crossesImgListArray.map((image) => (        
                <li className={s.aboutCrosses__item} key={image.id}>
                    <img className={s.aboutCrosses__img} loading="lazy" id={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.id, image.src, image.alt)}/>
                </li>
            ))}
        </ul>

      {modalOpen && selectedImage && (
        <Modal
          selectedImage={selectedImage}
          arrayPhoto={crossesImgListArray}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default CrossesListComponent;
