import s from './SectionNeedHelp.module.scss'

const SectionNeedHelp = () => {
    return (
      <section className={s.sectionNeedHelp}>
        <div className={'container ' + s.needHelp__container}>
            <h2 className={s.needHelp__title}>Потрібна допомога? Замов зворотній зв’язок.</h2>
                
            <a className={s.needHelp__link} href="tel:+380996813773"><p className={s.needHelp__description}>+38 (099) 681-37-73</p></a>
        </div>
      </section>
  )
};

export default SectionNeedHelp;
