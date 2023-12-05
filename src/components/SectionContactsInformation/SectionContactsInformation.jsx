import { IoLocationSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { TbMailFilled } from "react-icons/tb";
import GoogleMapReact from 'google-map-react';
import s from './SectionContactsInformation.module.scss';

const Marker = ({ text }) => (
  <div style={{ fontSize: '24px', color: 'red', textAlign: 'center' }}>
    <div style={{ marginBottom: '5px' }}>📍</div>
    {text}
  </div>
);

const SectionContactsInformation = () => {
  const mapCenter = {
    lat: 50.42753825395714,
    lng: 30.508565286504638,
  };

  const mapZoom = 15;

  return (
    <section className={s.sectionContactsInformation}>
      <div className={`container ${s.contactsInformation__container}`}>
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
          <MdPhone className={s.contactsInformation__icon} />
          <div>
            <h2 className={s.contactsInformation__titleList}>Телефони</h2>
            <ul className={s.contactsInformation__list}>
              <li className={s.contactsInformation__item}><a href="tel:+380442090261">+38 (044) 209-02-61</a></li>
              <li className={s.contactsInformation__item}><a href="tel:+380996813773">+38 (067) 011-21-60</a></li>
              <li className={s.contactsInformation__item}><a href="tel:+380736813773">+38 (093) 904-07-07</a></li>
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

        <div className={s.mapContainer}>
          <div style={{ height: '500px', width: '290px' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyBXj-AStZjPnU7wXm82txO2pj_QGR-KOio' }}
              defaultCenter={mapCenter}
              defaultZoom={mapZoom}
            >
              <Marker lat={mapCenter.lat} lng={mapCenter.lng} text="вул. Івана Федорова, 33" />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContactsInformation;
