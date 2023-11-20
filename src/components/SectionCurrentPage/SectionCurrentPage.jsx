import { Link } from 'react-router-dom';
import s from './SectionCurrentPage.module.scss';

const SectionCurrentPage = ({ title }) => {
  return (
    <section className={s.sectionCurrentPage}>
      <div className={'container ' + s.currentPage__container}>
        {title.map((item, index) => (
          <div key={index}>
            <p className={s.currentPage__description}><Link to="/">Головна</Link> / {item.title}</p>
            <h1 className={s.currentPage__title}>{item.title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionCurrentPage;
