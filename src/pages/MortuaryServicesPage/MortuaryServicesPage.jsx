import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionMortuaryServices from 'components/SectionMortuaryServices/SectionMortuaryServices';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionAboutMortuaryServices from 'components/SectionAboutMortuaryServices/SectionAboutMortuaryServices';
import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const MortuaryServicesPageTitle = [{ title: 'Послуги моргу' }]

const MortuaryServicesPage = () => {
  return (
    <>
      <Header />
        <main>
            <SectionContactsList />
            <SectionCurrentPage title={MortuaryServicesPageTitle} />
            <SectionMortuaryServices />
            <SectionNeedHelp />
            <SectionAboutMortuaryServices />
            <SectionNavigationList />
            <SectionContacts />
            <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default MortuaryServicesPage;