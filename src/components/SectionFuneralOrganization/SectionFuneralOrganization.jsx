import FuneralOrganization from '../../images/FuneralOrganization/FuneralOrganization.jpg'
import s from './SectionFuneralOrganization.module.scss'



const SectionFuneralOrganization = () => {
    return (
      <section className={s.sectionFuneralOrganization}>
        <div className={'container ' + s.funeralOrganization__container}>
                
            <img className={s.funeralOrganization__decoration} loading="lazy" src={FuneralOrganization} alt="funeralOrganization__decoration" />
                
            <h2 className={s.funeralOrganization__title}>Організатор похорон Київ та Київська область</h2>

            <p className={s.funeralOrganization__description}>Пріоритетним напрямком діяльності нашої компанії є якісна організація похорону київ «під ключ» – від збору документів у відповідних інстанціях, необхідних для проведення похорону до самого похоронного обряду та поминальної трапези.</p>
        

            <blockquote className={s.funeralOrganization__blockquote}>
                Наша компанія займається організацією похорону різних цінових категорій – від скромних економних обрядів до <b>VIP-похоронів</b>, які можуть включати супровід машинами ДАІ. Цінова політика нашого агентства дозволяє нам підтримувати широкий спектр цін, що робить наші послуги доступними для більшості верств населення.
            </blockquote>
                
            <h2 className={s.funeralOrganization__title}>Професійна допомога від компанії «Профритуал»</h2>
            
            <p className={s.funeralOrganization__description}>У важкі моменти життя, коли у вас немає часу, сил і бажання займатися формальностями, наш похоронний агент готовий взяти всі турботи щодо організації похорону на себе, а все, що від вас вимагатиметься — зв’язатися з ним і висловити свої побажання та повідомити всі необхідні подробиці.</p>


            <p className={s.funeralOrganization__description}><b>Ми пропонуємо широкий спектр послуг</b>, пов’язаний з організацією похорону, включаючи вирішення питань транспортування тіла та близьких покійного, вирішення питань з місцем поховання або кремації, проведення похоронної церемонії відповідно до релігійних традицій, яких померлий дотримувався, проведення поминальної трапези. У випадку, якщо ви викличете нашого агента відразу після виявлення тіла, всі необхідні дзвінки до поліції, швидку допомогу наш співробітник також візьме на себе.</p>
                
        </div>
      </section>
  )
};

export default SectionFuneralOrganization;
