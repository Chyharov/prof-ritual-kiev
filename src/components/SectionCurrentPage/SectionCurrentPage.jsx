import { Link } from 'react-router-dom';
import s from './SectionCurrentPage.module.scss';


const SectionCurrentPage = () => {

  return (
    <section className={s.sectionCurrentPage}>
        <div className={'container ' + s.currentPage__container}>
            <p className={s.currentPage__description}><Link to="/">Головна</Link> / Ритуальні Послуги</p>
            <h1 className={s.currentPage__title}>Ритуальні Послуги</h1>
      </div>
    </section>
  )
};

export default SectionCurrentPage;
