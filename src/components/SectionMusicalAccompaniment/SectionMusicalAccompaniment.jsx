import StoneOfMemoryDecoration from '../../images/RitualServices/musicalaccompaniment.jpg';
import s from './SectionMusicalAccompaniment.module.scss';

const SectionMusicalAccompaniment = () => {
  return (
    <section className={s.sectionMusicalAccompaniment}>
      <div className={'container ' + s.musicalAccompaniment__container}>
        <img
          className={s.musicalAccompaniment__decoration}
          loading="lazy"
          src={StoneOfMemoryDecoration}
          alt="stoneOfMemory__decoration"
        />

        <h2 style={{ marginBottom: '10px' }} className="title">
          Музичний супровід
        </h2>

      </div>
    </section>
  );
};

export default SectionMusicalAccompaniment;
