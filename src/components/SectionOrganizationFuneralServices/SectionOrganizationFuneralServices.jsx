import { Link } from 'react-router-dom';
import OrganizationFuneralServiceslCallBack from '../../watermarked/OrganizationFuneralServices/OrganizationFuneralServiceslCallBack.jpg';
import OrganizationFuneralServicesDrawingOrder from '../../watermarked/OrganizationFuneralServices/OrganizationFuneralServicesDrawingOrder.jpg';
import OrganizationFuneralServicesCremationOrFuneral from '../../watermarked/OrganizationFuneralServices/OrganizationFuneralServicesCremationOrFuneral.jpg';
import OrganizationFuneralDiner from '../../watermarked/OrganizationFuneralServices/OrganizationFuneralDiner.jpg';
import BntMoreDetail from 'components/BntMoreDetail/BntMoreDetail';
import s from './SectionOrganizationFuneralServices.module.scss';

const SectionOrganizationFuneralServices = () => {
  return (
    <section className={s.sectionOrganizationFuneralServices}>
      <div className={'container ' + s.funeralServices__container}>
        <h2
          className={s.funeralServices__title}
          style={{ marginBottom: '20px' }}
        >
          Організація ритуальних послуг
        </h2>

        <p className="description" style={{ marginBottom: '20px' }}>
          Процес кремації або захоронення від похоронного бюро «Проф Ритуал»
        </p>

        <ul
          className={s.organizationFuneralList}
          style={{ marginBottom: '20px' }}
        >
          <li className={s.organizationFuneralList__item}>
            <img
              className={s.organizationFuneralList__itemImg}
              src={OrganizationFuneralServiceslCallBack}
              alt="OrganizationFuneralServiceslCallBack"
            />
            <p className="description" style={{ marginBottom: '0px' }}>
              <b>1. Зателефонуйте нам → домовляємося про деталі.</b>
            </p>
          </li>
          <li className={s.organizationFuneralList__item}>
            <img
              className={s.organizationFuneralList__itemImg}
              src={OrganizationFuneralServicesDrawingOrder}
              alt="OrganizationFuneralServicesDrawingOrder"
            />
            <p className="description" style={{ marginBottom: '0px' }}>
              <b>
                2. Оформлення договору-замовлення → оформлення документів,
                підбір зали, труни та необхідної ритуальної атрибутики.
              </b>
            </p>
          </li>
          <li className={s.organizationFuneralList__item}>
            <img
              className={s.organizationFuneralList__itemImg}
              src={OrganizationFuneralServicesCremationOrFuneral}
              alt="OrganizationFuneralServicesCremationOrFuneral "
            />
            <p className="description" style={{ marginBottom: '0px' }}>
              <b>
                3. Процес кремації або захоронення → проведення процедури та
                передача праху.
              </b>
            </p>
          </li>
          <li className={s.organizationFuneralList__item}>
            <img
              className={s.organizationFuneralList__itemImg}
              src={OrganizationFuneralDiner}
              alt="OrganizationFuneralDiner"
            />
            <p className="description" style={{ marginBottom: '0px' }}>
              <b>
                4. Додатково → організація поминального обіду, транспорт,
                супровід.
              </b>
            </p>
          </li>
        </ul>

        <Link to="/ritualservices">
          <BntMoreDetail />
        </Link>
      </div>
    </section>
  );
};

export default SectionOrganizationFuneralServices;
