import MakingFuneralPortraitDecoration from '../../images/MakingFuneralPortrait/MakingFuneralPortrait.jpg'
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import s from './SectionAboutMakingFuneralPortrait.module.scss'

const SectionAboutMakingFuneralPortrait = () => {
    return (
      <section className={s.sectionAboutMakingFuneralPortrait}>
        <div className={'container ' + s.aboutMakingFuneralPortrait__container}>
                
            <img className={s.aboutMakingFuneralPortrait__decoration} loading="lazy" src={MakingFuneralPortraitDecoration} alt="makingFuneralPortraitDecoration__decoration" />

            <p className={s.aboutMakingFuneralPortrait__description}>Похоронна церемонія вимагає сьогодні <b>багато атрибутики</b>. Особливе місце займає нині фото покійного, зазвичай перев’язане чорною стрічкою. Такий фотопортрет є символом пам’яті та скорботи про померлу людину.</p>                
                
            <p className={s.aboutMakingFuneralPortrait__description}>Наше агентство пропонує <b>допомогу у виготовленні фотопортрету</b> із наданої вами фотографії. За бажанням ми можемо зробити фотопортрет у різній кількості та розмірах. Можлива репродукція фото із збільшенням.</p>
                
                <SectionNeedHelp />
                      
        </div>
      </section>
  )
};

export default SectionAboutMakingFuneralPortrait;
