import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionAboutRitualWreath from 'components/SectionAboutRitualWreath/SectionAboutRitualWreath';
import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const RitualWreathPageTitle = [{ title: 'Ритуальні Вінки' }]

const RitualWreathPage = () => {
  return (
    <>
      <Header />
        <main>
            <SectionContactsList />
            <SectionCurrentPage title={RitualWreathPageTitle} />
            <SectionAboutRitualWreath />
            <SectionNavigationList />
            <SectionContacts />
            <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default RitualWreathPage;