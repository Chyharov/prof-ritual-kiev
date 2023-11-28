import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionAboutFuneralEscortByMedicalPersonnal from 'components/SectionAboutFuneralEscortByMedicalPersonnal/SectionAboutFuneralEscortByMedicalPersonnal';
import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const FuneralEscortByMedicalPersonnalPageTitle = [{ title: 'Супровід похорону медперсоналом' }]

const FuneralEscortByMedicalPersonnalPage = () => {
  return (
    <>
      <Header />
        <main>
            <SectionContactsList />
            <SectionCurrentPage title={FuneralEscortByMedicalPersonnalPageTitle} />
            <SectionAboutFuneralEscortByMedicalPersonnal />
            <SectionNavigationList />
            <SectionContacts />
            <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default FuneralEscortByMedicalPersonnalPage;