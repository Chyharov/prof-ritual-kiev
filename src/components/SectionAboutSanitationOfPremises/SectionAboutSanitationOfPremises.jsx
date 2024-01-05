import SanitationOfPremisesDecoration from '../../images/SanitationOfPremises/SanitationOfPremises.jpg'
import s from './SectionAboutSanitationOfPremises.module.scss'

const SectionAboutSanitationOfPremises = () => {
    return (
      <section className={s.sectionAboutSanitationOfPremises}>
        <div className={'container ' + s.aboutSanitationOfPremises__container}>
                
          <img className={s.aboutSanitationOfPremises__decoration} loading="lazy" src={SanitationOfPremisesDecoration} alt="aboutSanitationOfPremises__decoration" />

          <h2 style={{ marginTop: '10px' }} className='title'>Дезобробка приміщень після похорону</h2>

          <p style={{ marginTop: '10px' }} className='description'>Дезінфекція приміщень – це комплекс методик спрямованого на боротьбу переносниками та збудниками небезпечних захворювань. На сьогоднішній день асортимент засобів для дезінфекції настільки великий, що для простого споживача легко заплутатися в асортименті гелів, порошків, спреїв, ламп тощо. і розібратися, що для чого часом дуже важко. Однак дуже важливо без помилково вибрати метод <b>розчин і засоби захисту</b>, щоб мінімізувати ймовірність заражень вірусами або ж не отримати отруєння від використання засобів для дезінфекції приміщення.</p>                
                
          <blockquote style={{ marginTop: '10px' }} className='blockquote'> Наша компанія протягом кількох років надає таку послугу дезінфекція приміщень та <b>якість наших робіт завжди відмінна</b>. Нові технології дозволяють проводити дезінфекцію приміщень без зупинки робочого прочісування. У кінцевому результаті правильно проведенні дезінфекції приміщення це позбавлення всіх видів хвороботворних бактерій вірусів тощо. буд. Дезінфекція приміщення, зазвичай, підрозділяється кількома категорій.</blockquote>

          <p style={{ marginTop: '10px' }} className='description'>Запобіжна <b>аеро-профілактична</b>, має на увазі комплекс заходів щодо запобігання епідеміям, дезінфекція об’єктів передбачуваних хвороботворних збудників. Як правило, проводиться у місцях загального користування, таких як сауна, басейн, школи, дитячі садки тощо.</p>

          <p style={{ marginTop: '10px' }} className='description'>Осередкова дезінфекція (заключна) приміщення проводиться у місцях підвищеної небезпеки здоров’ю. Наприклад, де знаходилася хвора людина з захворюванням, що передається <b>повітряно крапельним шляхом</b> таких як: (туберкульоз шкіри, туберкульоз органів дихання, атипова пневмонія (SARS), ангіна, черевний тиф і паратифи А і В, вакцинна екзема, вірусні гепатити, гонорея, грип (H1N1), дизентерія, дифтерія кліщовий спірохетоз, кашлюк, віспа, краснуха, віспа вітряна, харчові токсикоінфекції, псевдотуберкульоз, пташиний грип, сальмонельоз, стафілококові захворювання корости) і це лише мала частина вірусних захворювань, які</p>

          <p style={{marginBottom: '20px'}} className='description'>Проведення заключної дезінфекції приміщення проводиться один раз після одужання або летального результату. У цій дезінфекції приміщення використовуються <b>механічний хімічний та фізичний способи впливу</b>.</p>
                
          <p style={{ marginTop: '10px' }} className='description'>Ми надаємо клінінгові послуги, до яких входить дезінфекція приміщень різного призначення. Кваліфіковані фахівці нашої компанії якісно та вчасно зроблять усі необхідні роботи з використанням сучасного обладнання та екологічно безпечних засобів.</p>    

          <h2 style={{ marginTop: '10px' }} className='title'>Своєчасна дезінфекція офісів</h2>
                
          <p style={{ marginTop: '10px' }} className='description'>Цей процес лежить в основі створення здорових умов праці та дозволяє уникнути проблем із перевіряючими інстанціями та значних витрат надалі. Особливої ​​уваги потребує також дезінфекція харчових підприємств та торгових площ із великою прохідністю.</p>

          <blockquote style={{ marginTop: '10px' }} className='blockquote'>Всім сучасним підприємствам та громадським організаціям настійно рекомендовано <b>професійну дезінфекцію приміщень</b> раз на квартал. Це надійний бар’єр для розвитку в приміщенні шкідливих мікроорганізмів, таких як бактерії, віруси, грибок. Ми пропонуємо всім бажаючим якісні послуги в даній галузі.</blockquote>

          <p style={{ marginTop: '10px' }} className='description'>При проведенні процедури дезінфекції нашими фахівцями, дезрозчином обробляється всі меблі, а також поверхні приміщення, обладнання та різні важкодоступні ділянки. <b>Після обробки</b> Ви можете бути впевнені у власній безпеці та насолоджуватися чистотою свого житла. Довіряти важливі заходи професіоналам – це гарна звичка, яка дає чудовий результат.</p>
                
          <p style={{ marginTop: '10px' }} className='description'>На нашому сайті, Ви зможете, детально ознайомитися з усім переліком послуг, що пропонуються нашою компанією, і дізнатися ціни на цікаві для Вас роботи. <b>Великий досвід</b>, накопичений фахівцями нашої компанії, при роботі в приміщеннях з різною специфікою дозволяє нам говорити про те, що в якому стані не було призначене для прибирання приміщення.</p>
                  
        </div>
      </section>
  )
};

export default SectionAboutSanitationOfPremises;