import MemoryCodeImg from '../../images/MemoryCode/MemoryCode.jpg';
import MemoryCodeImgDescription from '../../images/MemoryCode/MemoryCodeImgDescription.jpg';
import s from './SectionMemoryCode.module.scss';

const SectionMemoryCode = () => {
  return (
    <section className={s.sectionMemoryCode}>
      <div className={'container ' + s.memoryCode__container}>
        <img
          className={s.memoryCode__decoration}
          loading="lazy"
          src={MemoryCodeImg}
          alt="MemoryCode__decoration"
        />

        <h2 className="title" style={{ marginBottom: '10px' }}>
          Код спогадів (QR-code) – цифрова спадщина пам’яті
        </h2>

        <p className="description" style={{ marginBottom: '10px' }}>
          Ми пропонуємо інноваційну послугу, яка поєднує традицію й технології,
          щоб зберегти спогади про ваших рідних назавжди.
        </p>

        <p className="description" style={{ marginBottom: '10px' }}>
          Що це таке: це унікальний QR-код, який наноситься на пам’ятник або
          інше відповідне місце.
        </p>

        <p className="description" style={{ marginBottom: '10px' }}>
          Як працює: скануючи код, відвідувач потрапляє на онлайн-сторінку, де
          зберігаються фото, відео, біографія, спогади та інші матеріали, що
          розповідають про життя людини.
        </p>

        <h3 className="title" style={{ marginBottom: '10px' }}>
          Переваги:
        </h3>

        <ul style={{ marginBottom: '10px' }}>
          <li style={{ marginBottom: '3px' }}>
            <p className="description">
              1. Збереження історії — всі спогади, які важливі, можна зберегти й
              показати наступним поколінням.
            </p>
          </li>
          <li style={{ marginBottom: '3px' }}>
            <p className="description">
              2. Доступність — будь-хто із смартфоном зможе побачити спогади в
              будь-який час.
            </p>
          </li>
          <li style={{ marginBottom: '3px' }}>
            <p className="description">
              3. Емоційна повнота — це не просто ім’я на пам’ятнику, це історія,
              голос, образ.
            </p>
          </li>
          <li style={{ marginBottom: '3px' }}>
            <p className="description">
              4. Індивідуалізація — сторінка може бути оформлена й наповнена
              так, як забажає родина.
            </p>
          </li>
        </ul>

        <h3 className="title" style={{ marginBottom: '10px' }}>
          Як замовити:
        </h3>

        <p className="description" style={{ marginBottom: '10px' }}>
          <b>
            Звертаєтесь до похоронного бюро «Проф Ритуал» за вказаними
            телефонами.
          </b>
        </p>

        <img
          className={s.memoryCodeImgDescription}
          src={MemoryCodeImgDescription}
          alt="MemoryCodeImgDescription"
        />
      </div>
    </section>
  );
};

export default SectionMemoryCode;
