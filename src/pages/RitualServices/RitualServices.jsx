import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionRitualServices from 'components/SectionRitualServices/SectionRitualServices';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionRitualGoods from 'components/SectionRitualGoods/SectionRitualGoods';
import SectionServicesInformation from 'components/SectionServicesInformation/SectionServicesInformation';
import SectionServicesInformationDetail from 'components/SectionServicesInformationDetail/SectionServicesInformationDetail';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';

import { ritualServicesListRitualServicesPage } from 'services/ritualServicesListRitualServicesPage';


const RitualServices = () => {
  return (
    <>
      <Header />
        <main>
          <SectionContactsList />
          <SectionCurrentPage />
          <SectionRitualServices array={ritualServicesListRitualServicesPage} />
          <SectionNeedHelp />
          <SectionRitualGoods />
          <SectionServicesInformation />
          <SectionServicesInformationDetail />
          <SectionContacts />
          <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default RitualServices;