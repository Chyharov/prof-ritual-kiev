import { Link } from 'react-router-dom';
import BntMoreDetail from 'components/BntMoreDetail/BntMoreDetail';
import s from './SectionRitualGoods.module.scss'



const SectionRitualGoods = () => {
    return (
      <section className={s.sectionRitualGoods}>
        <div className={'container ' + s.ritualGoods__container}>
          <div className={s.ritualGoods__decoration} loading="lazy">
          </div>

          <div className={s.ritualGoods__DescriprionContainer}>
            <h2 className={s.ritualGoods__title}>Ритуальні товари</h2>

            <p className={s.ritualGoods__description}>Продажем ритуальних товарів та приладдя наше похоронне бюро займається вже <b>понад 20 років</b>. Все ритуальне приладдя, яке ми маємо в наявності, ви можете подивитися відвідавши нас за адресою вул. Івана Федорова 33 у місті Київ.</p>
                
            <p className={s.ritualGoods__description} style={{ marginBottom: '35px' }}>В наявності є більше <b>100 різних ритуальних товарів</b>, які ми продаємо за найнижчими цінами у місті Київ. При покупці ритуальної труни або ритуальних вінків ми робимо великі знижки на багато ритуальних речей.</p>
                
            <Link to="/ritualgoods"><BntMoreDetail /></Link>
          </div>
                
        </div>
      </section>
  )
};

export default SectionRitualGoods;
