import { Link } from 'react-router-dom';
import RequiemServiceByPriestDecoration from '../../images/RequiemServiceByPriest/RequiemServiceByPriestDecoration.jpg'
import s from './SectionAboutRequiemServiceByPriest.module.scss'

const SectionAboutRequiemServiceByPriest = () => {
    return (
      <section className={s.sectionAboutRequiemServiceByPriest}>
        <div className={'container ' + s.aboutRequiemServiceByPriest__container}>
                
            <img className={s.aboutRequiemServiceByPriest__decoration} loading="lazy" src={RequiemServiceByPriestDecoration} alt="aboutRequiemServiceByPriest__decoration" />

            <h2 style={{marginBottom: '10px'}} className='title'>Священне відспівування померлого</h2>

            <p style={{marginBottom: '10px'}} className='description'>Церква як тіло Христове, як сукупність живих і померлих у Христі, може за благодаттю, даною їй від Бога, молитися за померлих, приносити за них безкровне жертвопринесення (виймати частинки з просфор на проскомідії літургії), проводжати в останній шлях особливим чином молитов – відспівуванням служити панахиди, літії, вечірні заупокійні служби (парастаси).</p>                
                
            <h2 style={{marginBottom: '10px'}} className='title'>Ритуал відспівування померлого</h2>

            <p style={{marginBottom: '10px'}} className='description'>На третій день після смерті померлий православний християнин удостоюється церковного відспівування та поховання.</p>

            <p style={{marginBottom: '10px'}} className='description'><b>Відспівування</b> – це заупокійне богослужіння, яке одного разу відбувається над тілом померлого. Значення цього богослужіння настільки велике, що у давнину відносили його до церковних Таїнств і надавали особливого містичного значення. І, дійсно, крім звичайних заупокійних молитвослів’їв, над померлим читається (обов’язково священиком) <b>дозвільна молитва</b>, в якій прощаються померлому клятви, що були на ньому, а також гріхи, в яких він покаявся на сповіді або забув покаятися через незнання, і померлий зі світом відпустки потойбічне життя. Текст цієї молитви відразу вкладається в праву руку померлого його рідними чи близькими.</p>

            <blockquote style={{marginBottom: '10px'}} className='blockquote'>Якщо молитва не прочитана священиком над покійним, а просто вкладена родичами в руку покійного, вона ніякої сили не має і ніякої ролі не відіграє. Відспівування може бути здійснене лише православним священиком, який має наступну </blockquote>

            <p style={{marginBottom: '10px'}} className='description'>Про силу та містичне значення відспівування свідчать численні випадки явища покійних не відпетих християн своїм родичам або близьким із проханням здійснити це заупокійне богослужіння. Без відспівування душа християнина не знаходить спокою. І якщо немає можливості здійснити очне відспівування над тілом покійного, через відсутність священика або відсутність самого тіла (людина потонула, згоріла і т.д.), то необхідно якнайшвидше заочно відспівати покійного в церкві. Отриману після відспівування землю необхідно хрестоподібно висипати на могилу померлого зі словами: “В ім’я Отця і Сина і Святого Духа”.</p>
                
            <h2 style={{marginBottom: '10px'}} className='title'>Як правильно відпивати померлого</h2>    

            <p style={{marginBottom: '10px'}} className='description'>Відспівування (і взагалі будь-яке церковне поминання) <b>не відбувається при похованні нехрещених</b>, тобто тих, хто не належить Церкві. Рідні та близькі самі моляться за них у домашніх молитвах, подають заради них милостиню, каються на сповіді, що не сприяли їхньому хрещенню. Дехто вважає за корисне читання за померлих нехрещених людей канон мученикові Уару, якому було дано благодать ”вмолити за померлі Клеопатрини прабатьки, які не сподобилися прийняти Святе Хрещення”.</p>

            <p style={{marginBottom: '10px'}} className='description'><b>Не відспівуються за православним чином також інославні</b> (люди не православної віри), а також хрещені, але зрікалися віри, що ведуть до смерті богоборче життя або заповідали за життя не відспівувати їх у разі смерті.</p>

            <p style={{marginBottom: '10px'}} className='description'><b>Не співає Церква і самогубців, за винятком особливих випадків</b>, наприклад, при несамовитості того, хто наклав на себе руки, але і це відбувається лише з благословення правлячого архієрея, для чого на його ім’я пишеться прохання з докладним зазначенням причини смерті.</p>

            <p style={{marginBottom: '10px'}} className='description'>У проханні не потрібно спотворювати факти з метою виправдати самогубця: якщо ви отримаєте дозвіл на відспівування обманним шляхом, то покійному це не допоможе, а на вас ляже тяжкий гріх. Про самогубця необхідно виконувати домашні молитви, зокрема, з благословення священика можна читати канон “Про самовільне життя померлих”, Євангеліє або Псалтир. Але пам’ятайте: молитви за самогубців викликають найсильнішу містичну боротьбу з боку демонів на читача, тому <b>треба правильно розраховувати свої духовні сили та діяти лише з благословення духовника</b>. Велику допомогу покійній душі грішника надає милостиня та інші добрі справи на згадку про його творені. Не нехтуйте ними!</p>
                
            <p style={{marginBottom: '10px'}} className='description'><b>Не відспівуються також мертвонароджені або вбиті в утробі немовлята</b>, тому що вони не були долучені до Церкви через Таїнство Хрещення. Побутова думка, що в храмі не можна відспівувати жінок, які померли під час пологів або під час сорокаденного післяпологового очищення, невірна. Померлих від інфекційних захворювань у храмі не співають. Це можна зробити в будинку померлого або на місці поховання. Найприйнятніше в даному випадку – відспівати почиваючого заочно. Перед внесенням труни до храму у покійного розв’язують руки та ноги, труну заносять ногами вперед. У церкві тіло покійного ставиться обличчям до вівтаря, тобто ногами Схід – до вівтаря, головою – на захід.</p>
                
            <h2 style={{marginBottom: '10px'}} className='title'>Прощення з померлим</h2>
                
            <p style={{marginBottom: '10px'}} className='description'>При прощанні з померлим, які проводжають померлого в останню дорогу, загасивши свічки, обходять труну з тілом, роблять хресне знамення з поклоном, просять у спочиваючого за заподіяні образи, цілують віночок на лобі та ікону, розташовану на грудях. Після прощання ікона з труни виймається, тіло повністю закривається покривалом, священик хрестоподібно посипає його землею зі словами “Господня земля і виконання її всесвіт і всі, хто живе на ній”, труна закривається кришкою, після чого вже не відкривається.</p>

            <blockquote style={{marginBottom: '10px'}} className='blockquote'> У деяких місцях існує звичай залишати в храмі ікони, вийняті з труни, до виконання 40 днів після смерті, потім родичі забирають їх додому. Цей звичай не має під собою жодного містичного чи духовного обґрунтування, тому, щоб уникнути непорозумінь, які часто виникають у храмі при втраті цих ікон, краще від нього утриматися.</blockquote>

            <p style={{marginBottom: '10px'}} className='description'>Виносять труну з храму обличчям до виходу (ногами наперед). При цьому співається “Трисвяте”.</p>
                
            <h2 style={{marginBottom: '10px'}} className='title'>Чому важливо знати як правильно відпивати померлого</h2>
            
            <p style={{marginBottom: '10px'}} className='description'>Якщо покійний чоловік був віруючим, ховати його треба правильним звичаям. <Link className='links' to="/ritualagent">Наші агенти</Link> упереджено знають звичаї всіх релігій які вони вам можуть розповісти якщо ви їх викличте додому. Таким чином ви зможете зрозуміти як правильно і з найбільшою повагою супроводити близьку вам людину. Ми також рекомендуємо замовити <Link className='links' to="/funeralorganization">організатора похорону</Link> який стежитиме за тим, щоб усі обряди були здійснені належним чином.</p>
                
            <h3 style={{marginBottom: '10px'}} className='titleSmall'>Клієнти, які замовляли з нами оренду ритуального залу, так само цікавилися:</h3>
                
            <ul style={{ marginBottom: '10px' }} className='list'>
                <li style={{marginBottom: '10px'}}><Link className='links' to="/ritualhall">Орендою ритуального залу</Link></li>
                <li style={{marginBottom: '10px'}}><Link className='links' to="/documentsforfuneral">Оформлення документів</Link></li>
                <li style={{marginBottom: '10px'}}><Link className='links' to="/hearse">Ритуальний транспорт</Link></li>
                <li style={{marginBottom: '10px'}}><Link className='links' to="/memorialdinners">Поминальний обід у Києві</Link></li>  
            </ul>
                       
        </div>
      </section>
  )
};

export default SectionAboutRequiemServiceByPriest;
