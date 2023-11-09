import Header from 'components/Header/Header';
import SectionHero from 'components/SectionHero/SectionHero';
import SectionRitualServices from 'components/SectionRitualServices/SectionRitualServices';
import SectionAboutCompany from 'components/SectionAboutCompany/SectionAboutCompany';
import SectionAdvantages from 'components/SectionAdvantages/SectionAdvantages';
import SectionOrganizationFuneralServices from 'components/SectionOrganizationFuneralServices/SectionOrganizationFuneralServices';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionRitualGoods from 'components/SectionRitualGoods/SectionRitualGoods';
import SectionServicesInformation from 'components/SectionServicesInformation/SectionServicesInformation';
import SectionServicesInformationDetail from 'components/SectionServicesInformationDetail/SectionServicesInformationDetail';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import ComponentForMainPage from 'components/ComponentForMainPage/ComponentForMainPage';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionRitualServices />
        <SectionAboutCompany />
        <SectionAdvantages />
        <SectionOrganizationFuneralServices />
        <SectionNeedHelp />
        <SectionRitualGoods />
        <SectionServicesInformation />
        <SectionServicesInformationDetail />
        <SectionContacts />
        <SectionRitualServicesList />
        <ComponentForMainPage />     
      </main>
    </>
  );
};



export default MainPage;