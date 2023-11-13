import { Link } from 'react-router-dom';
import s from './SectionCurrentPage.module.scss';


const SectionCurrentPage = ( {title} ) => {

  return (
    <section className={s.sectionCurrentPage}>
      {title.map((title) => (  
        <div className={'container ' + s.currentPage__container}>
          <p className={s.currentPage__description}><Link to="/">Головна</Link> / {title.title}</p>
          <h1 className={s.currentPage__title}>{title.title}</h1>
        </div>
      ))}
    </section>
  )
};

export default SectionCurrentPage;
