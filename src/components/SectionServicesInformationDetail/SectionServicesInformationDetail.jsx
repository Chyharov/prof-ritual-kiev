import s from './SectionServicesInformationDetail.module.scss'


const SectionServicesInformationDetail = () => {
    return (
      <section className={s.sectionServicesInformationDetail}>
        <div className={'container ' + s.servicesInformationDetail__container}>

            <p className={s.sectionServicesInformation__description}><b>Похоронне бюро</b> «Проф Ритуал» надає якісні ритуальні послуги оперативно, надійно та з прийнятним рівнем вартості, доступним для всіх. Втрата близької людини нелегкий тягар, який важко пережити і змиритися, тому Організація похоронуу повинна бути на високому рівні і не зачіпати почуття рідних.</p>

            <ul className={s.servicesInformationDetail__list}>
                <li className={s.servicesInformationDetail__listItem}>
                    <h2 className={s.servicesInformationDetail__listItem_title}>Головні ритуальні послуги</h2>
                    <p className={s.sectionServicesInformation__description}><b>Ритуальний дім</b> «Проф Ритуал» готовий допомогти перенести важку подію, принесе найглибші співчуття та запропонує підтримку в організації похорону чи кремації. <b>Похоронне бюро</b> організовує повний спектр <b>ритуальних послуг</b>, серед яких:</p>
                
                    <ol className={s.servicesInformationDetail__listItem_descriptionList}>
                        <li className={s.servicesInformationDetail__listItem_descriptionItem}>Організація похоронуу та підготовка необхідних документів;</li>
                        <li className={s.servicesInformationDetail__listItem_descriptionItem}>поминальні обіди;</li>
                        <li className={s.servicesInformationDetail__listItem_descriptionItem}>надання ритуального транспорту;</li>
                        <li className={s.servicesInformationDetail__listItem_descriptionItem}>оренда ритуального залу з відповідним музичним супроводом;</li>
                        <li className={s.servicesInformationDetail__listItem_descriptionItem}>вантаж 200;</li>
                        <li className={s.servicesInformationDetail__listItem_descriptionItem}>транспортування тіла, вирішення питань із захороненням.</li>
                    </ol>
                
                    <p className={s.sectionServicesInformation__description}>Крім того, <b>ритуальні послуги Київ</b> надають різноманітність вибору вінків, трун, хрестів та приладдя. За бажанням рідних, <b>агенція ритуальних послуг</b> запропонує оптимальний варіант пам’ятника, щоб вшанувати пам’ять гарною прикрасою могили.</p>
                </li> 
                    
                <li className={s.servicesInformationDetail__listItem}>
                        <h2 className={s.servicesInformationDetail__listItem_title}>Особливості роботи</h2>
                        <p className={s.sectionServicesInformation__description}>Співробітники агентства тактовно та в повністю коректній формі допомагають родичам заспокоїтися, забезпечують моральну підтримку та консультують з питань, що цікавлять. Все документальне оформлення, на яке немає сил, <b>ритуальний будинок</b> «Проф Ритуал» бере на себе, незалежно від того, <b>правий берег</b>  Києва чи <b>лівий берег</b>.</p>
                    
                        <p className={s.sectionServicesInformation__description}><b>Ритуальні послуги за оптимальними цінами</b> надаються досвідченими фахівцями, які враховують нюанси процесій, забезпечують супровід та транспортування у потрібне місце. Співробітники подбають про гідну організацію та проведення похорону, надаючи консультації з окремих питань.</p>
                </li> 
            
                <li className={s.servicesInformationDetail__listItem}>
                        <h2 className={s.servicesInformationDetail__listItem_title}>Переваги ритуальної служби</h2>
                        <p className={s.sectionServicesInformation__description}>Похоронне бюро «Проф Ритуал» працює цілодобово, без перерв та вихідних, надаючи спочатку консультацію по телефону, а також пропонуючи агента додому, який також може приїхати 24 години на добу. Перша консультація надається абсолютно безкоштовно, а за потребою агенція може надати медичну та психологічну допомогу. Усі бюрократичні формальності, необхідні проведення похорону, ритуальна служба перебирає.</p>
                    
                        <p className={s.sectionServicesInformation__description}>Також до завдань ритуального агента входить підбір та визначення місця для поховання або проведення кремації. Співробітник допомагає вибрати труну, хрести на могилу, вінки та багато іншого.</p>
                </li> 
                
                <li className={s.servicesInformationDetail__listItem}>
                        <h2 className={s.servicesInformationDetail__listItem_title}>Переваги ритуальної служби такі:</h2>

                        <ol className={s.servicesInformationDetail__listItem_descriptionList}>
                            <li className={s.servicesInformationDetail__listItem_descriptionItem}>робота проводиться цілодобово, без перерв та вихідних;</li>
                            <li className={s.servicesInformationDetail__listItem_descriptionItem}>доступна консультація в телефонному режимі та виїзд ритуального агента додому;</li>
                            <li className={s.servicesInformationDetail__listItem_descriptionItem}>оформлення документації та всіх бюрократичних питань у найкоротші терміни;</li>
                            <li className={s.servicesInformationDetail__listItem_descriptionItem}>широкий асортимент трун, хрестів, вінків та інших похоронних реквізитів;</li>
                            <li className={s.servicesInformationDetail__listItem_descriptionItem}>контроль організації та проведення всіх траурних процесій.</li>
                        </ol>
                    
                        <p className={s.sectionServicesInformation__description}>Ритуальне агентство «Проф Ритуал» надасть потрібну допомогу та підтримку у складний період, організовуючи гідний похорон близької людини.</p>
                </li> 
            </ul>
        </div>
      </section>
  )
};

export default SectionServicesInformationDetail;
