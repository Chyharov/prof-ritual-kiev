import React, { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { MdPhone } from 'react-icons/md';
import { TbMailFilled } from 'react-icons/tb';
import GoogleMapReact from 'google-map-react';
import s from './SectionContactsInformation.module.scss';

const Marker = ({ text }) => (
  <div style={{ fontSize: '24px', color: 'red', textAlign: 'center' }}>
    <div style={{ marginBottom: '5px' }}>📍</div>
    {text}
  </div>
);

const SectionContactsInformation = () => {
  const [markerPosition, setMarkerPosition] = useState({
    lat: 50.42753825395714,
    lng: 30.508565286504638,
  });

  const mapCenter = {
    lat: 50.42753825395714,
    lng: 30.508565286504638,
  };

  const mapZoom = 15;

  const handleMapChange = ({ center }) => {
    setMarkerPosition({ lat: center.lat, lng: center.lng });
  };

  return (
    <section className={s.sectionContactsInformation}>
      <div className={`container ${s.contactsInformation__container}`}>
        
        <div className={s.contactsInformationList__container}>

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
                <li className={s.contactsInformation__item}><a href="tel:+380675233540" aria-label="Call agent">+38 (067) 523-35-40</a></li>
                <li className={s.contactsInformation__item}><a href="tel:+380996813773" aria-label="Call agent">+38 (099) 681-37-73</a></li>
              </ul>
            </div>
          </div>

          <div className={s.flexflex}>
            <TbMailFilled className={s.contactsInformation__icon} />
            <div>
              <h2 className={s.contactsInformation__titleList}>Email</h2>
              <ul className={s.contactsInformation__list}>
                <li className={s.contactsInformation__item}><a href="mailto:ritualomega33@gmail.com" aria-label="Link for email">ritualomega33@gmail.com</a></li>
              </ul>
            </div>
          </div>
        
        </div>

        <div className={s.mapContainer}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBXj-AStZjPnU7wXm82txO2pj_QGR-KOio' }}
            defaultCenter={mapCenter}
            defaultZoom={mapZoom}
            onChange={handleMapChange}
          >
            <Marker lat={markerPosition.lat} lng={markerPosition.lng} text="вул. Івана Федорова, 33" />
          </GoogleMapReact>
        </div>

      </div>
    </section>
  );
};

export default SectionContactsInformation;
