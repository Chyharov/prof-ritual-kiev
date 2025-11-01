import StoneOfMemoryDecoration from '../../watermarked/RitualServices/musicalaccompaniment.jpg';
import CelloMusicAccompanimentTest from '../../images/MusicalAccompanimen/celloMusicAccompanimentTest.mp4';
import SaxophoneMusicAccompanimentTest from '../../images/MusicalAccompanimen/saxophoneMusicAccompanimentTest.mp4';
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

        <p className="description" style={{ marginBottom: '10px' }}>
          <b>Музичний супровід</b> – важливий елемент прощальної церемонії, що
          допомагає створити глибоку та зворушливу атмосферу. Ми пропонуємо
          декілька варіантів на вибір:
        </p>

        <ul className="list" style={{ marginBottom: '10px' }}>
          <li className="listItem">
            <p>
              <b>Духовий оркестр</b> – традиційне та урочисте звучання, що
              підкреслює значущість події.
            </p>
          </li>
          <li className="listItem">
            <p>
              <b>Струнний ансамбль</b> – ніжна й чуттєва музика, яка додає тепла
              та світлих спогадів.
            </p>
          </li>
          <li className="listItem">
            <p>
              <b>Акустичне обладнання</b> (колонка з мікрофоном) – можливість
              включити улюблені композиції померлого та організувати виступи
              близьких із прощальним словом.
            </p>
          </li>
          <li className="listItem">
            <p>
              <b>Музичний супровід</b> добирається індивідуально з урахуванням
              побажань родини, щоб церемонія прощання була максимально гідною та
              душевною.
            </p>
          </li>
        </ul>

        <video
          style={{ marginBottom: '20px' }}
          className={s.musicalAccompaniment__video}
          src={SaxophoneMusicAccompanimentTest}
          controls
          autoPlay
          loop
          muted
        ></video>

        <video
          className={s.musicalAccompaniment__video}
          src={CelloMusicAccompanimentTest}
          controls
          autoPlay
          loop
          muted
        ></video>
      </div>
    </section>
  );
};

export default SectionMusicalAccompaniment;
