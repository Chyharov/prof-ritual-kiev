import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import s from './SectionContactsInformation.module.scss'


const SectionContactsInformation = () => {
    return (
      <section className={s.sectionContactsInformation}>
        <div className={'container ' + s.contactsInformation__container}>
                <h1 className={s.contactsInformation__title}>Контакти</h1>

            <div className={s.flexflex}>
                    <IoLocationSharp className={s.contactsInformation__icon} />
                <div>
                    <h2 className={s.contactsInformation__titleList}>Адреси</h2>
                    <ul className={s.contactsInformation__list}>
                        <li className={s.contactsInformation__item}><a href="https://maps.app.goo.gl/oJiTr5byXTbS7jwj6" aria-label="Link for find location" target="_blank" rel="noopener noreferrer">м. Київ, вул. Івана Федорова, 33</a></li>
                        <li className={s.contactsInformation__item}><a href="https://maps.app.goo.gl/Pi6zGBgXvyVMbD837" aria-label="Link for find location" target="_blank" rel="noopener noreferrer">м. Київ, вул. Колоскова, 9</a></li>
                    </ul>
                </div>
            </div>

            <div className={s.flexflex}>
                    <FaPhone className={s.contactsInformation__icon} />
                <div>    
                <h2 className={s.contactsInformation__titleList}>Телефони</h2>
                <ul className={s.contactsInformation__list}>
                    <li className={s.contactsInformation__item}><a href="tel:+38(044)2092472">+38 (044) 209-24-72</a></li>
                    <li className={s.contactsInformation__item}><a href="tel:+38(099)6813773">+38 (099) 681-37-73</a></li>
                    <li className={s.contactsInformation__item}><a href="tel:+38(073)6813773">+38 (073) 681-37-73</a></li>
                    <li className={s.contactsInformation__item}><a href="tel:+38(098)5813773">+38 (098) 581-37-73</a></li>
                </ul>
                </div>
            </div>
                
            <div className={s.flexflex}>
                    <TbMailFilled className={s.contactsInformation__icon} />
                <div>
                <h2 className={s.contactsInformation__titleList}>Email</h2>
                <ul className={s.contactsInformation__list}>
                    <li className={s.contactsInformation__item}><a href="mailto:info@kievritual.com.ua" aria-label="Link for email">info@kievritual.com.ua</a></li>
                </ul>
                </div>
            </div>
        </div>
      </section>
  )
};

export default SectionContactsInformation;
