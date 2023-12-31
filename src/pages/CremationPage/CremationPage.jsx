import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionAboutCremation from 'components/SectionAboutCremation/SectionAboutCremation';
import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionServicesInformation from 'components/SectionServicesInformation/SectionServicesInformation';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const CremationPageTitle = [{ title: 'Кремація' }]

const CremationPage = () => {
  return (
    <>
      <Header />
        <main>
            <SectionContactsList />
            <SectionCurrentPage title={CremationPageTitle} />
            <SectionAboutCremation />  
            <SectionNavigationList />
            <SectionServicesInformation />
            <SectionContacts />
            <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default CremationPage;