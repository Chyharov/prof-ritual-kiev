import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import RentRitualHall from '../../images/RentRitualHall/RentRitualHall.jpg'
import s from './SectionAboutRentRitualHall.module.scss'

const ritualHallImgListArray = [
    { id: 1, src: require('../../images/RentRitualHall/RentRitualHallPhoto.jpg'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/RentRitualHall/RentRitualHallPhoto2.jpg'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/RentRitualHall/RentRitualHallPhoto3.jpg'), alt: 'Зображення 3' }
];

const SectionAboutRentRitualHall = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = id => {
        setSelectedImage(ritualHallImgListArray.find(image => image.id === id));
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };
    
    return (
      <section className={s.sectionAboutRentRitualHall}>
        <div className={'container ' + s.aboutRentRitualHall__container}>
                
            <img className={s.rentRitualHall__decoration} loading="lazy" src={RentRitualHall} alt="rentRitualHall__decoration" />
                
            <p style={{marginBottom: '10px'}} className='description'><b>Ритуальний зал</b> – це цілий комплекс, наші ритуальні зали включають сам зал прощання, розрахований на 50-100 осіб, кімнату відпочинку, кухню-їдальню, туалет. Всі наші ритуальні зали обладнані системою кондиціювання та припливно-витяжною вентиляцією. Під час холодів вони добре обігріваються.</p>
                
            <h2 style={{marginBottom: '10px'}} className='titls'>Види ритуальних залів</h2>
                
            <p style={{marginBottom: '10px'}} className='description'>Ми надаємо 3 види ритуальних залів для клієнтів: <b>малий, середній та великий</b>.</p>
                
            <ul style={{marginBottom: '10px'}} className='list'>
                <li style={{marginBottom: '10px'}}><p className='description'><span className='span'><b>Малий ритуальний зал. </b></span>Або бюджетний розрахований на 20-30 осіб. Має кухню, туалет, кондиціонер та опалення.</p></li>
                <li style={{marginBottom: '10px'}}><p className='description'><span className='span'><b>Середня ритуальна зала. </b></span>Розрахований на 40-60 осіб. Має кухню, туалет, кімнату відпочинку, кондиціонер та опалення.</p></li>
                <li style={{marginBottom: '10px'}}><p className='description'><span className='span'><b>Великий ритуальний зал. </b></span>Розрахований на 100 осіб. Має кухню, туалет, кімнату відпочинку, кондиціонер та опалення. Також у цьому залі достатньо місця для музичного супроводу.</p></li>    
            </ul>
               
            <ul style={{marginTop: '10px'}} className='list'>
                <li style={{marginBottom: '10px'}}><p className='description'>Після кожного відспівування ритуальний зал проходить ретельну дезобробку.</p></li>
                <li style={{marginBottom: '10px'}}><p className='description'>Усі ритуальні зали мають євроремонт.</p></li>
                <li style={{marginBottom: '10px'}}><p className='description'>У всіх ритуальних залах тепло під час холодів та прохолодно під час спеки.</p></li>  
            </ul>
                
            <h2 style={{marginBottom: '10px'}} className='titls'>Оренда ритуальної зали</h2>

            <p style={{marginBottom: '10px'}} className='description'>Оренда ритуального залу розрахована щогодини. Профритуал співпрацює з багатьма орендарями і тому може надати ритуальні зали в багатьох районах Києва за доступною ціною.</p>

            <h3 className={s.aboutRentRitualHall__titleSmall}>Клієнти, які замовляли з нами оренду ритуального залу, так само цікавилися:</h3>
                
            <ul style={{marginBottom: '20px'}} className='list'>
                <li style={{marginBottom: '10px'}}><Link className='links' to='/funeralorganization'>Організацією похорон</Link></li>
                <li style={{marginBottom: '10px'}}><Link className='links' to='/memorialdinners'>Поминальним обідом у Києві</Link></li>
                <li style={{marginBottom: '10px'}}><Link className='links' to='/hearse'>Ритуальним транспортом</Link></li>
                <li style={{marginBottom: '10px'}}><Link className='links' to='/crosses'>Хрестами</Link></li>
                <li style={{marginBottom: '10px'}}><Link className='links' to='/сoffins'>Ритуальними трунами</Link></li>
                <li style={{marginBottom: '10px'}}><Link className='links' to='/ritualwreath'>Жалобними вінками</Link></li>  
            </ul>
                
            <h3 className={s.aboutRentRitualHall__titleSmall}>Фото деяких ритуальних залів від Профритуалу</h3>
            
            <ul className={s.ritualHallPhotoList}>
                {ritualHallImgListArray.map((image) => (        
                    <li className={s.ritualHallPhotoList__item} key={image.id}>
                        <img className={s.rentRitualHall__photo} loading="lazy" id={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.id, image.src, image.alt)}/>
                    </li>
                ))}
            </ul>

            {modalOpen && selectedImage && (
                <Modal
                selectedImage={selectedImage}
                arrayPhoto={ritualHallImgListArray}
                setSelectedImage={setSelectedImage}
                setModalOpen={setModalOpen}
                />
            )}
            
        </div>
      </section>
  )
};

export default SectionAboutRentRitualHall;
