import s from './SectionAboutMortuaryServices.module.scss'

const SectionAboutMortuaryServices = () => {
    return (
      <section className={s.sectionAboutMortuaryServices}>
        <div className={'container ' + s.aboutMortuaryServices__container}>

            <h2 className={s.aboutMortuaryServices__titleFirst}>Похоронне бюро Профритуал надає послуги моргу та комплекс супровідних послуг:</h2>
            
            <ul className={s.aboutMortuaryServices__list}>
                <li><p className={s.aboutMortuaryServices__description}>Навантаження та перевезення тіла будь-якої складності.</p></li>
                <li><p className={s.aboutMortuaryServices__description}>Транспортування тіла до моргу, з моргу до будинку або до місця поховання, до жалобної зали для прощання з родичами та близькими людьми.</p></li>
                <li><p className={s.aboutMortuaryServices__description}>Бальзамування тіла.</p></li>
                <li><p className={s.aboutMortuaryServices__description}>Реконструкція та відновлення дефектів обличчя та тіла після передсмертної деформації.</p></li>
                <li><p className={s.aboutMortuaryServices__description}>Зберігання тіла у спеціалізованому холодильнику протягом потрібного часу.</p></li>
                <li><p className={s.aboutMortuaryServices__description}>Формалінова дезодорація дозволяє усунути запах гниття тіла.</p></li>
                <li><p className={s.aboutMortuaryServices__description}>Фахівці віддадуть тіло санітарній та гігієнічній обробці.</p></li>
                <li><p className={s.aboutMortuaryServices__description}>Працівники моргу помиють і переодягнуть померлого в одяг для проведення похорону.</p></li>
            </ul>
                
                <blockquote className={s.aboutMortuaryServices__blockquote}>
                    <p>Якісною косметикою зроблять посмертний макіяж і по необхідності пострижуть, поголять або покладуть волосся. Покладуть померлого в труну і приготують до прощальної церемонії та похорону.</p>
                </blockquote>
            
            <h2 className={s.aboutMortuaryServices__title}>Доставка тіла в морг</h2>
                
            <p className={s.aboutMortuaryServices__description}>Перевезення тіла в морг в Києві відбувається в короткі терміни і на оснащеному та закріпленій полицею автомобілі. Тіло транспортують з будь-якої точки міста та передмістя. Похоронні вінки та траурну атрибутику можна придбати у нашому похоронному бюро. Широкий асортимент та доступні ціни дають можливість вибору <b>вінків, кошиків, хусток</b>. Також великий вибір трун, можна замовити труну будь-якого розміру, виготовлену з різного дерева.</p>

            <p className={s.aboutMortuaryServices__description}>Супровід, перевезення тіла до моргу та всі похоронні заходи допоможуть організувати наші ритуальні агенти. Багаторічний досвід наших співробітників дозволяє уникнути непередбачених <b>неприємностей на похороні</b>. Вони приведуть у дію будь-які Ваші побажання або передсмертні побажання покійного. Родичам набагато легше перенести прикрощі втрати, коли організацією похорону займається наше похоронне бюро.</p>

        </div>
      </section>
  )
};

export default SectionAboutMortuaryServices;
