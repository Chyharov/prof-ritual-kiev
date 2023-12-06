import React, { useState, useEffect } from 'react';
import { FaTelegram } from "react-icons/fa6";
import { FaViber } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import s from './SectionContacts.module.scss';

const SectionContacts = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <section className={s.sectionContacts}>
      <div className={'container ' + s.contacts__container}>
        <button className={s.contacts__btn} onClick={openModal}>
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
          <div className={s.modal} onClick={handleOutsideClick}>
            <IoMdClose className={s.btn__close} onClick={closeModal} />
            <ul className={s.contact__list}>
              
              <li className={s.contact__item}>
                <a className={s.contact__links} href="https://t.me/+380672459505" target="_blank" rel="noopener noreferrer">
                  <FaTelegram className={`${s.contact__icons} ${s.icon__telegram}`} />
                  <p> Telegram</p>
                </a>
              </li>

              <li className={s.contact__item}>
                <a className={s.contact__links} href="viber://chat?number=+380672459505/" target="_blank" rel="noopener noreferrer">
                  <FaViber className={`${s.contact__icons} ${s.icon__viber}`} />
                  <p> Viber</p>
                </a>
              </li>

              <li className={s.contact__item}>
                <a className={s.contact__links} href="whatsapp://send?phone=+380672459505" target="_blank" rel="noopener noreferrer">
                  <FaSquareWhatsapp className={`${s.contact__icons} ${s.icon__whatsApp}`} />
                  <p> WhatsApp</p>
                </a>
              </li>

            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionContacts;
