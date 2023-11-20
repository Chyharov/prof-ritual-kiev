import s from './SectionTransportationByPlane.module.scss'

const SectionTransportationByPlane = () => {
    return (
      <section className={s.sectionTransportationByPlane}>
        <div className={'container ' + s.transportationByPlane__container}>

          <h2 className={s.transportationByPlane__title}>Перевезення померлих (Вантаж 200) літаком</h2>
            
          <p className={s.transportationByPlane__description}>Потрібно забезпечити здачу цинкової труни у вантажний термінал не пізніше ніж за 4-6 годин до відправлення. Слід зазначити, що чартерні рейси що неспроможні здійснювати перевезення тіла.</p>
                
          <blockquote className={s.transportationByPlane__blockquote}>
            <p> Якщо транспортування можливе виключно за допомогою залізниці, необхідно з’ясувати, чи є в пасажирському складі вагон для багажу. Тільки в цьому випадку перевезти вантаж 200 буде можливо. Серед інших способів транспортування автоперевезення має переваги: ​​тіло доставляють безпосередньо до пункту призначення.</p>
          </blockquote>
          

          <p className={s.transportationByPlane__description}>Звертаючись до похоронного бюро “Профритуал”, ви зможете <b>уберегти свої нерви від зайвого стресу</b>. Ми доставимо тіло покійного та проведемо всі необхідні процедури з підготовки прощального ритуалу. Вам залишиться лише проводити його в інший світ.</p>

          <h2 className={s.transportationByPlane__title}>Як замовити Вантаж 200?</h2>

          <p className={s.transportationByPlane__description}>Ми радимо вам зателефонувати нам (у будь-який час доби) та замовити агента додому, ця послуга безкоштовна. На місці наш агент зможе вирішити логічне питання та надати вам конкретні терміни та план дій. Якщо вас буде влаштовувати план дій, то замовити та оформити послугу можна буде з нашим агентом на місці.</p>
          
          <h2 className={s.transportationByPlane__title}>Що відбувається після замовлення.</h2>

          <p className={s.transportationByPlane__description}>Наш агент контролює кожен етап та бере відповідальність перевезення на себе. За <b>8 років</b> наше похоронне бюро Профритуал завжди вкладалося у терміни під час перевезення Вантаж 200. При проходженні кожного етапу ми сповіщаємо вас. У разі потреби наш агент супроводжує Вантаж 200 із зазначеного місця у пункт призначення.</p>

          <h2 className={s.transportationByPlane__title}>Клієнти, які замовляли послугу “Вантаж 200”, також цікавилися:</h2>


          <ul className={s.transportationByPlane__list}>
            <li className={s.transportationByPlane__item}><a className={s.transportationByPlane__link} href="/">Викликом агента додому</a></li>
            <li className={s.transportationByPlane__item}><a className={s.transportationByPlane__link} href="/">Поминальним обідом</a></li>
            <li className={s.transportationByPlane__item}><a className={s.transportationByPlane__link} href="/">Орендою ритуального залу</a></li>
            <li className={s.transportationByPlane__item}><a className={s.transportationByPlane__link} href="/">Трунами</a></li>
          </ul>

        </div>
      </section>
  )
};

export default SectionTransportationByPlane;
