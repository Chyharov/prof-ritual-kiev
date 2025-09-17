import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionPetsCremation from 'components/SectionPetsCremation/SectionPetsCremation';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';

const PetsCremationTitle = [{ title: 'Кремація тварин' }];

const PetsCremationPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionContactsList />
        <SectionCurrentPage title={PetsCremationTitle} />
        <SectionPetsCremation />
        <SectionNeedHelp />
        <SectionNavigationList />
        <SectionContacts />
        <SectionRitualServicesList />
      </main>
      <Footer />
    </>
  );
};

export default PetsCremationPage;
