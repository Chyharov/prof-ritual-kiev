import MortuaryServicesDecoration from '../../images/mortuaryServices/mortuaryServicesDecoration.jpg';
import s from './SectionMortuaryServices.module.scss';

const SectionMortuaryServices = () => {
  return (
    <section className={s.sectionMortuaryServices}>
      <div className={'container ' + s.mortuaryServices__container}>
        <img
          className={s.mortuaryServices__decoration}
          loading="lazy"
          src={MortuaryServicesDecoration}
          alt="mortuaryServices__decoration"
        />

        <h2 style={{ marginBottom: '10px' }} className="title">
          Послуги з перевезення та зберігання тіла
        </h2>

        <p style={{ marginBottom: '10px' }} className="description">
          Втрата близької людини завжди стає важким випробуванням. У цей момент
          важко приймати організаційні рішення. Похоронне бюро{' '}
          <b>«Проф Ритуал»</b> бере на себе всі клопоти, пов’язані з
          перевезенням, зберіганням та підготовкою тіла до поховання. Ми
          працюємо з повагою до пам’яті померлого та тактом до його родини.
        </p>

        <h2 style={{ marginBottom: '10px' }} className="title">
          Перевезення тіла
        </h2>

        <ul style={{ marginBottom: '10px' }} className="list">
          <li className="listItem">
            Оперативний виїзд за адресою (з дому, лікарні чи іншого місця).
          </li>
          <li className="listItem">
            Транспортування у спеціалізованому автомобілі з дотриманням
            санітарних норм.
          </li>
          <li className="listItem">
            Доставка тіла до холодильних камер за адресою:{' '}
            <b>м. Київ, вул. Івана Федорова, 33</b>.
          </li>
          <li className="listItem">
            За потреби — подальше транспортування до дому, зали прощання чи
            місця поховання.
          </li>
        </ul>

        <h2 style={{ marginBottom: '10px' }} className="title">
          Зберігання
        </h2>

        <p style={{ marginBottom: '10px' }} className="description">
          Для збереження належного стану тіло поміщається у холодильні камери з
          низькою температурою. Це дозволяє уникнути небажаних змін та зберегти
          тіло до дня поховання.
        </p>

        <h2 style={{ marginBottom: '10px' }} className="title">
          Підготовка до похорону
        </h2>

        <p style={{ marginBottom: '10px' }} className="description">
          Наші фахівці забезпечують повний комплекс послуг:
        </p>

        <ul style={{ marginBottom: '10px' }} className="list">
          <li className="listItem">санітарна та гігієнічна обробка;</li>
          <li className="listItem">антибактеріальна обробка;</li>
          <li className="listItem">омиття та одягання у поховальний одяг;</li>
          <li className="listItem">
            реконструкція зовнішності у випадку пошкоджень;
          </li>
          <li className="listItem">
            підготовка та укладання у труну для прощальної церемонії.
          </li>
        </ul>

        <h2 style={{ marginBottom: '10px' }} className="title">
          Додаткові ритуальні послуги
        </h2>

        <p style={{ marginBottom: '10px' }} className="description">
          У нашому бюро можна замовити:
        </p>

        <ul style={{ marginBottom: '10px' }} className="list">
          <li className="listItem">труни різних розмірів і матеріалів;</li>
          <li className="listItem">жалобні вінки, кошики, хустки;</li>
          <li className="listItem">траурну атрибутику.</li>
        </ul>

        <h2 style={{ marginBottom: '10px' }} className="title">
          Підтримка родини
        </h2>

        <p style={{ marginBottom: '10px' }} className="description">
          Ритуальні агенти «Проф Ритуал» мають багаторічний досвід і допоможуть
          уникнути труднощів при організації похорону. Ми врахуємо всі побажання
          родини та забезпечимо гідне проведення прощальної церемонії.
        </p>
      </div>
    </section>
  );
};

export default SectionMortuaryServices;
