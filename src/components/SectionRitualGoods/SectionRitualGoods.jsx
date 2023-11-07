import RitualGoodsDecoration from '../../images/RitualGoods/ritualGoodsDecoration.jpg'
import BntMoreDetail from 'components/BntMoreDetail/BntMoreDetail';
import s from './SectionRitualGoods.module.scss'



const SectionRitualGoods = () => {
    return (
      <section className={s.sectionRitualGoods}>
            <div className={'container ' + s.ritualGoods__container}>
                <img className={s.ritualGoods__decoration} loading="lazy" src={RitualGoodsDecoration} alt="ritualGoods__decoration" />

                <h2 className={s.ritualGoods__title}>Ритуальні товари</h2>

                <p className='description' style={{marginBottom: '15px'}}>Продажем ритуальних товарів та приладдя наша компанія займається вже <b>більше 10 років</b>. Все ритуальне приладдя, яке ми маємо в наявності, ви можете подивитися відвідавши нас за адресою вул. Перта Запорожця 13 у місті Київ.</p>
                
                <p className='description' style={{ marginBottom: '35px' }}>В наявності є більше <b>100 різних ритуальних товарів</b>, які ми продаємо за найнижчими цінами у місті Київ. При покупці ритуальної труни або ритуальних вінків ми робимо великі знижки на багато ритуальних речей.</p>
                
                <BntMoreDetail />
        </div>
      </section>
  )
};

export default SectionRitualGoods;
