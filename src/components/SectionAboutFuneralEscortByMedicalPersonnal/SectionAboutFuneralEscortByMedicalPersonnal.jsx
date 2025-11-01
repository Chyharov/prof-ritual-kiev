import FuneralEscortByMedicalPersonnalDecoration from '../../watermarked/FuneralEscortByMedicalPersonnal/FuneralEscortByMedicalPersonnal.jpg'
import s from './SectionAboutFuneralEscortByMedicalPersonnal.module.scss'

const SectionAboutFuneralEscortByMedicalPersonnal = () => {
    return (
      <section className={s.sectionAboutFuneralEscortByMedicalPersonnal}>
        <div className={'container ' + s.aboutFuneralEscortByMedicalPersonnal__container}>
                
            <img className={s.aboutFuneralEscortByMedicalPersonnal__decoration} loading="lazy" src={FuneralEscortByMedicalPersonnalDecoration} alt="funeralEscortByMedicalPersonnal__decoration" />

            <p className='description'>У компетенції похоронного бюро <b>«Проф Ритуал»</b> супровід похорону у повному обсязі з наданням кваліфікованих медичних працівників, співробітників для навантаження-розвантаження труни з тілом, спецліфту, необхідного у похованні.</p>                
                
            <blockquote className='blockquote'> Ще один важливий момент, який не можна забувати з поля зору, це можливість проведення поховання або кремації без замовника. Бувають такі обставини, що людина, перебуваючи у стані стресу або маючи серйозні проблеми зі здоров’ям, не може бути при похованні, а похорон не терпить зволікання.</blockquote>
            
             <p className='description'>У цьому випадку ритуальні послуги, що надаються нашою похоронною агенцією, допоможуть вирішити цю проблему. Звернувшись до ритуального бюро, ви можете бути впевнені, що всі <b>необхідні процедури будуть дотримані</b> на найвищому рівні. До переліку наших послуг входить і організація церемонії фальшкремації.</p>
                      
        </div>
      </section>
  )
};

export default SectionAboutFuneralEscortByMedicalPersonnal;
