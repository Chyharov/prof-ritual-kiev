import { servicesInformationList } from 'services/servicesInformationList';
import s from './SectionServicesInformation.module.scss'


const SectionServicesInformation = () => {
    return (
      <section className={s.sectionServicesInformation}>
        <div className={'container ' + s.servicesInformation__container}>
                
        <ul className={s.servicesInformationlist}>
            {servicesInformationList.map((item) => (
            <li className={s.servicesInformationItem} key={item.id}>
                    
                <h2 className={s.servicesInformation__title}>
                <img
                    className={s.servicesInformation__decoration}
                    loading="lazy"
                    id={item.id}
                    src={item.titleDecorationSec}
                    alt={item.titleDecorationAlt}
                />
                {item.title}
                </h2>
                    
                <ul className={s.servicesInformation__list}>
                {item.servicesInformationItem.map((detail, index) => (
                    <li className={s.servicesInformation__item} key={index}>

                        <div className={s.servicesInformation__itemContainer}>
                            <h3 className={s.servicesInformation__itemTitle}>{detail.servicesInformationTitle}</h3>
                            
                            <p className={s.servicesInformation__itemPrice}><em className={s.servicesInformation__itemPriceValue}>{detail.servicesInformationMin}</em>{detail.servicesInformationPrice}
                                <em className={s.servicesInformation__itemPriceValue}>{detail.servicesInformationCurrency}</em><br/>
                                <em className={s.servicesInformation__itemPriceValue}>{detail.servicesInformationCheck}</em>
                            </p>
                        </div>
                            
                        <ul className={s.servicesInformation__itemList}>
                            {detail.servicesInformationCurrencyItem.map((description, idx) => (
                            <li className={'description ' + s.servicesInformation__itemListItem} key={idx}>
                                {description}
                            </li>
                            ))}
                        </ul>

                    </li>
                ))}
                </ul>
                    
            </li>
            ))}
        </ul>        
        
            <p className={s.servicesInformation__description}><span className={s.servicesInformation__span}>*</span>Для біженців, переселенців і військовіх діють знижки.</p>
        
        </div>
            
      </section>
  )
};

export default SectionServicesInformation;