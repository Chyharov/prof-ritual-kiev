import React, { useState, useEffect } from 'react';
import s from './SectionContacts.module.scss';

const SectionContacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      setIsModalOpen(false);
    }
  };

  const handleContainerClick = (e) => {
    if (e.target.classList.contains(s.modal)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleContainerClick);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleContainerClick);
    };
  }, []);

  return (
    <section className={s.sectionContacts}>
      <div className={'container ' + s.contacts__container}>
        <button className={s.contacts__btn} onClick={handleModalToggle}>
          Викликати агента
        </button>
        <a className={s.contacts__call} href="tel:+38044209-02-61">
          +38 (044) 209-02-61
        </a>

        <h2 className={s.contacts__title}>Телефони:</h2>
        <ul className={s.contacts__list}>
          <li className={s.contacts__item}>
            <a href="tel:+380996813773">+38 (067) 011-21-60</a>
          </li>
          <li className={s.contacts__item}>
            <a href="tel:+380736813773">+38 (093) 904-07-07</a>
          </li>
        </ul>

        <div className={s.contacts__border}></div>

        {isModalOpen && (
          <div className={s.modal} onClick={handleContainerClick}>
            <ul>
              <li><p><a href="https://t.me/+380672459505" target="_blank" rel="noopener noreferrer">Telegram</a></p></li>
              <li><p><a href="viber://chat?number=+380672459505" target="_blank" rel="noopener noreferrer">Viber</a></p></li>
              <li><p><a href="whatsapp://send?phone=+380672459505" target="_blank" rel="noopener noreferrer">WhatsApp</a></p></li>
            </ul>

            <button onClick={handleModalToggle}>Закрити модалку</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionContacts;
