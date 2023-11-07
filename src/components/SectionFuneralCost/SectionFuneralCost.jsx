import FuneralCostDecoration from '../../images/CustomIcons/Tombstone.png'
import s from './SectionFuneralCost.module.scss'

const funeralCostList = [
    {
        id: 1,
        title: 'ЕКОНОМ',
        price: '11 500',
        currency: 'грн',
        item: [
            'Труна дерев’яна (оббита тканиною);',
            'Похоронний набір;',
            'Покривало;',
            'Вінок із штучних кольорів (2шт.);',
            'Хрест на могилу із табличкою;',
            'Автокатафалк (15-17 посадочних місць);',
            'Похоронна бригада (4 особи).'
        ]
    },
    {
        id: 2,
        title: 'СТАНДАРТ',
        price: '',
        currency: 'уточнюйте',
        item: [
            'Труна дерев’яна-комбінована (оббита драпірованим атласом з дерев’яною лакованою накладкою);',
            'Похоронний набір;',
            'Покривало атласне;',
            'Ритуальні рушники (2шт.);',
            'Вінок із штучних кольорів (4шт.);',
            'Хрест на могилу із табличкою;',
            'Автокатафалк (15-17 посадочних місць);',
            'Похоронна бригада (4 особи).'
        ]
    },
    {
        id: 3,
        title: 'VIP',
        price: '',
        currency: 'уточнюйте',
        item: [
            'Труна дерев’яна лакована;',
            'Похоронний набір;',
            'Покривало атласне;',
            'Ритуальні рушники (2шт.);',
            'Вінок із штучних кольорів 180см (4шт.);',
            'Хрест на могилу із табличкою;',
            'Автокатафалк VIP класу (15-17 посадочних місць);',
            'Священик;',
            'Розпорядник похорону;',
            'Похоронна бригада (4 особи);',
            'Музичний супровід.'
        ]
    },
];


const SectionFuneralCost = () => {
    return (
      <section className={s.sectionFuneralCost}>
        <div className={'container ' + s.funeralCost__container}>

            <h2 className={s.funeralCost__title}><img className={s.funeralCost__decoration} loading="lazy" src={FuneralCostDecoration} alt="funeralCost__decoration" />Вартість похорону</h2>
                
            <ul className={s.funeralCost__list}>
                {funeralCostList.map((item) => (  
                <li className={s.funeralCost__item} key={item.id}>
                    <div className={s.funeralCost__itemContainer}><h3 className={s.funeralCost__itemTitle}>{item.title}</h3><p className={s.funeralCost__itemPrice}>{item.price} <em className={s.funeralCost__itemPriceValue}>{item.currency}</em></p></div>
                        
                    <ul className={s.funeralCost__itemList}>
                        {item.item.map((detail, index) => (
                        <li className={'description ' + s.funeralCost__itemListItem} key={index}>{detail}</li>
                        ))}
                    </ul>
                
                </li>
                ))}
            </ul>
            
        </div>
      </section>
  )
};

export default SectionFuneralCost;
