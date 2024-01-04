import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../ModalWindow/ModalWindow';
import RemovalBodyDecoration from '../../images/RemovalBody/RemovalBodyDecoration.jpg'
import s from './SectionAbooutRemovalBody.module.scss'

const removalBodyImgListArray = [
    { id: 1, src: require('../../images/RemovalBody/funeralTeam__photo.jpeg'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/RemovalBody/funeralTeam__photo2.jpeg'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/RemovalBody/funeralTeam__photo3.jpeg'), alt: 'Зображення 3' },
];

const SectionAbooutRemovalBody = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = id => {
        setSelectedImage(removalBodyImgListArray.find(image => image.id === id));
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
  };

    return (
      <section className={s.sectionAbooutRemovalBody}>
        <div className={'container ' + s.abooutRemovalBody__container}>
                
            <img className={s.abooutRemovalBody__decoration} loading="lazy" src={RemovalBodyDecoration} alt="abooutRemovalBody__decoration" />

            <p style={{marginBottom: '10px'}} className='description'>Наше ритуальне бюро знає, як складно в таку хвилину думати про <b>дотримання всіх правил</b>, пов’язаних з винесенням тіла померлого, саме тому ми пропонуємо вам скористатися послугою – бригада для похорону. Наші співробітники добре знають усі правила винесення тіла – як за православними правилами, так і відповідно до звичаїв та правил інших релігій.</p>                

            <h2 style={{marginBottom: '10px'}} className='title'>Бригада ритуальних вантажників</h2>
                
            <blockquote style={{marginBottom: '10px'}} className='blockquote'> Вона працюватиме від початку самого процесу похорону і до його завершення. Склад бригади залежатиме від розміру труни та складності роботи, є мінімальний, стандартний та елітний склад <b>(4-6-8 осіб)</b>.</blockquote>
            
            <p style={{marginBottom: '10px'}} className='description'>Якщо Вам потрібно виконати перевезення тіла померлого на тривалі відстані, ритуальні вантажники проводять разом з вами тіло до вокзалу або аеропорту. Крім того, за вашим бажанням вони можуть брати участь у <Link className='links' to="/cargo">далеких перевезеннях померлих</Link></p>
                
            <h2 style={{marginBottom: '10px'}} className='title'>Наша Бригада для похорону</h2>    

            <p style={{marginBottom: '10px'}} className='description'>Багато людей вважають за краще не замовляти професійну бригаду для винесення тіла померлого. Вони довіряють цей ритуал похорону членам сім’ї чи близьким знайомим. Але на жаль, люди журяться втратою друга чи члена сім’ї по-різному. Але ваші близькі та друзі теж перебувають під стресом, їхній друг помер, його більше немає. Щоб пом’якшити горе перед похороном багато хто вживає алкоголь. Не знаючи коректної процедури винесення тіла померлого і <b>під впливом алкоголю</b> часто трапляються нещасні випадки під час похорону, які завдають незворотного стресу близьким і рідним померлого. Наша бригада це міцні та сильні чоловіки, які відповідально ставляться до своєї роботи.</p>

            <h3 style={{marginBottom: '10px'}} className='titleSmall'>Клієнти, які замовляли ритуальну послугу “бригада для похорону” так само цікавилися:</h3>
                
            <ul style={{ marginBottom: '20px' }} className='list'>
                <li style={{marginBottom: '10px'}}><Link className='links' href="/">Орендою ритуального залу</Link></li>
                <li style={{marginBottom: '10px'}}><Link className='links' href="/">Оформлення документів</Link></li>
                <li style={{marginBottom: '10px'}}><Link className='links' href="/">Ритуальний транспорт</Link></li>
                <li style={{marginBottom: '10px'}}><Link className='links' href="/">Поминальний обід у Києві</Link></li>  
            </ul>
                
            <h3 style={{marginBottom: '20px'}} className='titleSmall'>Фото нашої бригади для похорону</h3>

            <ul style={{marginBottom: '20px'}} className={s.funeralTeam__photoList}>
                {removalBodyImgListArray.map((image) => (        
                    <li style={{marginBottom: '10px'}} key={image.id}>
                        <img className={s.funeralTeam__photo} loading="lazy" id={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.id, image.src, image.alt)}/>
                    </li>
                ))}
            </ul>

            {modalOpen && selectedImage && (
                <Modal
                selectedImage={selectedImage}
                arrayPhoto={removalBodyImgListArray}
                setSelectedImage={setSelectedImage}
                setModalOpen={setModalOpen}
                />
            )}

        </div>
      </section>
  )
};

export default SectionAbooutRemovalBody;
