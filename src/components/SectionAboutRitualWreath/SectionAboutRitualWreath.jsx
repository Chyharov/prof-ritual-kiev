import RitualWreathDecoration from '../../images/RitualWreath/RitualWreathDecoration.jpg'
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import s from './SectionAboutRitualWreath.module.scss'

const SectionAboutRitualWreath = () => {
    return (
      <section className={s.sectionAboutRitualWreath}>
        <div className={'container ' + s.AboutRitualWreath__container}>
                
            <img className={s.AboutRitualWreath__decoration} loading="lazy" src={RitualWreathDecoration} alt="ritualWreath__decoration" />

            <p className={s.AboutRitualWreath__description}>У компетенції похоронного бюро <b>“Профритуал”</b> супровід похорону у повному обсязі з наданням кваліфікованих медичних працівників, співробітників для навантаження-розвантаження труни з тілом, спецліфту, необхідного у похованні.</p>                
                
            <blockquote className={s.AboutRitualWreath__blockquote}> Ще один важливий момент, який не можна забувати з поля зору, це можливість проведення поховання або кремації без замовника. Бувають такі обставини, що людина, перебуваючи у стані стресу або маючи серйозні проблеми зі здоров’ям, не може бути при похованні, а похорон не терпить зволікання.</blockquote>
            
            <p className={s.AboutRitualWreath__description}>У цьому випадку ритуальні послуги, що надаються нашою похоронною агенцією, допоможуть вирішити цю проблему. Звернувшись до ритуального бюро, ви можете бути впевнені, що всі <b>необхідні процедури будуть дотримані</b> на найвищому рівні. До переліку наших послуг входить і організація церемонії фальшкремації.</p>
                
                <SectionNeedHelp />
                      
        </div>
      </section>
  )
};

export default SectionAboutRitualWreath;
