import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionAboutSanitationOfPremises from 'components/SectionAboutSanitationOfPremises/SectionAboutSanitationOfPremises';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const StoneOfMemoryPageTitle = [{ title: 'Камінь Спогаду' }]

const StoneOfMemoryPage = () => {
  return (
    <>
      <Header />
        <main>
            <SectionContactsList />
            <SectionCurrentPage title={StoneOfMemoryPageTitle} />
            <SectionAboutSanitationOfPremises />
            <SectionNeedHelp />
            <SectionNavigationList />
            <SectionContacts />
            <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default StoneOfMemoryPage;