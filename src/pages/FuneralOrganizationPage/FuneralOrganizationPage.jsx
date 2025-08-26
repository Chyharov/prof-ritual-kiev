import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionFuneralOrganization from 'components/SectionFuneralOrganization/SectionFuneralOrganization';
import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionServicesInformation from 'components/SectionServicesInformation/SectionServicesInformation';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const FuneralOrganizationPageTitle = [{ title: 'Організація похорону' }]

const FuneralOrganizationPage = () => {
  return (
    <>
      <Header />
        <main>
            <SectionContactsList />
            <SectionCurrentPage title={FuneralOrganizationPageTitle} />
            <SectionFuneralOrganization />  
            <SectionNavigationList />
            <SectionServicesInformation />
            <SectionContacts />
            <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default FuneralOrganizationPage;