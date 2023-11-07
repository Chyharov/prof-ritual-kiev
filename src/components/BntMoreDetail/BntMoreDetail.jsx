import  { MdArrowRightAlt } from 'react-icons/md'
import s from './BntMoreDetail.module.scss'



const BntMoreDetail = () => {
    return (
    
    <>
        <button type="button" aria-label='Детальніше' className={s.funeralServices__btn}>ДЕТАЛЬНІШЕ<MdArrowRightAlt /></button>
    </>
  )
};

export default BntMoreDetail;
