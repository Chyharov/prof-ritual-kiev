import RitualMonumentsDecoration from '../../images/RitualMonuments/RitualMonumentsDecoration.jpg'
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import s from './SectionAboutRitualMonuments.module.scss'


const SectionAboutRitualMonuments = () => {
    return (
      <section className={s.sectionAboutRitualMonuments}>
        <div className={'container ' + s.aboutRitualMonuments__container}>
        
            <img className={s.aboutRitualMonuments__decoration} loading="lazy" src={RitualMonumentsDecoration} alt="crosses__decoration" />

                <p style={{marginBottom: '20px'}} className={s.aboutRitualMonumentsPage__description}>Похоронне бюро «Проф Ритуал» <b>більше 10 років</b> працює у сфері ритуальних послуг і виготовлення надгробних пам’яток. Вибір пам’ятника це досить складне заняття для людини, особливо яка ніколи цього не робила. Наші агенти професіонали які зможуть розповісти вам про продукцію та допоможуть зробити будь-яку ритуальну пам’ятку, яка буде відповідати вашим побажанням. «Проф Ритуал» співпрацює з найкращими <b>художніми різьбярами, граверами, каменотесами та скульпторами</b> у місті Київ та Київській області. Наявність кваліфікованих фахівців дозволяють нам виконувати найскладніші замовлення та стислі терміни. Нижче ви зможете ознайомитися з прикладами робіт, зроблених майстрами від похоронного бюро «Проф Ритуал».</p>

        <SectionNeedHelp />

        </div>
      </section>
  )
};

export default SectionAboutRitualMonuments;
