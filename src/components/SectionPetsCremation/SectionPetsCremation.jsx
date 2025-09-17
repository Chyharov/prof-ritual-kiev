import React from 'react';
import SectionPetsCremationImg from '../../images/PetsCremation/PetsCremation.jpg';
import s from './SectionPetsCremation.module.scss';

const SectionPetsCremation = () => {
  return (
    <section className={s.sectionPetsCremation}>
      <div className={'container ' + s.petsCremation__container}>
        <img
          className={s.petsCremation__decoration}
          loading="lazy"
          src={SectionPetsCremationImg}
          alt="PetsCremation__decoration"
        />

        <h2 className="title" style={{ marginBottom: '10px' }}>
          Кремація тварин
        </h2>

        <p className="description" style={{ marginBottom: '10px' }}>
          Спокійний та шанобливий спосіб зберегти пам’ять про улюбленця.
        </p>

        <p className="description" style={{ marginBottom: '10px' }}>
          Ми надаємо повний комплекс послуг кремації тварин. Організовуємо
          оформлення кремації, підбираємо індивідуальну або колективну
          процедуру, за потреби надаємо труну та залу для прощання. Після
          кремації можна отримати прах у зручній урні або замовити його урочисте
          зберігання.
        </p>

        <h3 className="title">За деталями звертайтесь за телефоном</h3>
      </div>
    </section>
  );
};

export default SectionPetsCremation;
