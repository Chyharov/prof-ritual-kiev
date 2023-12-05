import Header from 'components/Header/Header';
import SectionHero from 'components/SectionHero/SectionHero';
import SectionProfRitualTitle from 'components/SectionProfRitualTitle/SectionProfRitualTitle';
import SectionRitualServices from 'components/SectionRitualServices/SectionRitualServices';
import SectionAboutCompany from 'components/SectionAboutCompany/SectionAboutCompany';
import SectionAdvantages from 'components/SectionAdvantages/SectionAdvantages';
import SectionOrganizationFuneralServices from 'components/SectionOrganizationFuneralServices/SectionOrganizationFuneralServices';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionRitualGoods from 'components/SectionRitualGoods/SectionRitualGoods';
import SectionServicesInformation from 'components/SectionServicesInformation/SectionServicesInformation';
import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionServicesInformationDetail from 'components/SectionServicesInformationDetail/SectionServicesInformationDetail';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';

import { ritualServicesListMainPage } from 'services/ritualServicesListMainPage';

const MainPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionHero />
          <SectionProfRitualTitle />
          <SectionRitualServices array={ritualServicesListMainPage}/>
          <SectionAboutCompany />
          <SectionAdvantages />
          <SectionOrganizationFuneralServices />
          <SectionNeedHelp />
          <SectionRitualGoods />
          <SectionServicesInformation />
          <SectionServicesInformationDetail />
          <SectionNavigationList />
          <SectionContacts />
          <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default MainPage;