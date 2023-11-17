import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionAboutRitualAgent from 'components/SectionAboutRitualAgent/SectionAboutRitualAgent';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionQualityServices from 'components/SectionQualityServices/SectionQualityServices';
import SectionServicesInformation from 'components/SectionServicesInformation/SectionServicesInformation';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const RitualAgentPageTitle = [{ title: 'Виклик ритуального агента' }]

const RitualAgentPage = () => {
  return (
    <>
      <Header />
        <main>
            <SectionContactsList />
            <SectionCurrentPage title={RitualAgentPageTitle} />
            <SectionAboutRitualAgent />
            <SectionNeedHelp />
            <SectionQualityServices />  
            <SectionServicesInformation />
            <SectionContacts />
            <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default RitualAgentPage;